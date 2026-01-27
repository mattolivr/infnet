import './App.css'

function App() {
  const nomeUsuario = "Matheus";

  return (
    <>
      <h1>{ getMensagemSaudacao() }, { nomeUsuario }</h1>
      <h2>Minhas Tarefas:</h2>
      <ul>
        { getTarefas() }
      </ul>
    </>
  )
}

// Exercício 8
function getMensagemSaudacao() {
  const horario = new Date().getHours();
  if (horario < 6 || horario >= 18) {
    return "Boa noite";
  }
  return horario < 12 ? "Bom dia" : "Boa tarde";
}

// Exercício 9
function getTarefas() {
  const tarefas = [
    "Estudar React",
    "Fazer exercícios",
    "Ler documentação"
  ];

  return (
    <>
      { 
      tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))
      }
    </>
  );
}

export default App
