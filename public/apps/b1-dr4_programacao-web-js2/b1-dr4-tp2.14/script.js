const solicitaListaDeCompra = () => {
  let listaDeCompras = [];

  while (true) {
    const item = prompt("Insira o nome do item");
    if (item == null || item === "") {
      break;
    }
    const preco = Number(prompt("Insira o preço do item"));

    listaDeCompras.push({ item, preco });
  }

  return listaDeCompras;
};

const lista = solicitaListaDeCompra();

let mensagem = "LISTA DE COMPRAS\n\n";
let soma = 0;

for (const item of lista) {
  mensagem += `${item.item} - R$ ${item.preco.toFixed(2).replace(".", ",")}\n`;
  soma += item.preco;
}
mensagem += "TOTAL: R$ " + soma.toFixed(2).replace(".", ",");

alert(mensagem);
