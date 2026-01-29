const conteiner = document.getElementById("container");
const span = document.querySelector("#container span");

conteiner.addEventListener("click", () => {
  span.textContent = "teste";
});
