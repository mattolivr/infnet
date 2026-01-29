const somaTresNumeros = () => {
  let soma = 0;

  for (let i = 0; i < 3; i++) {
    const num = Number(prompt(`Insira o número ${i + 1}:`));
    soma += num;
  }

  return soma;
};

alert("Soma dos três números: " + somaTresNumeros());
