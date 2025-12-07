import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Matheus de Oliveira</h1>
      <h2 className={styles.subtitle}>Desenvolvedor Full Stack</h2>
    </header>
  );
}
