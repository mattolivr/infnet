const cor1 = prompt("Digite a primeira cor:");
const cor2 = prompt("Digite a segunda cor:");
let corResultante;

if (cor1 === "amarelo" && cor2 === "laranja") {
  corResultante = "Vermelho";
} else if (cor1 === "vermelho" && cor2 === "amarelo") {
  corResultante = "Laranja";
} else if (cor1 === "azul" && cor2 === "vermelho") {
  corResultante = "Roxo";
} else if (cor1 === "amarelo" && cor2 === "azul") {
  corResultante = "Verde";
} else if (cor1 === "amarelo" && cor2 === "verde") {
  corResultante = "Azul";
} else if (cor1 === "branco" && cor2 === "preto") {
  corResultante = "Cinza";
} else if (cor1 === "vermelho" && cor2 === "branco") {
  corResultante = "Rosa";
} else if (cor1 === "vermelho" && cor2 === "verde") {
  corResultante = "Marrom";
} else if (cor1 === "laranja" && cor2 === "roxo") {
  corResultante = "Marrom terra";
} else if (cor1 === "roxo" && cor2 === "branco") {
  corResultante = "Lilás";
}

if (corResultante) {
  alert("A cor resultate é " + corResultante);
} else {
  alert("A combinação não resultou em nenhuma cor");
}
