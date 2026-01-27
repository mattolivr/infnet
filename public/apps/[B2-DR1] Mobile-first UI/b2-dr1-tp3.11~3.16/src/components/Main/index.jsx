import styles from './Main.module.css';
import Hero from '../Hero';

export default function Main() {
  return (
    <main className={styles.main}>
      <Hero />

      <div className={styles.mainContainer}>
          <section id="sobre" className={styles.mainSection}>
          <div className="card">
            <h2>Sobre Mim</h2>
            <p>
              Desenvolvedor apaixonado por tecnologia e inovação, com experiência em 
              desenvolvimento web full stack. Busco criar soluções elegantes e eficientes 
              que façam a diferença na vida das pessoas.
            </p>
            <p>
              Minha jornada na programação começou com curiosidade e se transformou em 
              dedicação ao aprendizado contínuo. Acredito no poder do código limpo e na 
              importância de uma boa experiência do usuário.
            </p>
          </div>
        </section>
        
        <section id="habilidades" className={styles.mainSection}>
          <h2>Minhas Habilidades</h2>
          <div className={styles.mainGrid}>
            <div className="card">
              <h3>Front-end</h3>
              <p>React, JavaScript, HTML5, CSS3, UI/UX responsivo e mobile-first</p>
            </div>
            <div className="card">
              <h3>Back-end</h3>
              <p>Node.js, Python, APIs RESTful, bancos de dados SQL e NoSQL</p>
            </div>
            <div className="card">
              <h3>Ferramentas</h3>
              <p>Git, VS Code, Vite, npm, metodologias ágeis e boas práticas</p>
            </div>
          </div>
        </section>
        
        <section id="projetos" className={styles.mainSection}>
          <div className="card">
            <h2>Projetos em Destaque</h2>
            <ul className={styles.mainList}>
              <li>
                <h3>Sistema de gerenciamento com React e Node.js</h3>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus cumque saepe aliquid suscipit ipsum? Quibusdam perferendis tempore unde quaerat! Suscipit dolore, sunt eaque sint modi id hic harum officia.</span>
              </li>
              <li>
                <h3>Aplicação mobile-first com design responsivo</h3>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolorum unde aliquid. Dolore corporis repudiandae soluta fugiat assumenda dignissimos, qui vel distinctio rem aperiam laboriosam est voluptatem enim culpa quod!</span>
              </li>
              <li>
                <h3>API RESTful escalável com autenticação JWT</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</span>
              </li>
              <li>
                <h3>Dashboard interativo com visualização de dados</h3>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a natus sequi iure illum autem esse adipisci fugiat excepturi distinctio dicta quam vel velit, laboriosam, iste, porro qui culpa rem.</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section id="contato" className={styles.mainSection}>
          <div className="card">
            <h2>Entre em Contato</h2>
            <form className={styles.mainForm}>
              <div className={styles.mainFormGroup}>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Seu nome"
                />
              </div>

              <div className={styles.mainFormGroup}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                />
              </div>

              <div className={styles.mainFormGroup}>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                  id="mensagem"
                  placeholder="Como posso te ajudar?"
                />
              </div>

              <div className={styles.mainButtonGroup}>
                <button type="submit" className="primary">
                  Enviar Mensagem
                </button>
                <button type="button">
                  Limpar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
