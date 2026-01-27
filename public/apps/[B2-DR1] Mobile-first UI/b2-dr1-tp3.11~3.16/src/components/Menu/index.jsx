import styles from './Menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a href="#sobre" className={styles.menuLink}>Sobre</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#habilidades" className={styles.menuLink}>Habilidades</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#projetos" className={styles.menuLink}>Projetos</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#contato" className={styles.menuLink}>Contato</a>
        </li>
      </ul>
    </nav>
  );
}
