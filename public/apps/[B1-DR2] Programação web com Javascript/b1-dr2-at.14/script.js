const urlAtual = window.location.href;

if (urlAtual.includes("example.com")) {
  alert("O site está correto");
}

const nomeDoPais = prompt(
  "Digite o nome de um país para ser redirecionado à página da Wikipédia:"
);

if (nomeDoPais) {
  const nomeFormatado = nomeDoPais.replaceAll(" ", "_");
  const urlDestino = `https://pt.wikipedia.org/wiki/${nomeFormatado}`;
  window.location.href = urlDestino;
}
