const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const entrada = Number(prompt("Digite um número"));

if (entrada > numeroAleatorio) {
  alert("Muito alto!");
} else if (entrada < numeroAleatorio) {
  alert("Muito baixo!");
} else {
  alert("Correto!");
}
