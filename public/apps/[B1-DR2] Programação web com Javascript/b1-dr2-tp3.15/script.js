const votos1 = Number(prompt("Insira a quantidade de votos na opção RoboRat"));
const votos2 = Number(
  prompt("Insira a quantidade de votos na opção SuperKeyboard")
);
const votosInv = Number(prompt("Insira a quantidade de votos inválidos"));

const qtdeVotosValidos = votos1 + votos2;
const qtdeVotosTotais = qtdeVotosValidos + votosInv;

alert(
  "CONTAGEM DE VOTOS (CONSIDERANDO INVÁLIDOS)\n" +
    "MASCOTE | QTDE | PORCENTAGEM\n" +
    `RoboRat  ${votos1}  ${Math.ceil((votos1 / qtdeVotosTotais) * 100)}%\n` +
    `SuperKeyboard ${votos2} ${Math.ceil(
      (votos2 / qtdeVotosTotais) * 100
    )}%\n` +
    `INVÁLIDOS ${votosInv} ${Math.ceil((votosInv / qtdeVotosTotais) * 100)}%`
);

const percRobo = votos1 / qtdeVotosValidos;
const percKey = votos2 / qtdeVotosValidos;

let ganhador;
if (percRobo === percKey) {
  ganhador = "EMPATE! NÃO HOUVE GANHADOR";
} else {
  ganhador =
    percRobo > percKey ? "ROBORAT É O GANHADOR" : "SUPERKEYBOARD É O GANHADOR";
}

alert(
  "CONTAGEM DE VOTOS (DESCONSIDERANDO INVÁLIDOS)\n" +
    "MASCOTE | QTDE | PORCENTAGEM\n" +
    `RoboRat ${votos1} ${Math.ceil(percRobo * 100)}%\n` +
    `SuperKeyboard ${votos2} ${Math.ceil(percKey * 100)}%\n` +
    ganhador
);
