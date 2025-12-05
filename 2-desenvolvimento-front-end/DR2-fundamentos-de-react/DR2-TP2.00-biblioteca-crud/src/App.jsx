import { useState } from 'react'
import './App.css'
import Header from './components/header'
import BookForm from './components/bookform'
import BookList from './components/booklist'

function App() {
  const [livros, setLivros] = useState([
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", ano: 2005 },
    { titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", ano: 1932 },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 }
  ]);

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  const removerLivro = (index) => {
    setLivros(livros.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <main>
        <BookForm onAddBook={adicionarLivro} />
        <BookList livros={livros} onRemoveBook={removerLivro} />
      </main>
    </>
  )
}

export default App
