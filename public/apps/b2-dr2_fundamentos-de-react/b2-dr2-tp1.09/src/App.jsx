import './App.css'

function App() {
  return (
    <>
      <p>Soma de dois números: { soma(5, 10) }</p>
      <p>Conversão de Celsius para Fahrenheit: { celciusParaFahrenheit(25) }</p>
    </>
  )
}

// Exercício 10
function soma(a, b) {
  return a + b;
}

function celciusParaFahrenheit(c) {
  return (c * 9/5) + 32;
}

export default App
