const idade = Number(prompt("Digite a sua idade:"));
const respostaPremium = prompt("Você é um membro premium? ('Sim' ou 'Não')");

let usuarioPremium;

if (respostaPremium === "Sim") {
  usuarioPremium = true;
} else if (respostaPremium === "Não") {
  usuarioPremium = false;
} else {
  alert(
    "Erro: Resposta inválida. Por favor, responda apenas com 'Sim' ou 'Não'."
  );
  throw new Error(
    "Resposta inválida. Deve ser inserido um valor 'Sim' ou 'Não'"
  );
}

const isAcessoConcedido = idade >= 21 && usuarioPremium ? true : false;

console.log(isAcessoConcedido);
