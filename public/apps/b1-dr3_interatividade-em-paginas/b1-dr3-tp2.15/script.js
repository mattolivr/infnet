const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tr = btn.parentElement.parentElement;
    const nota = Number(tr.querySelector(".nota").textContent);
    tr.classList.add(nota >= 5 ? "verde" : "vermelho");
  });
});
