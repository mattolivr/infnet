import './App.css'
import Header from './components/header'

function App() {
  const livros = retornaLivros();

  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function retornaLivros() {
  return [
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", ano: 2005 },
    { titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", ano: 1932 },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 }
  ]
}

export default App
