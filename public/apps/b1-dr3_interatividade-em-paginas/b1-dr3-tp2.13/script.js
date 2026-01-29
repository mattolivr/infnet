const modal = document.getElementById("modal");
modal.classList.add("hide");

const botaoModal = document.querySelector("button");
botaoModal.addEventListener("click", () => {
  modal.classList.remove("hide");
});

const imgClose = document.getElementById("close");
imgClose.addEventListener("click", () => {
  modal.classList.add("hide");
});
