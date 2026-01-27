const dadosCarros = [
  { marca: "Volkswagen", modelo: "Golf", ano: "2023", cor: "Cinza" },
  { marca: "Chevrolet", modelo: "Onix", ano: "2024", cor: "Azul" },
  { marca: "Ford", modelo: "Focus", ano: "2023", cor: "Prata" },
];

let ultimoAdicionado = -1;

const botaoCarros = document.getElementById("novo-carro");
botaoCarros.addEventListener("click", () => {
  const corpoTabela = document.querySelector("#tabela-carros tbody");
  const novaLinha = document.createElement("tr");

  if (++ultimoAdicionado > dadosCarros.length - 1) {
    alert("Todos os carros foram adicionados");
    return;
  }

  const carro = dadosCarros[ultimoAdicionado];
  console.log(ultimoAdicionado, dadosCarros.length);

  for (const dado of Object.values(carro)) {
    const novaCelula = document.createElement("td");
    novaCelula.textContent = dado;
    novaLinha.appendChild(novaCelula);
  }

  corpoTabela.appendChild(novaLinha);
});
