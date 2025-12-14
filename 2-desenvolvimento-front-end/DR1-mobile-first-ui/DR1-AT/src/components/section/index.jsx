import style from './style.module.css';

export default function Section({ children, id, title, highlight }) {
  return (
    <section id={id} className={style.biografia}>
      <div className={style.destaque}>{highlight}</div>
      <div className={style.conteudo}>
      <h2>{title}</h2>
      {children}
      </div>
    </section>
  )
}