import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Transformando ideias em código</h1>
          <p className={styles.heroSubtitle}>
            Desenvolvedor Full Stack especializado em criar aplicações web modernas, 
            escaláveis e com foco em experiência do usuário.
          </p>
          <div className={styles.heroActions}>
            <button className="primary">Ver Projetos</button>
            <button>Entrar em Contato</button>
          </div>
        </div>
        <div className={styles.heroImage}>
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
              className={styles.heroImg}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
