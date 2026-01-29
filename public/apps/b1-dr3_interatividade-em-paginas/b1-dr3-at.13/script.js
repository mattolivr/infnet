let container;

const botaoAdicionar = document.querySelector("#botao-adicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);

const erroInput = document.querySelector("small");

const input = document.getElementById("input-tarefa");
input.addEventListener("keyup", () => {
  botaoAdicionar.disabled = input.value == null || input.value.length < 4;

  if (input.value != null && input.value.length > 0 && input.value.length < 4) {
    input.classList.add("erro");
    erroInput.textContent =
      "O título da tarefa precisa ter pelo menos 4 caracteres";
  } else {
    input.classList.remove("erro");
    erroInput.textContent = "";
  }
});

function adicionarTarefa() {
  criaContainer();

  const tarefa = document.createElement("li");
  tarefa.textContent = input.value;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.classList.add("red");

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-xmark");

  botaoExcluir.appendChild(i);
  botaoExcluir.textContent = "Remover";
  botaoExcluir.addEventListener("click", () => removerTarefa(tarefa));

  tarefa.appendChild(botaoExcluir);
  container.appendChild(tarefa);
  input.value = "";
}

function removerTarefa(tarefa) {
  container.removeChild(tarefa);
  destroiContainer();
}

function criaContainer() {
  if (
    container == null ||
    !document.querySelector("body").contains(container)
  ) {
    container = document.createElement("ul");
    document.body.appendChild(container);
  }
}

function destroiContainer() {
  if (container != null && container.children.length === 0) {
    document.body.removeChild(container);
  }
}
