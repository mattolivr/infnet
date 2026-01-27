import './Main.css';

export default function Main() {
  return (
    <main>
      <section className="intro">
        <h1>Lorem Ipsum Dolor</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, id. Nobis officia, ullam quis autem nam ratione atque aspernatur quidem. Eveniet molestiae dolore, labore soluta quae autem quidem obcaecati aperiam.
        </p>
        <img 
          src="https://picsum.photos/600/300?random=1" 
          alt="Imagem ilustrativa de tecnologia móvel" 
        />
      </section>

      <section className="content">
        <h2>Consectetur Adipiscing Elit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quia, voluptate quae quidem voluptatibus quas quos quibusdam nesciunt fugiat. Quisquam voluptatum, quod, quia, voluptate quae quidem voluptatibus quas.
        </p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
        </p>
        <img 
          src="https://picsum.photos/600/400?random=2" 
          alt="Design responsivo em diferentes dispositivos" 
        />
      </section>

      <section className="benefits">
        <h2>Sed Do Eiusmod Tempor</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur</li>
          <li>Adipiscing elit sed do eiusmod tempor</li>
          <li>Incididunt ut labore et dolore magna</li>
          <li>Aliqua ut enim ad minim veniam quis</li>
        </ul>
        <img 
          src="https://picsum.photos/600/350?random=3" 
          alt="Interface responsiva e moderna" 
        />
      </section>
    </main>
  );
}
