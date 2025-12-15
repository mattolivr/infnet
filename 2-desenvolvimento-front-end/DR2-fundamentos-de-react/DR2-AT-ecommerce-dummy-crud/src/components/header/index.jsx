import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Dummy E-Commerce Admin</h1>
      <h2>Sistema de Catálogo e Gestão de Produtos</h2>

      <nav>
        <ul>
          <li><Link to="/">Lista de Produtos</Link></li>
          <li><Link to="/novo">Novo Produto</Link></li>
        </ul>
      </nav>
    </header>
  );
}