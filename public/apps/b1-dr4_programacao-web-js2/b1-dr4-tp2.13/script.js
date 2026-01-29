const qtdeNumeros = prompt("Quantos números deseja sortear?");

for (let i = 0; i < qtdeNumeros; i++) {
  console.log("Número sorteado " + (i + 1), Math.ceil(Math.random() * 60));
}
