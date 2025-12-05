import './App.css'
import Header from './components/header'
import BookForm from './components/bookform'
import BookList from './components/booklist'

function App() {
  const livros = retornaLivros();

  return (
    <>
      <Header />
      <main>
        <BookForm />
        <BookList livros={livros} />
      </main>
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
