const nomeUsuario = prompt("Digite o nome de usuário");
const senhaUsuario = prompt("Digite a senha");

if (nomeUsuario === "adm" && senhaUsuario === "123") {
  alert("Login realizado com sucesso");
} else {
  alert("Erro ao realizar o login. Credenciais incorretas!");
}
