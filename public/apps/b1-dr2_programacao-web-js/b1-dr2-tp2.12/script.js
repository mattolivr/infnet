const lado1 = Number(prompt("Insira o primeiro lado do triângulo"));
const lado2 = Number(prompt("Insira o segundo lado do triângulo"));
const lado3 = Number(prompt("Insira o terceiro lado do triângulo"));

if (lado1 === lado2 && lado1 === lado3) {
  alert("O triângulo é equilátero");
} else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
  alert("O triângulo é isósceles");
} else {
  alert("O triângulo é escaleno");
}
