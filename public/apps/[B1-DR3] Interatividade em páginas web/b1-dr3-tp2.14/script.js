const azuis = document.querySelectorAll(".azul");
const vermelhos = document.querySelectorAll(".vermelho");

azuis.forEach((a) => a.classList.replace("azul", "vermelho"));
vermelhos.forEach((a) => a.classList.replace("vermelho", "azul"));
