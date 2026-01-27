import { useState, useEffect } from "react";
import "./styles.css";

export default function BookForm({ onAddBook, onUpdateBook, livroEditando, onCancelEdit, mostrarMensagem }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  useEffect(() => {
    if (livroEditando) {
      setTitulo(livroEditando.titulo);
      setAutor(livroEditando.autor);
      setAno(livroEditando.ano.toString());
    }
  }, [livroEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!titulo.trim()) {
      mostrarMensagem('Por favor, preencha o título do livro', 'error');
      return;
    }
    
    if (!autor.trim()) {
      mostrarMensagem('Por favor, preencha o autor do livro', 'error');
      return;
    }
    
    if (!ano || ano <= 0) {
      mostrarMensagem('Por favor, preencha um ano válido', 'error');
      return;
    }
    
    if (livroEditando) {
      onUpdateBook({ 
        titulo: titulo.trim(), 
        autor: autor.trim(), 
        ano: Number(ano) 
      });
    } else {
      onAddBook({ 
        titulo: titulo.trim(), 
        autor: autor.trim(), 
        ano: Number(ano) 
      });
    }
    
    setTitulo("");
    setAutor("");
    setAno("");
  };

  const handleCancel = () => {
    setTitulo("");
    setAutor("");
    setAno("");
    if (livroEditando) {
      onCancelEdit();
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input 
            type="text" 
            id="titulo" 
            name="titulo" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="autor">Autor</label>
          <input 
            type="text" 
            id="autor" 
            name="autor" 
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="ano">Ano</label>
          <input 
            type="number" 
            id="ano" 
            name="ano" 
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>
      </div>
      
      <div className="button-container">
        <button type="button" className="btn-cancelar" onClick={handleCancel}>
          {livroEditando ? "Cancelar" : "Limpar"}
        </button>
        <button type="submit">
          {livroEditando ? "Atualizar Livro" : "Adicionar Livro"}
        </button>
      </div>
    </form>
  )
}
