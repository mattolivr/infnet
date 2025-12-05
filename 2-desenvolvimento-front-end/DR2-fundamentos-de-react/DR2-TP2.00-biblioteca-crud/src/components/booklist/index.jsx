import "./styles.css";

export default function BookList({ livros, onRemoveBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Ano</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {livros.map((livro, index) => (
          <tr key={index}>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.ano}</td>
            <td>
              <button 
                className="btn-excluir" 
                onClick={() => onRemoveBook(index)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
