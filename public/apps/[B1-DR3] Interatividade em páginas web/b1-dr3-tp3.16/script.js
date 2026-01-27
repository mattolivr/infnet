const lista = document.getElementById("lista");

lista.addEventListener("click", () => {
  lista.childNodes.forEach((li) => {
    if (li.textContent === "Acre") {
      li.innerText = "Amapá";
      li.style.backgroundColor = "aliceblue";
    }
  });
});
