import Logo from "./Logo";

const links = [
  {
    id: 1,
    text: "Home",
    url: "#",
    current: false,
  },
  {
    id: 2,
    text: "Prodotti",
    url: "#",
    current: true,
  },
  {
    id: 3,
    text: "Chi Siamo",
    url: "#",
    current: false,
  },
  {
    id: 4,
    text: "Contatti",
    url: "#",
    current: false,
  },
];

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
