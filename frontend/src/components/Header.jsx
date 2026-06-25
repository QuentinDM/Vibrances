import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo-vibrances-ecrit.png"//../../../src/logo-vibrances-ecrit.png

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Accueil", "/"],
    ["À propos", "/a-propos"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["FAQ", "/faq"],
    ["Me contacter", "/contact"],
  ];

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <img src={logo} alt="logo" />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={open ? "top clicked" : "top"} />
        <span className={open ? "middle clicked" : "middle"} />
        <span className={open ? "bottom clicked" : "bottom"}/>
      </button>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
