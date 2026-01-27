import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>DR1 - TPs 3.10</h1>
        <p className={styles.subtitle}>Projeto com CSS Modules</p>
      </div>
    </header>
  );
}
