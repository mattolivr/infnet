let frase =
  "toda ciencia seria superflua se houvesse coincidencia imediata entre a aparencia e a essencia das coisas";
const vogais = ["a", "e", "i", "o", "u"];

let resultado = "";
for (const char of frase) {
  if (!vogais.includes(char)) {
    resultado += char;
  }
}

console.log(resultado);
