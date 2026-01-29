const inicio = prompt("Digite a data inicial (dd/mm/AAAA)").split("/");
const fim = prompt("Digite a data final (dd/mm/AAAA)").split("/");

const dataInicial = new Date(
  Number(inicio[2]),
  Number(inicio[1]) - 1,
  Number(inicio[0])
);

const dataFinal = new Date(Number(fim[2]), Number(fim[1]) - 1, Number(fim[0]));

if (dataFinal <= dataInicial) {
  alert("A data final deve ser maior que a data inicial");
} else {
  const diferenca = dataFinal.getTime() - dataInicial.getTime();
  const diferencaEmDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  alert(`A diferença entre as datas é de ${diferencaEmDias} dias.`);
}
