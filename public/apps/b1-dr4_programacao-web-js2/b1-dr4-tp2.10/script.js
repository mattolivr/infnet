const texto = prompt("Insira qualquer frase:");
const inverteTexto = (texto) => {
  let textoInvertido = "";

  while (textoInvertido.length < texto.length) {
    const indice = texto.length - textoInvertido.length - 1;
    textoInvertido += texto[indice];
  }

  return textoInvertido;
};

alert("Frase invertida: " + inverteTexto(texto));
