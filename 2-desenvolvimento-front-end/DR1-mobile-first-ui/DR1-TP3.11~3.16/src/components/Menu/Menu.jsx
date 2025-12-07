import './menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#sobre" className="menu-link">Sobre</a>
        </li>
        <li className="menu-item">
          <a href="#recursos" className="menu-link">Recursos</a>
        </li>
        <li className="menu-item">
          <a href="#tecnologias" className="menu-link">Tecnologias</a>
        </li>
        <li className="menu-item">
          <a href="#contato" className="menu-link">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
