const algarismos = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
];

const num = prompt("Digite um número de um a nove (por extenso)");
const algarismo = algarismos.indexOf(num);

if (algarismo > -1) {
  alert(algarismo + 1);
} else {
  alert("Não foi possível encontrar o algarismo correspondente");
}
