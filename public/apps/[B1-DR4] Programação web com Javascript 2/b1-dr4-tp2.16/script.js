let incremento = 0;

do {
  incremento = Number.parseInt(prompt("Insira o incremento (1 a 10)"));
  if (incremento <= 0 || incremento > 10) {
    alert("Insira somente um valor de 1 a 10");
  }
} while (incremento <= 0 || incremento > 10);

let continuaContando = true;
for (let contador = 0; continuaContando; contador += incremento) {
  console.log(contador);

  continuaContando =
    prompt(
      `Contador = ${contador}\n Deseja continuar incrementando o contador?`
    ).toLocaleLowerCase() !== "não";
  if (!continuaContando) {
    alert("Valor final do contador: " + contador);
  }
}
