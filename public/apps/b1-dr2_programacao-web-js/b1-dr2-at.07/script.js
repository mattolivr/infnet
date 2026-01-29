const numeroCentro = Number(prompt("Digite o número de centro"));
const distancia = Number(prompt("Digite o número da distância"));

const min = numeroCentro - distancia;
const max = numeroCentro + distancia;

const numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;

console.log(numeroAleatorio);
