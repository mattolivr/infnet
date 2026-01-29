const produtosGamers = [
  { nome: "Teclado Mecânico", preco: 350 },
  { nome: "Mouse Gamer", preco: 150 },
  { nome: "Headset", preco: 200 },
  { nome: "Monitor 144Hz", preco: 1200 },
  { nome: "Mousepad RGB", preco: 90 },
];

const produtosMaisBaratos = produtosGamers.sort((a, b) => a.preco - b.preco);
const tresMaisBaratos = produtosMaisBaratos.slice(0, 3);

console.log(tresMaisBaratos);
