import { useState } from "react";
import "./styles.css";

export default function BookForm({ onAddBook }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (titulo && autor && ano) {
      onAddBook({ 
        titulo, 
        autor, 
        ano: Number(ano) 
      });
      
      setTitulo("");
      setAutor("");
      setAno("");
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
        <button type="submit">Adicionar Livro</button>
      </div>
    </form>
  )
}
