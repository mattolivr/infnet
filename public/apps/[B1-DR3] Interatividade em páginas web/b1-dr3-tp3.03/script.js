document.addEventListener("DOMContentLoaded", () => {
  const mudaModoEscuro = document.getElementById("mudaModoEscuro");
  const body = document.body;

  mudaModoEscuro.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
});
