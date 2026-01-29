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
  "nome",
  (valor) => valor.length < 4 || !valor.includes("SA"),
  'O nome deve conter pelo menos 4 caracteres e a palavra "SA"'
);

validaInput(
  "fundacao",
  (data) => {
    const dataLimite = new Date("2000-01-01");
    const dataSelecionada = new Date(data + "T00:00:00");
    return dataSelecionada <= dataLimite;
  },
  "A data deve ser igual ou posterior a 01/01/2000"
);

validaInput(
  "email",
  (email) => {
    const arroba = email.indexOf("@");
    const ponto = email.indexOf(".");

    return (
      arroba === -1 || ponto === -1 || arroba > ponto || ponto - arroba <= 1
    );
  },
  "Insira um E-Mail válido"
);

validaInput(
  "descricao",
  (descricao) => descricao.length > 50,
  "A descrição deve ter no máximo 50 caracteres"
);

validaInput(
  "atuacao",
  (atuacao) => atuacao === "nenhuma",
  "Selecione uma opção"
);

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
