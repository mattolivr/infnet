const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", () => {
  const url = `https://wa.me//${telefone.value}?text=${encodeURIComponent(
    mensagem.value
  )}`;
  window.open(url, "_blank");
});
