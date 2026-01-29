const num = prompt("Digite um número inteiro:");

try {
  const numero = parseInt(num);

  if (isNaN(numero)) {
    throw new Error("Insira um número válido");
  }

  console.log("Número convertido", numero);
} catch (error) {
  console.error(error);
}
