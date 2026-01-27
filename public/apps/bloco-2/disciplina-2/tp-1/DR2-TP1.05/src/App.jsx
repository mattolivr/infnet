import './App.css'

function App() {
  const nomeUsuario = "Matheus de Oliveira";
  const idadeUsuario = 21;
  const usuarioVerificado = true;
  const bioUsuario = "Desenvolvedor Front-End";

  return (
    <>
      <div className='perfil'>
        <h1>{nomeUsuario}</h1>
        <span>{idadeUsuario} anos</span> ⋅ <span>{usuarioVerificado ? "Usuário Verificado" : "Usuário Não Verificado"}</span>
        <p>{bioUsuario}</p>
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
