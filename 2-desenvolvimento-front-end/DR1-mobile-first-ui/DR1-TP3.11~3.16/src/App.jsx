import './global.css';
import './styles.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="container">
          <h1>Aplicação com Estilos Globais e Escopados</h1>
          <p>Demonstração de global.css + styles.css com classes específicas</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <section className="app-section">
            <div className="card">
              <h2>Sobre o Projeto</h2>
              <p>
                Este projeto demonstra o uso de estilos globais combinados com estilos
                escopados para o componente App. Utiliza uma paleta de cores inspirada
                no LinkedIn e GitHub.
              </p>
              <p>
                As classes com prefixo <code>app-</code> são específicas deste componente
                e definidas no arquivo <code>styles.css</code>.
              </p>
            </div>
          </section>

          <section className="app-section">
            <h2>Recursos Principais</h2>
            <div className="app-grid">
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

          <section className="app-section">
            <div className="card">
              <h2>Tecnologias Utilizadas</h2>
              <ul className="app-list">
                <li><code>React 18+</code> - Biblioteca JavaScript para interfaces</li>
                <li><code>Vite</code> - Build tool moderna e rápida</li>
                <li><code>CSS Variables</code> - Customização dinâmica de temas</li>
                <li><code>Mobile-First</code> - Abordagem responsiva progressiva</li>
              </ul>
            </div>
          </section>

          <section className="app-section">
            <div className="card">
              <h2>Formulário de Contato</h2>
              <form className="app-form">
                <div className="app-form-group">
                  <label htmlFor="nome">Nome Completo:</label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="app-form-group">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="app-form-group">
                  <label htmlFor="mensagem">Mensagem:</label>
                  <textarea
                    id="mensagem"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <div className="app-button-group">
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

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 - Projeto desenvolvido com React, global.css e styles.css</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
