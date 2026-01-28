import fs from "fs";

const PATH = "./public/apps";
const OUTPUT_FILE = "./src/manifest.json";

function main() {
  const manifest = buildManifest();
  writeManifestFile(manifest);
  console.log(`Manifest gerado com sucesso: ${OUTPUT_FILE}`);
}

function buildManifest() {
  const subjects = collectMetaFiles();
  const blocks = loadBlocksStructure();
  const blocksWithSubjects = organizeSubjectsByBlock(blocks, subjects);

  const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

  return {
    version: pkg.version,
    title: "Caderno",
    subtitle: "Repositório de Exercícios",
    description:
      "Este projeto é um repositório de exercícios desenvolvidos pelo autor para o curso de Engenharia de Software no Instituto Infnet.",
    generatedAt: new Date().toISOString(),
    blocks: blocksWithSubjects,
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

function loadBlocksStructure() {
  const manifestPath = OUTPUT_FILE;

  if (!fs.existsSync(manifestPath)) {
    return getDefaultBlocks();
  }

  const existingManifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  return existingManifest.blocks || getDefaultBlocks();
}

function getDefaultBlocks() {
  return [
    {
      id: "b1",
      name: "Fundamentos do desenvolvimento de software",
      icon: "code",
      subjects: [],
    },
    {
      id: "b2",
      name: "Desenvolvimento front-end com frameworks",
      icon: "stylus_note",
      subjects: [],
    },
    { id: "b3", name: "Fundamentos de dados", icon: "database", subjects: [] },
    {
      id: "b4",
      name: "Desenvolvimento back-end",
      icon: "cloud_download",
      subjects: [],
    },
    {
      id: "b5",
      name: "Análise e segurança de agentes de IA",
      icon: "borg",
      subjects: [],
    },
    {
      id: "b6",
      name: "Engenharia segura de softwares escaláveis",
      icon: "security",
      subjects: [],
    },
    { id: "b7", name: "Ciência da computação", icon: "memory", subjects: [] },
    {
      id: "b8",
      name: "Projeto de bloco",
      icon: "team_dashboard",
      subjects: [],
    },
  ];
}

function extractBlockId(subjectId) {
  return subjectId.split("-")[0];
}

function organizeSubjectsByBlock(blocks, subjects) {
  const blocksMap = new Map(
    blocks.map((block) => [block.id, { ...block, subjects: [] }]),
  );

  const sortedSubjects = sortSubjects(subjects);

  for (const subject of sortedSubjects) {
    const blockId = extractBlockId(subject.id);
    const block = blocksMap.get(blockId);

    if (block) {
      block.subjects.push(subject);
    }
  }

  return Array.from(blocksMap.values());
}

function writeManifestFile(manifest) {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), "utf-8");
}

main();
