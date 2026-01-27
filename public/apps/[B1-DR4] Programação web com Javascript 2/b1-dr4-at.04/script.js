let nomeUsuario = "";

do {
  nomeUsuario = prompt("Digite o seu nome");
} while (nomeUsuario === null || nomeUsuario.length === 0);

console.log(nomeUsuario);
