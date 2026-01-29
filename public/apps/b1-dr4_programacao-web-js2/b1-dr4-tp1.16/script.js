const pessoas = [];

do {
  const nome = prompt("Insira o nome da pessoa");
  const salario = Number(prompt("Insira o salário da pessoa"));

  pessoas.push({ nome, salario });
} while (prompt("Deseja continuar?").includes("sim"));

let pessoaMaiorSalario = null;
for (const pessoa of pessoas) {
  if (
    pessoaMaiorSalario === null ||
    pessoa.salario > pessoaMaiorSalario.salario
  ) {
    pessoaMaiorSalario = pessoa;
  }
}

alert(
  `A pessoa com maior salário é ${
    pessoaMaiorSalario.nome
  } com salário de R$${pessoaMaiorSalario.salario.toFixed(2)}`
);
