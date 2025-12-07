import './global.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>DR1 - TPs 3.11 a 3.16</h1>
        <p>Projeto com estilos globais inspirados no GitHub</p>
      </header>

      <main>
        <section className="card">
          <h2>Sobre o Projeto</h2>
          <p>
            Este projeto utiliza estilos globais definidos em <code>global.css</code> para criar
            uma interface consistente em toda a aplicação. O design é inspirado no GitHub, com
            elementos mais arredondados e simplificados.
          </p>
          <button className="primary">Saiba Mais</button>
        </section>

        <section className="card">
          <h2>Recursos</h2>
          <ul>
            <li>Estilos globais centralizados</li>
            <li>Paleta de cores escura inspirada no GitHub</li>
            <li>Componentes arredondados e simples</li>
            <li>Tipografia consistente</li>
          </ul>
        </section>

        <section className="card">
          <h2>Tecnologias</h2>
          <p>
            Desenvolvido com <a href="https://react.dev" target="_blank">React</a> e 
            estilização CSS global para garantir consistência visual.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <button>React</button>
            <button>CSS</button>
            <button>JavaScript</button>
          </div>
        </section>

        <section className="card">
          <h3>Formulário de Contato</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
            <textarea rows="4" placeholder="Sua mensagem"></textarea>
            <button className="primary" type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <p>&copy; 2025 - Desenvolvido com React</p>
      </footer>
    </div>
  );
}

export default App;
