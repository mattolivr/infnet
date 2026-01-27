window.addEventListener("DOMContentLoaded", () => {
  console.log("A página foi carregada.");

  const idioma = navigator.language;
  const url = window.location.href;

  const lista = document.querySelector("ul");
  lista.addEventListener("conteudoInserido", () => {
    alert("As informações foram inseridas na página com sucesso!");
    window.location.href = "https://www.infnet.edu.br";
  });

  const itemIdioma = document.createElement("li");
  itemIdioma.textContent = `Idioma do Navegador: ${idioma}`;

  const itemUrl = document.createElement("li");
  itemUrl.textContent = `URL da Página: ${url}`;

  lista.appendChild(itemIdioma);
  lista.appendChild(itemUrl);
  lista.dispatchEvent(new Event("conteudoInserido"));
});
