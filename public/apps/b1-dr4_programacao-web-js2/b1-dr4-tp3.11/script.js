const pessoas = [];

for (let i = 0; i < 5; i++) {
  const altura = Number(prompt(`Informe a altura da pessoa ${i + 1} (cm):`));
  const sexo = prompt("Informe o gênero (m/f): ");
  pessoas.push({ altura, sexo });
}

// pessoas.push(
//   { altura: 165, sexo: "f" },
//   { altura: 182, sexo: "m" },
//   { altura: 174, sexo: "f" },
//   { altura: 160, sexo: "f" },
//   { altura: 170, sexo: "m" }
// );

let mensagem = [];

const maiorAltura = pessoas.reduce(
  (anterior, atual) => Math.max(anterior, atual.altura),
  0
);

mensagem.push("Maior altura do grupo " + maiorAltura + " cm");

const menorAltura = pessoas.reduce(
  (anterior, atual) =>
    anterior === 0 ? atual.altura : Math.min(anterior, atual.altura),
  0
);

mensagem.push("Menor altura do grupo " + menorAltura + " cm");

const mediaMulheres = { somaAltura: 0, qtde: 0 };
pessoas.forEach((p) => {
  if (p.sexo === "f") {
    mediaMulheres.somaAltura += p.altura;
    mediaMulheres.qtde += 1;
  }
});

if (mediaMulheres.qtde > 0) {
  mensagem.push(
    "Média de altura entre as mulheres: " +
      (mediaMulheres.somaAltura / mediaMulheres.qtde).toFixed(0) +
      " cm"
  );
}

const numeroHomens = pessoas.reduce(
  (anterior, atual) => (anterior += atual.sexo === "m" ? 1 : 0),
  0
);

mensagem.push("Quantidade de homens: " + numeroHomens);

alert(mensagem.join("\n"));
