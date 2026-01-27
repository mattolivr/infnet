const cores = ["corVerde", "corRoxa", "corLaranja", "corVermelha"];

const caixasConteiner = document.getElementById("novo");
const botaoNovo = document.getElementById("btn-novo");
botaoNovo.addEventListener("click", () => {
  const novaCaixa = document.createElement("div");
  novaCaixa.classList.add(cores[Math.floor(Math.random() * cores.length)]);
  novaCaixa.style.height = "40px";
  novaCaixa.style.width = "40px";
  novaCaixa.setAttribute("draggable", true);

  novaCaixa.id = caixasConteiner.children.length + 1;
  novaCaixa.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", novaCaixa.id);
  });

  caixasConteiner.appendChild(novaCaixa);
});

const conteineres = document.querySelectorAll(".container");

conteineres.forEach((conteiner) => {
  conteiner.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  conteiner.addEventListener("drop", (e) => {
    const caixaId = e.dataTransfer.getData("text/plain");
    const caixaArrastada = document.getElementById(caixaId);

    if (caixaArrastada) {
      conteiner.appendChild(caixaArrastada);
    }
  });
});
