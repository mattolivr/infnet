import './App.css'

function App() {
  const nomeUsuario = "Maria";
  const horaAtual = new Date().toLocaleTimeString();

  return (
    <>
      <h1>{ `Olá ${nomeUsuario}, a hora atual é ${horaAtual}` }</h1>
    </>
  )
}

export default App
