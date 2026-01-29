// 2.05

const body = document.getElementsByTagName("body")[0];
const ul = document.createElement("ul");

ul.style.listStyle = "none";
ul.style.background = "black";
ul.style.padding = 0;
ul.style.color = "white";
ul.style.fontFamily = "sans-serif";

const frutas = ["Banana", "Maçã", "Pera", "Uva"];
for (const fruta of frutas) {
  const li = document.createElement("li");
  li.innerText = fruta;

  li.style.borderLeft = "4px solid blue";
  li.style.padding = "8px 12px";

  ul.appendChild(li);
}

body.appendChild(ul);

// 2.06

const segundo = document.getElementById("segundo");

const h2 = document.createElement("h2");
h2.innerText = "Heading Teste";

body.insertBefore(h2, segundo);

// 2.07

const galeria = document.getElementById("galeria");
galeria.classList.add("flex-row");

const imagensSrc = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Twenty_One_Pilots_-_Breach.png/250px-Twenty_One_Pilots_-_Breach.png",
  "https://i.scdn.co/image/ab67616d0000b273d1d301e737da4324479c6660",
  "https://m.media-amazon.com/images/I/71MRKrpsukL.jpg",
];

for (const imagem of imagensSrc) {
  const img = document.createElement("img");
  img.src = imagem;
  img.style.height = "250px";
  img.style.width = "250px";

  galeria.appendChild(img);
}

// 2.08

const lista = document.getElementsByTagName("ul")[0];
const primeiroItem = lista.childNodes[0];
if (primeiroItem) {
  lista.removeChild(primeiroItem);
}

const primeiroParagrafo = document.getElementById("primeiro");
body.removeChild(primeiroParagrafo);

// 2.09

const novoItemLista = document.createElement("li");
novoItemLista.textContent = "Abacaxi";

const ultimoItemLista = lista.childNodes[lista.childNodes.length - 1];

if (ultimoItemLista) {
  lista.replaceChild(novoItemLista, ultimoItemLista);
}
