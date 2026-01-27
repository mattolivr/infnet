// 1.01

const paises = [];

paises.push("Brasil");
paises.push("Russia");
paises.push("Índia");
paises.push("China");
paises.push("África do Sul");

console.log(paises);

// 1.02

console.log(paises.length);

// O enunciado primeiro pede para acessar o índice 2, que seria [2] e depois para acessar a posição 2, que seria [1]. Fiz o segundo.
paises[1] = "Egito";

// 1.03

paises.push("Arábia Saudita");
paises.splice(2, 1);

console.log(paises);
