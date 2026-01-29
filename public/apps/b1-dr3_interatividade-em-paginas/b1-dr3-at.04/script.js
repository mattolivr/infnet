const lista = document.getElementById("lista");

const primeiroItem = lista.firstChild.nextSibling;
primeiroItem.textContent = "Primeiro item";

const ultimoItem = lista.lastElementChild;
ultimoItem.textContent = "Último item";

const novoItem = document.createElement("li");
novoItem.textContent = "Óleo";
lista.appendChild(novoItem);
