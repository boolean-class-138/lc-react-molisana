export default function Header() {
  return (
    <header className="container">
      <img src="/img/logo.png" alt="Logo Molisana" />
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">
            <a href="#">Prodotti</a>
          </li>
          <li>
            <a href="#">Chi Siamo</a>
          </li>
          <li>
            <a href="#">Contatti</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
