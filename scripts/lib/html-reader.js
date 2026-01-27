import * as cheerio from "cheerio";
import fs from "fs";

export function readFile(filePath, subjectsPath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const $ = extractRawHTML(content);

  const id = filePath.split("/").pop().replace(".html", "");
  const title = getTitle($);
  const description = getDescription($);
  const tasks = getTasks($, id, subjectsPath);

  const result = {
    id: id,
    type: "exercise",
    title: title,
    description: description.substring(0, 200) + "...",
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

function getTitle($) {
  return sanitizeTitle($("h2").first().text().trim());
}

function sanitizeTitle(title) {
  return title.split(/[-–—\[\(\{\|]/)[0].trim();
}

function getDescription($) {
  const descriptionParagraphs = [];

  $("p").each((i, elem) => {
    const text = $(elem).text().trim();
    if (text && i < 5 && !text.includes("Matheus")) {
      descriptionParagraphs.push(text);
    }
  });

  return descriptionParagraphs.join(" ");
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
  let description = "";
  let nextElem = $(elem).parent().next();

  while (nextElem.length && !nextElem.hasClass("editor-indent")) {
    if (nextElem.is("p") || nextElem.is("ul")) {
      description += nextElem.text().trim() + " ";
    }
    nextElem = nextElem.next();
  }

  return description.trim() || "TODO";
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
