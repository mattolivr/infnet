let inicio = Number(prompt("Número de Início").replace(",", "."));
let fim = Number(prompt("Número de Fim").replace(",", "."));

if (!Number.isInteger(inicio)) {
  inicio = Math.floor(inicio);
}

if (!Number.isInteger(fim)) {
  fim = Math.floor(fim);
}

const numAleatorio = Math.floor(Math.random() * (fim - inicio) + inicio);
console.log("Número aleatório", numAleatorio);
