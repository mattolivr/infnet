let numA = Number(prompt("Número 1").replace(",", "."));
let numB = Number(prompt("Número 2").replace(",", "."));

if (!Number.isInteger(numA)) {
  numA = Math.ceil(numA);
}

if (!Number.isInteger(numB)) {
  numB = Math.ceil(numB);
}

const potenciaA = Math.pow(numA, 2);
const potenciaB = Math.pow(numB, 3);

alert(`Resultado: ${Math.sqrt(potenciaA + potenciaB)}`);
