const algunsCarros = [
  { marca: "Chevrolet" },
  { marca: "Honda" },
  { marca: "Volkswagen" },
  { marca: "Fiat" },
  { marca: "Nissan" },
  { marca: "Renault" },
  { marca: "Volkswagen" },
  { marca: "Fiat" },
  { marca: "Volkswagen" },
  { marca: "Fiat" },
  { marca: "Volkswagen" },
  { marca: "Honda" },
  { marca: "Chevrolet" },
  { marca: "Nissan" },
  { marca: "Chevrolet" },
  { marca: "Honda" },
  { marca: "Renault" },
  { marca: "Renault" },
  { marca: "Nissan" },
];

function contaCarrosPorMarca(arrayCarros) {
  const contagemMarcas = {};

  for (const carro of arrayCarros) {
    if (contagemMarcas[carro.marca]) {
      contagemMarcas[carro.marca]++;
    } else {
      contagemMarcas[carro.marca] = 1;
    }
  }

  return contagemMarcas;
}

const contagem = contaCarrosPorMarca(algunsCarros);

let mensagem = "Contagem de carros por marca:\n\n";
for (const marca in contagem) {
  mensagem += `${marca}: ${contagem[marca]}\n`;
}

alert(mensagem);
