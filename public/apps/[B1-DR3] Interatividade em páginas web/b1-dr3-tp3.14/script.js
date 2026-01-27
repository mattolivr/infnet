const input = document.getElementById("texto");
const span = document.getElementById("nome");

input.addEventListener("keydown", (e) => {
  console.log("tecla pressionada", e.key, e.key == "Enter");
  if (e.key == "Enter") {
    span.textContent = input.value;
    input.value = "";
  }
});
