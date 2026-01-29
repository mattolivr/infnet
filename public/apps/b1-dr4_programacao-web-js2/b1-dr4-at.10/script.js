let frase = "Nesse momento, o Bitcoin está em R$ 603.015,03, Loucura, né?";

let valorString = frase.split("R$ ")[1];
valorString = valorString
  .split(",")
  .filter((char, index) => index <= 1)
  .join();

const valor = Number(valorString.replace(".", "").replace(",", "."));
console.log((valor / 3).toFixed(2));
