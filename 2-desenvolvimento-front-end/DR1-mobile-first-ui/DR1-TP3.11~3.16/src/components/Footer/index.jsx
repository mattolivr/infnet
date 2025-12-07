import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>Por Matheus de Oliveira</p>
      </div>
    </footer>
  );
}
