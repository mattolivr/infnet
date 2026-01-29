const fibonacci = [0, 1];
const maxSequencia = 20;

for (let i = 2; i < maxSequencia + 1; i++) {
  const soma = fibonacci[i - 2] + fibonacci[i - 1];
  fibonacci.push(soma);
}

alert(
  `O ${maxSequencia}º Número da sequência de Fibonacci é ${fibonacci[maxSequencia]}`
);
