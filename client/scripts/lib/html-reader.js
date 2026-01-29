import * as cheerio from "cheerio";
import fs from "fs";

export function readFile(filePath, subjectsPath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const $ = extractRawHTML(content);

  const id = filePath.split("/").pop().replace(".html", "");
  const rawTitle = $("h2").first().text().trim();
  const title = sanitizeTitle(rawTitle);
  const type = determineType(rawTitle);
  const description = getDescription($);
  const tasks = getTasks($, id, subjectsPath);

  const result = {
    id: id,
    type: type,
    title: title,
    description: description,
    tasks: tasks,
  };

  return JSON.stringify(result, null, 2);
}

function extractRawHTML(viewSourceHTML) {
  const $ = cheerio.load(viewSourceHTML);
  let rawHTML = "";

  $("body")
    .contents()
    .each((i, elem) => {
      if (elem.type === "tag" && elem.name === "span") {
        const spanText = $(elem).text();
        rawHTML += spanText;
      }
    });

  return cheerio.load(rawHTML);
}

function sanitizeTitle(title) {
  let sanitized = title.replace(/[-–—]/g, " ");

  sanitized = sanitized.replace(/[\[\(\{\|].*/g, "");

  const tpMatch = sanitized.match(/\b([A-Z]{2,})(\d+)\b/);
  if (tpMatch) {
    sanitized = sanitized.replace(tpMatch[0], tpMatch[2]);
  }

  sanitized = sanitized.replace(/\s+/g, " ");
  return sanitized.trim();
}

function determineType(title) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("teste de performance")) {
    return "tasklist";
  }

  if (lowerTitle.includes("assessment")) {
    return "assessment";
  }

  if (lowerTitle.includes("projeto")) {
    return "project";
  }

  return "unknown";
}

function getDescription($) {
  const descriptionElements = [];
  const introDiv = $("#intro");

  if (!introDiv.length) {
    return "";
  }

  introDiv.find("p").each((i, elem) => {
    const text = $(elem).text().trim();

    if (i <= 1) {
      return;
    }

    if (
      text.toLowerCase().includes("uso de ias") ||
      text.toLowerCase().includes("uso de ia") ||
      text.toLowerCase().includes("ferramentas generativa") ||
      text.toLowerCase().includes("todas as partes")
    ) {
      return false;
    }

    if (text.trim() !== "") {
      const html = $(elem).html();
      descriptionElements.push(html);
    }
  });

  const fullHTML = descriptionElements.join(" ");
  const parts = fullHTML.split(/<br\s*\/?>/gi);

  const paragraphs = parts
    .map((part) => part.trim())
    .filter((part) => part !== "")
    .map((part) => `<p>${part}</p>`);

  return paragraphs.join("");
}

function getTasks($, id, subjectsPath) {
  const tasksFilesMap = getTasksFiles(id, subjectsPath);
  const tasks = [];

  $(".pl-rotulo").each((i, elem) => {
    const taskIndex = i + 1;
    const title = extractTaskTitle($, elem);
    const description = extractTaskDescription($, elem);
    const file = findTaskFile(taskIndex, tasksFilesMap, id);

    tasks.push({
      index: taskIndex,
      title,
      description,
      file,
    });
  });

  return tasks;
}

function extractTaskTitle($, elem) {
  return $(elem).find("strong").text().trim();
}

function extractTaskDescription($, elem) {
  let descriptionHTML = "";
  let nextElem = $(elem).parent().next();

  while (nextElem.length && !nextElem.hasClass("editor-indent")) {
    if (nextElem.is("p")) {
      const html = nextElem.html();
      descriptionHTML += `<p>${html}</p>`;
    } else if (nextElem.is("ul")) {
      const html = nextElem.html();
      descriptionHTML += `<ul>${html}</ul>`;
    } else if (nextElem.is("ol")) {
      const html = nextElem.html();
      descriptionHTML += `<ol>${html}</ol>`;
    }
    nextElem = nextElem.next();
  }

  return descriptionHTML.trim() || "<p>TODO</p>";
}

function findTaskFile(taskIndex, tasksFilesMap, id) {
  const defaultFile = `${id}.${String(taskIndex).padStart(2, "0")}`;

  if (tasksFilesMap.has(taskIndex)) {
    return tasksFilesMap.get(taskIndex);
  }
  return defaultFile;
}

function parseFileInterval(fileName) {
  const parts = fileName.split("~");
  const startMatch = parts[0].match(/\.(\d+)$/);
  const start = startMatch ? parseInt(startMatch[1]) : null;
  const endMatch = parts[1].match(/(\d+)$/);
  const end = endMatch ? parseInt(endMatch[1]) : null;

  return { start, end };
}

function parseFileIndex(fileName) {
  const match = fileName.match(/\.(\d+)$/);
  return match ? parseInt(match[1]) : null;
}

function getTasksFiles(id, subjectsPath) {
  const taskIndexToFileMap = new Map();
  const subjectFolder = findSubjectFolder(id, subjectsPath);

  if (!subjectFolder) {
    return taskIndexToFileMap;
  }

  const taskFiles = getFilteredTaskFiles(id, subjectsPath, subjectFolder);

  taskFiles.forEach((fileName) => {
    mapFileToTaskIndices(fileName, taskIndexToFileMap);
  });

  return taskIndexToFileMap;
}

function findSubjectFolder(id, subjectsPath) {
  const subjectId = `[${id.split("-").slice(0, 2).join("-").toUpperCase()}]`;
  const folders = fs.readdirSync(subjectsPath);

  return folders.find((folder) => folder.startsWith(subjectId));
}

function getFilteredTaskFiles(id, subjectsPath, subjectFolder) {
  const subjectFolderPath = `${subjectsPath}/${subjectFolder}`;
  const files = fs.readdirSync(subjectFolderPath);

  return files.filter((file) => file.startsWith(id));
}

function mapFileToTaskIndices(fileName, map) {
  if (fileName.includes("~")) {
    const { start, end } = parseFileInterval(fileName);

    if (start !== null && end !== null) {
      for (let i = start; i <= end; i++) {
        map.set(i, fileName);
      }
    }
  } else {
    const fileIndex = parseFileIndex(fileName);

    if (fileIndex !== null) {
      map.set(fileIndex, fileName);
    }
  }
}
