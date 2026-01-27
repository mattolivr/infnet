import fs from "fs";

const PATH = "./public/apps";
const OUTPUT_FILE = "./public/manifest.json";

function main() {
  const manifest = buildManifest();
  writeManifestFile(manifest);
  console.log(`Manifest gerado com sucesso: ${OUTPUT_FILE}`);
}

function buildManifest() {
  const subjects = collectMetaFiles();
  const sortedSubjects = sortSubjects(subjects);

  const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

  return {
    version: pkg.version,
    title: "Caderno",
    subtitle: "Repositório de Exercícios",
    description:
      "Este projeto é um repositório de exercícios desenvolvidos pelo autor para o curso de Engenharia de Software no Instituto Infnet.",
    generatedAt: new Date().toISOString(),
    subjects: sortedSubjects,
  };
}

function collectMetaFiles() {
  const subjects = [];
  const dirs = getSubjectDirectories();

  for (const dir of dirs) {
    const metaFilePath = `${PATH}/${dir}/meta.json`;

    if (!fs.existsSync(metaFilePath)) {
      continue;
    }

    const content = fs.readFileSync(metaFilePath, "utf-8");
    const meta = JSON.parse(content);

    subjects.push(meta);
  }

  return subjects;
}

function getSubjectDirectories() {
  return fs.readdirSync(PATH).filter((file) => isDirectory(`${PATH}/${file}`));
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function sortSubjects(subjects) {
  return subjects.sort((a, b) => a.id.localeCompare(b.id));
}

function writeManifestFile(manifest) {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), "utf-8");
}

main();
