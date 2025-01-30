import Logo from "./Logo";
import links from "../data/headerMenu";

export default function Header() {
  return (
    <header className="container">
      <Logo nota="Viva la pasta" width={150} />
      <nav className="main-nav">
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} className={link.current ? "active" : ""}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
