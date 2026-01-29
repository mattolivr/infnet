const frase = "A vingança nunca é plena, mata a alma e a envenena!";
let novaFrase = "";

for (const index in frase) {
  if (index === 0 || frase[index - 1] === " ") {
    novaFrase += frase[index].toUpperCase();
  } else {
    novaFrase += frase[index];
  }
}

console.log(novaFrase);
