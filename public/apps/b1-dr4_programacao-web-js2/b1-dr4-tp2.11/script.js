const ehPalindromo = (palavra) => {
  let palavraInversa = "";
  for (let i = 0; i < palavra.length; i++) {
    palavraInversa += palavra[palavra.length - 1 - palavraInversa.length];
  }
  return palavra === palavraInversa;
};

console.log("radar", ehPalindromo("radar"));
console.log("osso", ehPalindromo("osso"));
console.log("teste", ehPalindromo("teste"));
