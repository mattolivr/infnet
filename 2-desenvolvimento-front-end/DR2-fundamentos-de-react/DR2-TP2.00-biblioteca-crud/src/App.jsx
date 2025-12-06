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

  const [livroEditando, setLivroEditando] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  const mostrarMensagem = (texto, tipo = 'success') => {
    setMensagem({ texto, tipo });
    setTimeout(() => setMensagem(null), 3000);
  };

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
    mostrarMensagem('Livro adicionado com sucesso');
  };

  const removerLivro = (index) => {
    setLivros(livros.filter((_, i) => i !== index));
    mostrarMensagem('Livro removido', 'info');
  };

  const editarLivro = (index) => {
    setLivroEditando({ ...livros[index], index });
  };

  const atualizarLivro = (livroAtualizado) => {
    setLivros(livros.map((livro, i) => 
      i === livroEditando.index ? livroAtualizado : livro
    ));
    setLivroEditando(null);
    mostrarMensagem('Livro atualizado');
  };

  return (
    <>
      <Header />
      {mensagem && (
        <div className={`mensagem mensagem-${mensagem.tipo}`}>
          {mensagem.texto}
        </div>
      )}
      <main>
        <BookForm 
          onAddBook={adicionarLivro} 
          onUpdateBook={atualizarLivro}
          livroEditando={livroEditando}
          onCancelEdit={() => setLivroEditando(null)}
        />
        <BookList 
          livros={livros} 
          onRemoveBook={removerLivro}
          onEditBook={editarLivro}
        />
      </main>
    </>
  )
}

export default App
