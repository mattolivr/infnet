import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>Feito por Matheus de Oliveira</p>
      </div>
    </footer>
  );
}
