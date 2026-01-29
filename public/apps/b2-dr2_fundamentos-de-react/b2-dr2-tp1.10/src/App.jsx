import './App.css'

function App() {
  const diferenca = (a, b) => a - b;
  const isImpar = (num) => num % 2 !== 0;

  return (
    <>
      <p>Diferença de dois números: 10 - 5 = { diferenca(10, 5) }</p>
      <p>5 é ímpar: { isImpar(5) ? 'Sim' : 'Não' }</p>
      <p>4 é ímpar: { isImpar(4) ? 'Sim' : 'Não' }</p>
    </>
  )
}

export default App
