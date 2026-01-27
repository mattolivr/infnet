const imagem = document.querySelector("img");
const imagem1 = "assets/suco.jpg";
const imagem2 = "assets/cafe.jpg";

function trocaImagem() {
  imagem.src = imagem.src.includes(imagem1) ? imagem2 : imagem1;
}

imagem.onclick = trocaImagem;
