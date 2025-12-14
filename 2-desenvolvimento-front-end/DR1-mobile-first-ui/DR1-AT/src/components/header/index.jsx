import style from './style.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <img src="./src/assets/logo-extended.png" alt="Logo Marco Madureira" />
      <h1>Marco Madureira</h1>
      <ul>
        <li><a href="#biografia">Biografia</a></li>
        <li><a href="#propostas">Propostas</a></li>
        <li><a href="#agenda">Agenda</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </header>
  )
}