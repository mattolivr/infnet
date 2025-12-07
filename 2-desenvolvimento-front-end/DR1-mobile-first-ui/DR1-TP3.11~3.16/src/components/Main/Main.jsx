import './main.css';
import Hero from '../Hero/Hero';

function Main() {
  return (
    <main className="main">
      <Hero />

      <div className="main-container">
        <section id="sobre" className="main-section">
          <div className="card">
            <h2>Sobre o Projeto</h2>
            <p>
              Este projeto demonstra o uso de estilos globais combinados com estilos
              escopados para componentes React. Utiliza uma paleta de cores inspirada
              no LinkedIn e GitHub.
            </p>
            <p>
              As classes com prefixo <code>app-</code> são específicas do componente App,
              enquanto classes com prefixo <code>main-</code> pertencem ao componente Main,
              demonstrando a organização e escopo de estilos.
            </p>
          </div>
        </section>

        <section id="recursos" className="main-section">
          <h2>Recursos Principais</h2>
          <div className="main-grid">
            <div className="card">
              <h3>Design Responsivo</h3>
              <p>Layout adaptável para mobile, tablet e desktop com grid system</p>
            </div>
            <div className="card">
              <h3>Tema Escuro</h3>
              <p>Paleta de cores profissional inspirada no LinkedIn e GitHub</p>
            </div>
            <div className="card">
              <h3>Componentização</h3>
              <p>Estilos globais e escopados trabalhando em conjunto</p>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="main-section">
          <div className="card">
            <h2>Tecnologias Utilizadas</h2>
            <ul className="main-list">
              <li><code>React 18+</code> - Biblioteca JavaScript para interfaces</li>
              <li><code>Vite</code> - Build tool moderna e rápida</li>
              <li><code>CSS Variables</code> - Customização dinâmica de temas</li>
              <li><code>Mobile-First</code> - Abordagem responsiva progressiva</li>
            </ul>
          </div>
        </section>

        <section id="contato" className="main-section">
          <div className="card">
            <h2>Formulário de Contato</h2>
            <form className="main-form">
              <div className="main-form-group">
                <label htmlFor="nome">Nome Completo:</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="main-form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="main-form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                  id="mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <div className="main-button-group">
                <button type="submit" className="primary">
                  Enviar Mensagem
                </button>
                <button type="button">
                  Limpar Formulário
                </button>
                <button type="button" className="success">
                  Salvar Rascunho
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
