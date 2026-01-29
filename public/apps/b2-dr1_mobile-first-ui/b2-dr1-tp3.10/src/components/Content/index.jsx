import styles from './Content.module.css';

export default function Content() {
  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <h2 className={styles.heading}>Lorem Ipsum Dolor</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quia 
              voluptate quae quidem voluptatibus quas quos quibusdam nesciunt fugiat. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className={styles.text}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
            <img 
              src="https://picsum.photos/800/400?random=1" 
              alt="Ilustração" 
              className={styles.image}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Consectetur Adipiscing</h2>
            <p className={styles.text}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
            <p className={styles.text}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <img 
              src="https://picsum.photos/800/400?random=2" 
              alt="Ilustração" 
              className={styles.image}
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Sed Do Eiusmod</h2>
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.
            </p>
            <ul className={styles.list}>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Adipiscing elit sed do eiusmod tempor</li>
              <li>Incididunt ut labore et dolore magna</li>
              <li>Aliqua ut enim ad minim veniam quis</li>
            </ul>
          </section>
        </div>

        <aside className={styles.aside}>
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Sobre</h3>
            <p className={styles.widgetText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quia voluptate.
            </p>
          </div>

          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Categorias</h3>
            <ul className={styles.widgetList}>
              <li><a href="#">Design</a></li>
              <li><a href="#">Desenvolvimento</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">Web</a></li>
            </ul>
          </div>

          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Tags</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>CSS</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>HTML</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
