import * as htmlReader from "./lib/html-reader.js";
import fs from "fs";

const PATH = "../public/apps";
const META_FILES = new Map();
const ASSIGNMENTS = new Map();
const SUBJECT_FOLDERS = new Map();

function main() {
  registerMetaFiles();
  readAssignmentFiles();
  appendAssignmentsToMeta();
}

function registerMetaFiles() {
  const dirs = fs
    .readdirSync(PATH)
    .filter((file) => fs.lstatSync(PATH + "/" + file).isDirectory());

  for (const dir of dirs) {
    const metaFilePath = `${PATH}/${dir}/meta.json`;
    if (!fs.existsSync(metaFilePath)) {
      continue;
    }

    const content = fs.readFileSync(metaFilePath, "utf-8");
    const id = JSON.parse(content).id;

    META_FILES.set(id, content);
    SUBJECT_FOLDERS.set(id, dir);
  }
}

function readAssignmentFiles() {
  const htmlPath = PATH + "/assets";
  const htmlFiles = fs
    .readdirSync(htmlPath)
    .filter((file) => file.endsWith(".html"));

  for (const file of htmlFiles) {
    const content = htmlReader.readFile(htmlPath + "/" + file, PATH);
    const id = JSON.parse(content).id;
    ASSIGNMENTS.set(id, content);
  }
}

function appendAssignmentsToMeta() {
  for (const [subjectId, metaContent] of META_FILES.entries()) {
    const assignments = [];
    const folderName = SUBJECT_FOLDERS.get(subjectId);

    for (const [assignmentId, assignmentContent] of ASSIGNMENTS.entries()) {
      if (assignmentId.startsWith(subjectId)) {
        const assignment = JSON.parse(assignmentContent);

        if (assignment.tasks && folderName) {
          assignment.tasks = assignment.tasks.map((task) => ({
            ...task,
            file: `${folderName}/${task.file}`,
          }));
        }

        assignments.push(assignment);
      }
    }
    assignments.sort((a, b) => a.id.localeCompare(b.id));

    const meta = JSON.parse(metaContent);
    meta.assignments = assignments;
    meta.folder = folderName;

    const subjectName = fs.readdirSync(PATH).find((dir) => {
      const dirId = dir.split("_")[0];
      return dirId === subjectId;
    });

    const outputPath = `${PATH}/${subjectName}/meta.json`;
    fs.writeFileSync(outputPath, JSON.stringify(meta, null, 2), "utf-8");
  }
}

main();
