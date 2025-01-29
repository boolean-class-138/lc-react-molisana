import Logo from "./Logo";
import footerMenus from "../data/footerMenus";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col">
          <Logo />
        </div>

        {footerMenus.map((footerCol) => {
          return (
            <div className="col" key={footerCol.id}>
              <h3>{footerCol.title}</h3>
              <nav className="footer-nav">
                <ul>
                  {footerCol.links.map((link) => {
                    return (
                      <li key={link.id}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
