const botao = document.querySelector("button");

let contagemClicks = 0;
botao.addEventListener("click", () => {
  const mensagem = `O Botão foi clicado ${++contagemClicks} vez(es)`;
  console.log(mensagem);
  botao.textContent = mensagem;
});

const paragrafo = document.querySelector("p");

paragrafo.addEventListener("mouseenter", () => {
  paragrafo.style.backgroundColor = "rgb(221, 221, 221)";
});

paragrafo.addEventListener("mouseout", () => {
  paragrafo.style.backgroundColor = "white";
});
