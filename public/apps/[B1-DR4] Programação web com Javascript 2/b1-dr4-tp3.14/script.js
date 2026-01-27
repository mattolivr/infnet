const num1 = Number(prompt("Digite o número 1"));
const num2 = Number(prompt("Digite o número 2"));
const num3 = Number(prompt("Digite o número 3"));

ordenarNumerosDecrescente(num1, num2, num3);

function ordenarNumerosDecrescente(num1, num2, num3) {
  const novaOrdem = [num1, num2, num3];
  novaOrdem.sort((n1, n2) => n2 - n1);

  alert(`Os números em ordem decrescente ficam: ${novaOrdem.join(", ")}`);
}
