import "./styles.css";

export default function BookForm() {
  return (
    <form className="book-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" name="titulo" />
        </div>
        
        <div className="form-group">
          <label htmlFor="autor">Autor</label>
          <input type="text" id="autor" name="autor" />
        </div>
        
        <div className="form-group">
          <label htmlFor="ano">Ano</label>
          <input type="number" id="ano" name="ano" />
        </div>
      </div>
      
      <div className="button-container">
        <button type="submit">Adicionar Livro</button>
      </div>
    </form>
  )
}
