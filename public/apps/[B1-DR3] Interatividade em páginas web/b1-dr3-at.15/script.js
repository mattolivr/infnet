let inputsComErro = [];
const adicionaErro = (inputId) => {
  if (!inputsComErro.includes(inputId)) {
    inputsComErro.push(inputId);
  }
};
const removeErro = (inputId) => {
  if (inputsComErro.includes(inputId)) {
    inputsComErro = inputsComErro.filter((i) => i !== inputId);
  }
};

validaInput(
  "login",
  (login) => login.length > 8,
  "O login deve ter no máximo 8 caracteres"
);

validaInput("idade", (idade) => idade < 12, "A idade ser pelo menos 12 anos");

validaInput("genero", (genero) => genero === "nenhum", "Selecione uma opção");

validaInput(
  "senha",
  (senha) => senha.length < 4 || senha.length > 10,
  "A senha deve ter entre 4 e 10 caracteres"
);

validaInput(
  "senha-confirmacao",
  (confirma) => {
    const senha = document.getElementById("senha").value;
    return senha !== confirma;
  },
  "As senhas não correspondem"
);

const checkboxesIds = ["rock", "mpb", "funk", "pop"];
let checkboxesSelecionados = 0;
checkboxesIds.forEach((id) => {
  const checkbox = document.getElementById(id);
  checkbox.addEventListener("input", () => {
    checkboxesSelecionados += checkbox.checked ? 1 : -1;

    verificaCheckbox();
  });
});

verificaCheckbox();

function verificaCheckbox() {
  const checkbox = document.getElementById("rock");
  const small = checkbox.parentNode.querySelector("small");

  if (checkboxesSelecionados < 2) {
    small.textContent = "Selecione ao menos 2 opções";
    adicionaErro("rock");
  } else {
    small.textContent = "";
    removeErro("rock");
  }

  bloqueiaEnvio();
}

function validaInput(inputId, validacao, erro) {
  const input = document.getElementById(inputId);
  realizaValidacao(inputId, input, validacao, erro);
  input.addEventListener(input.tagName === "INPUT" ? "keyup" : "input", () =>
    realizaValidacao(inputId, input, validacao, erro)
  );
}

function realizaValidacao(inputId, input, validacao, erro) {
  if (!input.value || input.value.length === 0) {
    exibeErro(inputId, "");
    return;
  }

  if (validacao(input.value)) {
    exibeErro(inputId, erro);
  } else {
    exibeErro(inputId, "");
  }

  bloqueiaEnvio();
}

function exibeErro(inputId, erro) {
  const input = document.getElementById(inputId);
  const small = input.parentNode.querySelector("small");
  small.textContent = erro;

  if (erro.length > 0 && !input.classList.contains("erro")) {
    input.classList.add("erro");
    adicionaErro(inputId);
  } else if (erro.length === 0) {
    input.classList.remove("erro");
    removeErro(inputId);
  }
}

function bloqueiaEnvio() {
  const envio = document.querySelector("input[type=submit]");
  envio.disabled = inputsComErro.length > 0;
}
