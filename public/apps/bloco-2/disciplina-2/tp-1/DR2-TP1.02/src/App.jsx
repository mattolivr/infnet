import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='title'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>React.JS ⋅ Histórico</h1>
      </div>
      <div className="card">
        <ul>
          <li><strong>2011 ⋅ Protótipo</strong> Jordan Walke, um engenheiro de software no Facebook, cria o "FaxJS", um protótipo inicial do React.</li>
          <li><strong>2012 ⋅ Adoção pelo Facebook</strong> Com o Facebook Ads ficando difícil de gerenciar, a equipe do Facebook decide adotar o React para melhorar a performance e a experiência do usuário.</li>
          <li><strong>2013 ⋅ Lançamento</strong> O React é lançado como um projeto de código aberto.</li>
          <li><strong>2015 ⋅ React torna-se estável</strong> O React atinge um estado de estabilidade, com uma base de usuários crescente e uma comunidade ativa. Netflix e Airbnb começam a utilizar a biblioteca.</li>
          <li><strong>2016 ⋅ React fica popular</strong> A biblioteca começa a ganhar notoriedade em eventos e conferências, consolidando sua posição no ecossistema JavaScript.</li>
        </ul>
      </div>
    </>
  )
}

export default App
