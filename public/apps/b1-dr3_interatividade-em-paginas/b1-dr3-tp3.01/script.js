function adicionarItem() {
  const lista = document.getElementById("lista");
  const novoItem = document.createElement("li");
  const quantidadeFilhos = lista.children.length;

  novoItem.textContent = "Novo Item " + (quantidadeFilhos + 1);
  lista.appendChild(novoItem);

  if (quantidadeFilhos === 9) {
    alert("Item nº 10 adicionado!");
  }
}
