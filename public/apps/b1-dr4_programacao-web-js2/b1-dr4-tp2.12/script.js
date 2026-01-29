const nome = prompt("Digite o nome do time:");
const vitorias = Number(prompt("Informe o número de vitórias: "));
const empates = Number(prompt("Informe o número de empates: "));
const derrotas = Number(prompt("Informe o número de derrotas: "));

function retornaEstatisticas(vitorias, empates, derrotas) {
  const totalJogos = vitorias + empates + derrotas;
  const totalPontos = vitorias * 3 + empates;

  return { totalPontos, mediaPontos: totalPontos / totalJogos };
}

const estatisticas = retornaEstatisticas(vitorias, empates, derrotas);

console.log(
  "Estatisticas",
  "Time: " + nome,
  "Total de Pontos: " + estatisticas.totalPontos,
  "Média de Pontos por Partida: " + estatisticas.mediaPontos
);
