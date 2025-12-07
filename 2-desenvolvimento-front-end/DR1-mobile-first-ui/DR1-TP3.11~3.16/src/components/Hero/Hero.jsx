import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo ao Futuro do Desenvolvimento</h1>
          <p className="hero-subtitle">
            Construa aplicações modernas com React, CSS e as melhores práticas
            de desenvolvimento web. Responsive, elegante e profissional.
          </p>
          <div className="hero-actions">
            <button className="primary">Começar Agora</button>
            <button>Saiba Mais</button>
          </div>
        </div>
        <div className="hero-image">
          <picture>
            <source 
              media="(min-width: 992px)" 
              srcSet="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
            />
            <source 
              media="(min-width: 576px)" 
              srcSet="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop"
            />
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
              alt="Desenvolvedor trabalhando em código"
              className="hero-img"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
