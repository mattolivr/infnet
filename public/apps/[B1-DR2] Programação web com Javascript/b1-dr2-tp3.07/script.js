const camiseta = prompt("Qual a cor da camiseta?");
const calca = prompt("Qual a cor da calça?");

if (camiseta === "vermelha" && calca === "amarela") {
  alert("Ketchup e mostarda!");
} else if (camiseta === "amarela" && calca === "preta") {
  alert("Agora você é uma abelha!");
} else if (camiseta === "branca" && calca === "jeans") {
  alert("Look clássico! Não tem como errar");
} else {
  alert("Hmm, nada a comentar...!");
}
