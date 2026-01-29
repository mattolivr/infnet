const frutas = document.querySelectorAll("#lista li");

frutas.forEach((li) => {
  li.addEventListener("click", () => {
    alert(li.textContent);
  });
});
