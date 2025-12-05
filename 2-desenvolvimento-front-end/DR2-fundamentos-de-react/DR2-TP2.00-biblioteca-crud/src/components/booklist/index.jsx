import "./styles.css";

export default function BookList({ livros }) {
  return (
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
  )
}
