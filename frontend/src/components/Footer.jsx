import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-hero">
        <strong className="site-footer-brand">Vibrances</strong>
        <p className="site-footer-tagline">Écrire · Ressentir · Résonner</p>
        <div className="site-footer-cta">
          <Link className="btn btn-footer" to="/contact">
            Démarrer un projet
          </Link>
        </div>
      </div>
      <div className="site-footer-bottom">
        © 2026 VIBRANCES — Tous droits réservés
        <nav className="site-footer-legal" aria-label="Informations légales">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Politique de confidentialité (RGPD)</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
