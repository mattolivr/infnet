const valorCompra = Number(prompt("Digite o valor total da compra: "));
const tipoConsumidor = prompt(
  "Digite a letra correspondente à categoria que se encaixa:\n" +
    "(A) Gestante\n" +
    "(B) Aposentado\n" +
    "(C) Pensionista\n" +
    "(D) Nenhuma das Opções Acima"
).toLowerCase();

// Coloquei a opção (D) pq meio que n faz sentido só atender os tipos acima;

const opcoesValidas = ["a", "b", "c", "d"];
if (!opcoesValidas.includes(tipoConsumidor)) {
  alert("ERRO: O Tipo de Consumidor informado não existe.");
} else {
  let taxaDesconto = 0;

  switch (tipoConsumidor) {
    case "a":
      taxaDesconto = valorCompra >= 80 ? 20 : 15;
      break;
    case "b":
      taxaDesconto = valorCompra >= 80 ? 15 : 10;
      break;
    case "c":
      taxaDesconto = valorCompra >= 80 ? 10 : 5;
      break;
    default:
      break;
  }

  const valorFinal =
    valorCompra - valorCompra * (taxaDesconto > 0 ? taxaDesconto / 100 : 0);
  alert(`Valor total: R$ ${valorFinal}`);
}
