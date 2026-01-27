const mensagem = `Selecione uma das opções:
(1) - Pedra
(2) - Papel
(3) - Tesoura`;
let opcaoUsuario = 0;

while (
  Number.isNaN(opcaoUsuario) ||
  !Number.isInteger(opcaoUsuario) ||
  opcaoUsuario < 1 ||
  opcaoUsuario > 3
) {
  opcaoUsuario = Number(prompt(mensagem));
}

const opcaoCPU = Math.floor(Math.random() * 3) + 1;

if (opcaoUsuario == opcaoCPU) {
  alert("EMPATE! Ambos escolheram " + retornaNomeOpcao(opcaoUsuario));
} else {
  if (opcaoCPU < opcaoUsuario || (opcaoUsuario == 1 && opcaoCPU == 3)) {
    alert(
      `VOCÊ GANHOU! Você escolheu ${retornaNomeOpcao(
        opcaoUsuario
      )} e o computador escolheu ${retornaNomeOpcao(opcaoCPU)}`
    );
  } else {
    alert(
      `Você perdeu... Sua escolha foi ${retornaNomeOpcao(
        opcaoUsuario
      )} enquanto o computador escolheu ${retornaNomeOpcao(opcaoCPU)}`
    );
  }
}

function retornaNomeOpcao(opcao) {
  switch (opcao) {
    case 1:
      return "Pedra";
    case 2:
      return "Papel";
    case 3:
      return "Tesoura";
  }
}
