const altura = Number(prompt("Insira sua altura em cm")) / 100;
const peso = Number(prompt("Insira seu peso em kg"));

const imc = peso / (altura * altura);

if (imc < 18.5) {
  alert("Abaixo do Normal");
} else if (imc <= 24.9) {
  alert("Peso Normal");
} else if (imc <= 29.9) {
  alert("Excesso de Peso");
} else if (imc <= 34.9) {
  alert("Obesidade classe I");
} else if (imc <= 39.9) {
  alert("Obesidade classe II");
} else {
  alert("Obesidade classe III");
}
