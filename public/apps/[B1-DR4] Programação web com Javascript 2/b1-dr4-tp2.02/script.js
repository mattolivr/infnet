const algunsNumeros = [2, 5, 8, 10, 3];

let contador = 0;
while (contador < algunsNumeros.length) {
  let divisores = 1;
  for (let i = 1; i < algunsNumeros[contador]; i++) {
    if (algunsNumeros[contador] % i == 0) {
      divisores++;
    }
  }

  if (divisores !== 2) {
    algunsNumeros.splice(contador, 1);
  } else {
    contador++;
  }
}

console.log(algunsNumeros);
