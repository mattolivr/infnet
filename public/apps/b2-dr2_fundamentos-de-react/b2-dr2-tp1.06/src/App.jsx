import './App.css'

function App() {
  const livro = {
    titulo: 'Fundamentos de React',
    autor: 'João da Silva',
    ano: 2023,
    editora: 'Exemplo',
    capitulos: [
      'Introdução ao React',
      'Componentes e Props',
      'Estado e Ciclo de Vida',
      'Manipulação de Eventos',
      'Renderização Condicional',
    ],
  }

  const capitulos = livro.capitulos.map((capitulo, index) => (
    <li key={index}>{capitulo}</li>
  ))

  return (
    <>
      <h1>{livro.titulo}</h1>
      <h2>{livro.autor}</h2>
      <p>Editora {livro.editora} ⋅ {livro.ano}</p>
      <h3>Capítulos</h3>
      <ol>
        {capitulos}
      </ol>
    </>
  )
}

export default App
