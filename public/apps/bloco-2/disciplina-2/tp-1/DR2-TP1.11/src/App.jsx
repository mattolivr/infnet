import { useState } from 'react';
import './App.css'
import Card from './components/card'

function App() {
  // Exercício 14 - Reenderizar array de objetos
  const produtos = getProdutos();

  // Exercício 15 - State para incrementar ou decrementar a quantidade de produtos exibidos
  const [qtde, setQtde] = useState(0);

  return (
    <>
      <ul id='produtos'>
        {produtos.filter((_, index) => index < qtde).map(produto => (
          <li key={produto.nome}>
            <Card title={produto.nome}>
              R$ {produto.preco.toFixed(2)}
            </Card>
          </li>
        ))}
      </ul>
      <button onClick={() => setQtde(qtde + 1)}>Adicionar Produto</button>
      <button onClick={() => setQtde(qtde - 1)}>Remover Produto</button>
    </>
  )
}

export default App;

function getProdutos() {
  return [
    { nome: 'Monitor AOC 24"', preco: 1200.00 },
    { nome: 'Teclado Mecânico Redragon', preco: 300.00 },
    { nome: 'Mouse Gamer Logitech', preco: 150.00 },
    { nome: 'Headset HyperX', preco: 250.00 },
    { nome: 'Cadeira Gamer DXRacer', preco: 900.00 },
  ];
}
