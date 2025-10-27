import './style.css';

export default function Card({ title, children }) {
  // Exercício 16 - Componente que passa props de pai para filho e reenderiza
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}