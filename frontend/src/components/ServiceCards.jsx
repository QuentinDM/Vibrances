export function ServiceCards() {
  return (
    <section className="cards-section">
      <div className="cards-grid">

        <div className="service-card">
          <div className="card-icon">
            <i className="fa-solid fa-sun" aria-hidden="true"></i>
          </div>
          <h3 className="card-title">Hommages, cérémonies et vœux</h3>
          <p className="card-desc">Des <b>textes sur mesure</b> pour dire l'essentiel lors des moments de passage : <b>discours d'hommage</b>, <b>cérémonies laïques</b>, <b>départs en retraite</b>, anniversaires ou <b>funérailles</b>. Une plume sensible et ajustée à chaque émotion.</p>
          <a href="/contact" className="card-link">
            En savoir plus
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <i className="fa-solid fa-compact-disc" aria-hidden="true"></i>
          </div>
          <h3 className="card-title">Paroles et composition de chanson</h3>
          <p className="card-desc">Transformation d'un récit, d'un poème ou d'un souvenir en <b>chanson sur mesure</b>, portée par une plume littéraire et une <b>composition originale</b>. Idéal pour un <b>mariage</b>, un cadeau unique ou un projet artistique.</p>
          <a href="/contact" className="card-link">
            En savoir plus
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
          </div>
          <h3 className="card-title">Marque blanche et abonnement</h3>
          <p className="card-desc">Une offre pensée pour les <b>pompes funèbres, wedding planners, officiants, CSE, EHPAD</b> et structures d'accueil qui veulent enrichir leur catalogue avec des <b>textes et chansons personnalisés</b>, sans exposer leur sous-traitance.</p>
          <a href="/contact" className="card-link">
            En savoir plus
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServiceCards;
