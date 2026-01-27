const lista = document.getElementById("lista");
const novoItem = document.getElementById("novo-item");
const botaoRemove = document.getElementById("remove-item");
const botaoAdiciona = document.getElementById("adiciona-item");

botaoRemove.addEventListener("click", removeItem);
botaoAdiciona.addEventListener("click", adicionaItem);

function removeItem() {
  if (lista.children.length > 0) {
    lista.lastElementChild.remove();
  }
}

function adicionaItem() {
  console.log(novoItem.value);
  if (novoItem.value.length) {
    const li = document.createElement("li");
    li.textContent = novoItem.value;
    lista.appendChild(li);
    novoItem.value = "";
  }
}
