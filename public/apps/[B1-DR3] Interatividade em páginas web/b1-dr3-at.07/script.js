const frases = [
  "Caros amigos, o julgamento imparcial das eventualidades pode nos levar a considerar a reestruturação do remanejamento dos quadros funcionais.",
  "Pensando mais a longo prazo, a consolidação das estruturas obstaculiza a apreciação da importância de alternativas às soluções ortodoxas.",
  "As experiências acumuladas demonstram que o fenômeno da Internet exige a precisão e a definição dos índices pretendidos.",
  "Gostaria de enfatizar que a crescente influência da mídia representa uma abertura para a melhoria dos índices pretendidos.",
  "Desta maneira, o desenvolvimento contínuo de distintas formas de atuação auxilia a preparação e a composição das condições inegavelmente apropriadas.",
];

const botao = document.getElementById("novo-paragrafo");
const container = document.querySelector("section");

botao.addEventListener("click", () => {
  const paragrafo = document.createElement("p");
  const frase = frases[Math.floor(Math.random() * frases.length)];

  paragrafo.textContent = frase;
  container.appendChild(paragrafo);
});
