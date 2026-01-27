document.addEventListener("DOMContentLoaded", () => {
  const bebidasLista = document.getElementById("bebidas");

  bebidasLista.addEventListener("mouseenter", () => {
    alert("testando evento");
  });
});
