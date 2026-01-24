import fs from "fs/promises";
import path from "path";

const BASE_DIR = path.join(process.cwd(), "public/apps");
const OUTPUT_FILE = path.join(process.cwd(), "src/manifest.json");

async function generateManifest() {
  try {
    console.log("🔍 Iniciando varredura de diretórios...");

    // 1. Ler a pasta raiz (public/apps) procurando Blocos
    const blockDirs = await getDirectories(BASE_DIR);
    const manifest = [];

    for (const blockDir of blockDirs) {
      const blockPath = path.join(BASE_DIR, blockDir);

      // Verifica se é um bloco válido (tem bloco.json)
      const blockConfig = await readJsonFile(
        path.join(blockPath, "bloco.json"),
      );
      if (!blockConfig) continue;

      // 2. Dentro do Bloco, procurar Disciplinas
      const subjectDirs = await getDirectories(blockPath);
      const subjects = [];

      for (const subjectDir of subjectDirs) {
        const subjectPath = path.join(blockPath, subjectDir);

        // Verifica se é uma disciplina válida
        const subjectConfig = await readJsonFile(
          path.join(subjectPath, "disciplina.json"),
        );
        if (!subjectConfig) continue;

        // 3. Dentro da Disciplina, procurar Exercícios (Assessments)
        const exerciseDirs = await getDirectories(subjectPath);
        const exercises = [];

        for (const exerciseDir of exerciseDirs) {
          const exercisePath = path.join(subjectPath, exerciseDir);

          // Verifica se é um exercício válido
          const exerciseConfig = await readJsonFile(
            path.join(exercisePath, "exercicio.json"),
          );
          if (!exerciseConfig) continue;

          // 4. LER O CONTEÚDO MARKDOWN
          const mdContent = await readFileContent(
            path.join(exercisePath, "conteudo.md"),
          );

          exercises.push({
            id: exerciseDir, // usa o nome da pasta como ID
            ...exerciseConfig,
            path: `/apps/${blockDir}/${subjectDir}/${exerciseDir}`, // Caminho web para assets
            content: mdContent || "", // O markdown vira uma string aqui
          });
        }

        subjects.push({
          id: subjectDir,
          ...subjectConfig,
          exercises: exercises,
        });
      }

      manifest.push({
        id: blockDir,
        ...blockConfig,
        subjects: subjects,
      });
    }

    // Salvar o arquivo final
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
    console.log(`✅ Manifesto gerado com sucesso em: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("❌ Erro ao gerar manifesto:", error);
  }
}

// --- Funções Auxiliares ---

// Retorna apenas diretórios dentro de um caminho
async function getDirectories(source) {
  const dirents = await fs.readdir(source, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

// Lê e parseia JSON (retorna null se não existir)
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return null; // Arquivo não existe ou erro de parse
  }
}

// Lê arquivo de texto (Markdown)
async function readFileContent(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (err) {
    return null;
  }
}

generateManifest();
