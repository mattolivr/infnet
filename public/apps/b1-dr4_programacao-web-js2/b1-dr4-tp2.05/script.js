const filmesNerds = [
  { titulo: "Star Wars: Uma Nova Esperança", ano: 1977 },
  { titulo: "Matrix", ano: 1999 },
  { titulo: "Harry Potter e a Pedra Filosofal", ano: 2001 },
  { titulo: "Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
];

for (const filme of filmesNerds) {
  if (filme.titulo === "Harry Potter e a Pedra Filosofal") {
    console.log("Ano de lançamento: " + filme.ano);
    break;
  }
}
