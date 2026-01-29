import * as htmlReader from "./lib/html-reader.js";
import fs from "fs";

const PATH = "../public/apps";
const META_FILES = new Map();
const ASSIGNMENTS = new Map();

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

    for (const [assignmentId, assignmentContent] of ASSIGNMENTS.entries()) {
      if (assignmentId.startsWith(subjectId)) {
        assignments.push(JSON.parse(assignmentContent));
      }
    }
    assignments.sort((a, b) => a.id.localeCompare(b.id));

    const meta = JSON.parse(metaContent);
    meta.assignments = assignments;

    const subjectName = fs
      .readdirSync(PATH)
      .find((dir) =>
        dir.startsWith(
          `[${subjectId.split("-").slice(0, 2).join("-").toUpperCase()}]`,
        ),
      );

    const outputPath = `${PATH}/${subjectName}/meta.json`;
    fs.writeFileSync(outputPath, JSON.stringify(meta, null, 2), "utf-8");
  }
}

main();
