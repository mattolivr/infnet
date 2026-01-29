let numeros = [3, 1, 2, 5];
let resultado = [];

for (let i = 0; i < numeros.length; i++) {
  let array = [];

  for (let j = 0; j < numeros[i]; j++) {
    array.push(j + 1);
  }

  resultado.push(array);
}

console.log(resultado);
