import style from './style.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <img src="./src/assets/logo.png" alt="Logo Marco Madureira" className={style.logo} />
        <h1 className={style.titulo}>Marco Madureira</h1>
      </div>
      <ul>
        <li><a href="#biografia">Biografia</a></li>
        <li><a href="#propostas">Propostas</a></li>
        <li><a href="#agenda">Agenda</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </header>
  )
}