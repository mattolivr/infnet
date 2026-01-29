const tipoOrdenacao = Number(
  prompt(
    "Digite uma opção de ordenacao\n" +
      "(1) Crescente\n" +
      "(2) Decrescente\n" +
      "(3) Maior número entre os outros dois\n"
  )
);

const num1 = Number(prompt("Digite o primeiro número"));
const num2 = Number(prompt("Digite o segundo número"));
const num3 = Number(prompt("Digite o terceiro número"));

let valores = [num1, num2, num3];

switch (tipoOrdenacao) {
  case 1:
    alert(`Ordem Crescente: ${valores.sort((a, b) => a - b).join(",")}`);
    break;
  case 2:
    alert(`Ordem Decrecente: ${valores.sort((a, b) => b - a).join(",")}`);
    break;
  case 3:
    const maior = Math.max(num1, num2, num3);
    valores = valores.filter((v) => v !== maior);
    alert(`Maior no meio: ${valores[0]}, ${maior}, ${valores[1]}`);
    break;
  default:
    alert("Tipo de Ordenação Inválido!");
}
