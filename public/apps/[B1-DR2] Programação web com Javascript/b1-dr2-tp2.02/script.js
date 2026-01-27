let numA = Number(prompt("Número 1").replace(",", "."));
let numB = Number(prompt("Número 2").replace(",", "."));

/* Nesse caso não tem necessidade de verificar, se ele fizer o floor de um inteiro 
    tanto faz, mas entendi pelo enunciado que era melhor deixar explícito para fazer 
    apenas quando tiver decimal */

if (!Number.isInteger(numA)) {
  numA = Math.floor(numA);
}

if (!Number.isInteger(numB)) {
  numB = Math.floor(numB);
}

const divisao = numA / numB;
const resto = numA % numB;

alert(`O resultado da divisão é ${divisao}\n
    O resto da divisão é ${resto}`);
