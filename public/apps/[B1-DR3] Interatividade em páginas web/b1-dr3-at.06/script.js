const botao = document.createElement("button");
botao.textContent = "Ativar Caixa";

const caixa = document.querySelector(".caixa");
caixa.classList.add("inativa");

botao.addEventListener("click", () => {
  if (caixa.classList.contains("inativa")) {
    caixa.classList.replace("inativa", "ativa");
    botao.textContent = "Desativar Caixa";
  } else {
    caixa.classList.replace("ativa", "inativa");
    botao.textContent = "Ativar Caixa";
  }
});

caixa.parentNode.appendChild(botao);
