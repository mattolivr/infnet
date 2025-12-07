import './global.css';
import './styles.css';
import './App.css';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="container">
          <h1>Aplicação com Estilos Globais e Escopados</h1>
          <p>Demonstração de global.css + styles.css com classes específicas</p>
        </div>
      </header>

      <Menu />
      <Main />

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 - Projeto desenvolvido com React, global.css e styles.css</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
