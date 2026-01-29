const botao = document.querySelector("button");

botao.addEventListener("mouseover", () => {
  botao.style.backgroundColor = "rgb(133, 48, 202)";
});

botao.addEventListener("mouseout", () => {
  botao.style.backgroundColor = "rgb(48, 143, 202)";
});

botao.addEventListener("mousedown", () => {
  botao.textContent = "Alterado";
});
