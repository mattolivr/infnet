const img = document.querySelector("img");
img.alt = "twenty one pilots - breach";
img.title = "twenty one pilots - breach";

img.addEventListener("load", () => {
  img.style.border = "3px solid #2c1817";
  img.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.6)";
  img.style.borderRadius = "10px";
  alert("Imagem carregada com sucesso!");
});

img.src =
  "https://upload.wikimedia.org/wikipedia/en/5/5a/Twenty_One_Pilots_-_Breach.png";
