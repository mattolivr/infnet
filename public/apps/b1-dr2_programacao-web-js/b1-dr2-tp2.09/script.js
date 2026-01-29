const idade = Number(prompt("Insira a sua idade"));

let saudacao = "Olá ";
if (idade < 18) {
  saudacao += "jovem!";
} else {
  saudacao += "adulto!";
}

alert(saudacao);
