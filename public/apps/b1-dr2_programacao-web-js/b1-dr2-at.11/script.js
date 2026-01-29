const valorDoProduto = Number(prompt("Digite o valor do produto:"));
const isPromocao =
  prompt("O produto está em promoção? (Responda com 'Sim')") === "Sim";

let categoria;

if (valorDoProduto > 3000) {
  categoria = "Caro";
} else if (valorDoProduto >= 200 && valorDoProduto <= 3000 && isPromocao) {
  categoria = "Moderado";
} else if (valorDoProduto < 200 && !isPromocao) {
  categoria = "Barato";
}

alert("O produto é " + categoria);
