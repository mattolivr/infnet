const precoAlcool = Number(prompt("Digite o preço do litro do álcool:"));
const precoGasolina = Number(prompt("Digite o preço do litro da gasolina:"));
const valorParaAbastecer = Number(
  prompt("Qual o valor que deseja abastecer em R$?")
);

const razao = precoAlcool / precoGasolina;

if (razao < 0.7) {
  const litros = valorParaAbastecer / precoAlcool;
  alert(`Use álcool, você abastecerá ${litros.toFixed(2)} litros`);
} else {
  const litros = valorParaAbastecer / precoGasolina;
  alert(`Use gasolina, você abastecerá ${litros.toFixed(2)} litros`);
}
