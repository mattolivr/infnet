const dinheiroQueRecebi = Number(
  prompt("Dinheiro para o pagamento: ").replace(",", ".")
);
const valorDoProduto = Number(prompt("Valor do produto: ").replace(",", "."));

console.log(dinheiroQueRecebi, valorDoProduto);
const troco = dinheiroQueRecebi - valorDoProduto;

console.log("Troco", troco);
console.log("Troco (Arredondado p/ Cima)", Math.ceil(troco));
console.log("Troco (Arredondado p/ Baixo)", Math.floor(troco));
