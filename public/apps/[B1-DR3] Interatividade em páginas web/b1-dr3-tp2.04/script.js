const paragrafos = document.querySelectorAll("p");

paragrafos[0].classList.add("borda", "fundo");
paragrafos[1].classList.add("texto", "fundo");
paragrafos[2].classList.add("borda", "texto");

paragrafos[2].classList.remove("texto", "borda");

paragrafos[0].classList.replace("borda", "texto");
paragrafos[1].classList.replace("texto", "borda");
