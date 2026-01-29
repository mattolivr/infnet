function inserir() {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = `
        <p> 
            Power to the Local Dreamer <br>
            Entertain my Faith
        </p>
    `;

  const paragrafo = document.querySelector("#conteudo p");

  paragrafo.style.backgroundColor = "yellow";
  paragrafo.style.color = "blue";
}
