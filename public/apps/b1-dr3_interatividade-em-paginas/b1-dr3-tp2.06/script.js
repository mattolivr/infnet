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
