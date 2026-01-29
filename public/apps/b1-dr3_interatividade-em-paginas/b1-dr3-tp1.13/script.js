const raio = prompt("Informe o raio do círculo (cm)");

const circulo = {
  raio: raio,
  circunferencia: () => Math.PI * raio * 2,
  area: () => Math.PI * raio * raio,
};

console.log("Circunferencia: " + circulo.circunferencia());
console.log("Área: " + circulo.area());
