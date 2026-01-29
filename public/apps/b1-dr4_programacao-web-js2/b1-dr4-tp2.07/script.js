const respostas = [];

do {
  const nome = prompt("Qual o seu nome?");
  if (nome === null || nome === "") {
    break;
  }

  const resposta = prompt("Você gosta de programar em JavaScript? (sim / não)");
  if (
    resposta == null ||
    !["sim", "não"].includes(resposta.toLocaleLowerCase())
  ) {
    alert('Resposta inválida, responda com "Sim" ou "Não"');
  } else {
    respostas.push({ nome, resposta });
  }
} while (true);

if (respostas.length > 0) {
  alert(
    `TOTAL DE RESPOSTAS:
        SIM: ${calculaPorcentagemResposta(respostas, "sim")}%
        NÃO: ${calculaPorcentagemResposta(respostas, "não")}%`
  );
}

function calculaPorcentagemResposta(respostaArray, resposta) {
  return (
    (respostaArray.filter(
      (resp) => resp.resposta.toLocaleLowerCase() === resposta
    ).length /
      respostaArray.length) *
    100
  );
}
