const conteudo = document.querySelector(".conteudo");
const larguraAtual = conteudo.offsetWidth;
const alturaAtual = conteudo.offsetHeight;

conteudo.addEventListener("click", alteraDiv);

function alteraDiv() {
  conteudo.style.backgroundColor = "blue";
  conteudo.style.color = "white";
  conteudo.style.border = "4px solid orange";

  conteudo.style.width = larguraAtual + 2 + "px";
  conteudo.style.height = alturaAtual + 2 + "px";
}
