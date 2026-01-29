let incremento = 0;

do {
  incremento = Number.parseInt(prompt("Insira o incremento (1 a 10)"));
  if (incremento <= 0 || incremento > 10) {
    alert("Insira somente um valor de 1 a 10");
  }
} while (incremento <= 0 || incremento > 10);

for (let contador = 0; contador <= 50; contador += incremento) {
  console.log(contador);
}
