// Sinceramente não entendi nada do que esse enunciado pediu, vou fazer uma interpretação freestyle aqui.

function mapearArray(array, fun) {
  return array.map(fun);
}

const numeros = [
  Number(prompt("Insira o número 1")),
  Number(prompt("Insira o número 2")),
  Number(prompt("Insira o número 3")),
  Number(prompt("Insira o número 4")),
  Number(prompt("Insira o número 5")),
];

const raizes = mapearArray(numeros, (item) => Math.sqrt(item));
alert("Raizes quadradas: " + raizes);
