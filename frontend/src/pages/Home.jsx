import { Link } from "react-router-dom";
import AudioFeature from "../components/AudioFeature";
import Seo from "../components/Seo";
import ServiceCards from "../components/ServiceCards";

export function Home() {
  return (
    <>
      <Seo
        title="Accueil"
        description="VIBRANCES crée des textes personnalisés et chansons sur mesure pour les professionnels prescripteurs et les moments forts de la vie."
      />
      <section className="hero">
        <div className="hero-bg" />

        <div className="hero-content">
          <p className="eyebrow">Auteure-compositrice SACEM · Marque blanche possible</p>
          <h1 className="hero-title">L'écriture au service des maux</h1>
          <p className="hero-subtitle">
            VIBRANCES accompagne les structures prescriptrices avec des textes sensibles et des chansons
            sur mesure, pour transformer les récits intimes en paroles justes.
          </p>
          <div className="button-row">
            <Link className="btn btn-primary" to="/contact">Prendre contact</Link>
            <Link className="btn btn-secondary" to="/services">Mes services</Link>
          </div>
        </div>

        <div className="mountains-wrap">
          <svg viewBox="0 0 1440 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,280 L80,210 L160,240 L260,160 L360,210 L440,175 L540,200 L620,145 L720,190 L800,155 L900,200 L980,165 L1080,210 L1160,170 L1260,210 L1360,180 L1440,215 L1440,380 L0,380 Z" fill="rgba(70,19,30,0.06)" />
            <path d="M0,310 L60,260 L140,280 L220,230 L320,265 L420,235 L500,250 L590,215 L680,245 L760,225 L860,255 L950,228 L1050,258 L1140,235 L1240,265 L1340,240 L1440,260 L1440,380 L0,380 Z" fill="rgba(70,19,30,0.10)" />
            <path d="M0,340 L100,300 L200,318 L300,290 L400,312 L520,288 L640,308 L760,285 L880,310 L1000,290 L1120,315 L1240,295 L1360,318 L1440,305 L1440,380 L0,380 Z" fill="rgba(70,19,30,0.16)" />
            <path d="M0,370 L200,340 L400,355 L600,335 L800,352 L1000,338 L1200,350 L1440,342 L1440,380 L0,380 Z" fill="rgba(70,19,30,0.22)" />
          </svg>
        </div>
      </section>

      <section className="services-overview">
        <p className="eyebrow">Services</p>
        <h2 className="h2-service">Une plume pour vos clients, une exigence pour votre structure.</h2>
        <ServiceCards />
      </section>

      <AudioFeature showStreamingLinks />
    </>
  );
}

export default Home;
