import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="app-container">
      <h1>DR1 - TPs 3.08 a 3.09</h1>
      <p>Componentes React com CSS Modules</p>
      
      <div className="cards-grid">
        <Card 
          image="https://picsum.photos/400/250?random=1"
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quia voluptate."
        />
        
        <Card 
          image="https://picsum.photos/400/250?random=2"
          title="Dolor Sit Amet"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
        />
        
        <Card 
          image="https://picsum.photos/400/250?random=3"
          title="Consectetur Adipiscing"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
        />
      </div>
    </div>
  );
}

export default App;
