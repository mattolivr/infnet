import styles from './Card.module.css';
import Button from '../Button';

export default function Card({ image, title, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button 
          label="Saiba Mais" 
          onClick={() => alert(`Você clicou em: ${title}`)} 
          variant="primary"
        />
      </div>
    </div>
  );
}
