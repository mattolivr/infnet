const numero = Number(prompt("Insira um número inteiro"));
let resultadoFatorial = 1;

for (let i = numero; i > 1; i--) {
  resultadoFatorial *= i;
}

alert(`O Fatorial de ${numero} é: ${resultadoFatorial}`);
