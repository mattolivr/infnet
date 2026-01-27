const botaoInserir = document.createElement("button");
botaoInserir.textContent = "Inserir";

const lista = document.getElementById("lista");
botaoInserir.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Teste";
  lista.append(li);
});

document.body.append(botaoInserir);
