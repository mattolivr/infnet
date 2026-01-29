function dividir(divisor, dividendo) {
  if (dividendo === 0) {
    throw new Error("Não é possível dividir por 0");
  }

  return divisor / dividendo;
}

try {
  const num1 = Number(prompt("Insira o primeiro número"));
  const num2 = Number(prompt("Insira o segundo número"));

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Insira apenas números");
  }

  alert(dividir(num1, num2));
} catch (error) {
  alert(error);
}
