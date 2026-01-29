const passo = Number(
  prompt(`Escolha o passo a partir do qual você deseja ver as instruções para fazer o café:

1. Selecionar os grãos de café
2. Moer os grãos de café
3. Preparar o filtro e a água
4. Fazer a infusão do café
5. Servir
`)
);

let mensagens = ["Instruções para preparar o seu café"];

switch (passo) {
  case 1:
    mensagens.push(
      "Escolha grãos de café de boa qualidade. A origem do grão influenciará o sabor final"
    );
  case 2:
    mensagens.push(
      "Utilize a máquina de moer grãos. Moa apenas a quantidade de café que você vai usar agora para garantir o máximo de frescor"
    );
  case 3:
    mensagens.push(
      "Coloque o filtro de papel no porta-filtro e escalde-o com água quente para remover o sabor de papel"
    );
  case 4:
    mensagens.push(
      "Coloque o pó de café no filtro e despeje a água quente lentamente sobre ele, em movimentos circulares"
    );
  case 5:
    mensagens.push(
      "Armazene a infusão em uma garrafa térmica. Sirva em xícaras"
    );
}

let msg = "";
mensagens.forEach((passo, index) => {
  msg += `${index > 0 ? index + " - " : ""}${passo}\n`;
});

alert(msg);
