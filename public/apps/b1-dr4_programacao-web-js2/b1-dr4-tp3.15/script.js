// const filmes = ["Avatar", "Titanic", "Moana", "Era do Gelo", "Shrek"];
const filmes = [
  prompt("Insira o filme favorito da 1ª Pessoa: "),
  prompt("Insira o filme favorito da 2ª Pessoa: "),
  prompt("Insira o filme favorito da 3ª Pessoa: "),
  prompt("Insira o filme favorito da 4ª Pessoa: "),
  prompt("Insira o filme favorito da 5ª Pessoa: "),
];

let filmesCaracteres = "Quantidade de caracteres de cada filme:\n";
filmes.forEach(
  (filme, index) =>
    (filmesCaracteres += `${index + 1} - ${filme}: ${filme.length}\n`)
);

alert(filmesCaracteres);

let filmesNaoTitanic = filmes.filter(
  (f) => !f.toLocaleLowerCase().includes("titanic")
);
alert(
  `${filmesNaoTitanic.length} pessoas não escolheram "Titanic" como filme favorito`
);

let maiorFilme = filmes.reduce(
  (maiorFilme, filmeAtual) =>
    filmeAtual.length > maiorFilme.length ? filmeAtual : maiorFilme,
  ""
);

alert("O filme com a maior quantidade de caracteres é " + maiorFilme);

let mediaCaracteres = filmes.reduce((soma, filme) => (soma += filme.length), 0);
if (filmes.length) {
  const media = Math.floor(mediaCaracteres / filmes.length);
  alert("A média de caracteres dos filmes é: " + media);
}
