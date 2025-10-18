import './App.css'

function App() {
  const usuario = {
    nome: "Matheus de Oliveira",
    idade: 21,
    verificado: true,
    bio: "Desenvolvedor Front-End"
  };

  return (
    <>
      <div className='perfil'>
        <h1>{usuario.nome}</h1>
        <span>{usuario.idade} anos</span> ⋅ <span>{usuario.verificado ? "Usuário Verificado" : "Usuário Não Verificado"}</span>
        <p>{usuario.bio}</p>
      </div>
      <div className="card">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto omnis aliquam quam expedita suscipit id alias eos sed rerum quos officiis optio, cum nam, ullam doloribus facilis rem voluptatum maxime?
        </p>
      </div>
    </>
  )
}

export default App
