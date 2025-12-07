import './App.css';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  return (
    <div className="app-container">
      <h1>DR1 - TP 3.03</h1>
      
      <Card 
        title="Exemplo"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. In hac habitasse platea dictumst."
      >
        <Button label="Clique Aqui" onClick={() => alert('Botão clicado!')} />
      </Card>
    </div>
  );
}

export default App;
