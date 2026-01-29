import './global.css';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
