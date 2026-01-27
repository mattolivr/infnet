const curtidas = document.getElementById("numero-curtidas");
let numCurtidas = Number(curtidas.textContent);
atualizaNumeroCurtidas();

const botaoLike = document.querySelector("button.like");
botaoLike.addEventListener("click", realizaCurtida);

const botaoComment = document.querySelector("button.comment");
botaoComment.addEventListener("click", criaInputComentario);

const botaoSalvar = document.querySelector("button.bookmark");
botaoSalvar.addEventListener("click", salvaPost);

const imagem = document.querySelector(".carousel img");
let clicksSeguidosImagem = 0;
imagem.addEventListener("click", () => {
  if (clicksSeguidosImagem === 0) {
    clicksSeguidosImagem++;
    setTimeout(() => {
      clicksSeguidosImagem = 0;
    }, 1000);
  } else if (
    clicksSeguidosImagem === 1 &&
    !botaoLike.classList.contains("liked")
  ) {
    realizaCurtida();
  }
});

function realizaCurtida() {
  if (botaoLike.classList.contains("liked")) {
    botaoLike.classList.remove("liked");
    botaoLike.firstElementChild.classList.replace("fa-solid", "fa-regular");
    numCurtidas--;
  } else {
    botaoLike.classList.add("liked");
    botaoLike.firstElementChild.classList.replace("fa-regular", "fa-solid");
    numCurtidas++;
  }

  atualizaNumeroCurtidas();
}

function atualizaNumeroCurtidas() {
  curtidas.textContent = numCurtidas.toLocaleString("pt-BR");
}

function insereComentario() {
  const input = document.querySelector(".comment input");
  const comentario = input.value;

  if (comentario == null || comentario == "") {
    return;
  }

  const container = document.querySelector(".comments");
  const comment = document.createElement("p");

  comment.innerHTML = `<strong>usuario</strong> ${comentario}`;
  container.appendChild(comment);
  destroiInputComentario();
}

function criaInputComentario() {
  let container = document.querySelector("div.comment");
  if (container != null) {
    return;
  }

  container = document.createElement("div");
  container.classList.add("comment");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Adicione um comentário para twentyonepilots";
  container.appendChild(input);

  const button = document.createElement("button");
  button.classList.add("primary");
  button.disabled = true;
  button.addEventListener("click", insereComentario);

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-arrow-up");

  input.addEventListener("keyup", () => {
    button.disabled = input.value == null || input.value == "";
  });

  button.appendChild(i);
  container.appendChild(button);

  document.querySelector("article").appendChild(container);
  input.focus();
}

function destroiInputComentario() {
  const container = document.querySelector("article div.comment");
  document.querySelector("article").removeChild(container);
}

function salvaPost() {
  if (botaoSalvar.firstElementChild.classList.contains("fa-regular")) {
    botaoSalvar.firstElementChild.classList.replace("fa-regular", "fa-solid");
    alert("Post salvo!");
  } else {
    botaoSalvar.firstElementChild.classList.replace("fa-solid", "fa-regular");
  }
}
