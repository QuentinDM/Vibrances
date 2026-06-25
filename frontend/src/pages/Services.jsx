import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import ServiceCards from "../components/ServiceCards";
import illustrationImg from "../../public/illustration-image.webp"

export function Services() {
  return (
    <>
      <Seo
        title="Services — Sophia"
        description="Une gamme de services créatifs : identité de marque, design de logo et design d'emballage, portée par la palette VIBRANCES."
      />

      <SectionHeader
        eyebrow="Ce que je propose"
        title={
          <>
            Une gamme complète
            <br />
            <em>de services créatifs</em>
          </>
        }
      />
      <section className="section services-overview">
        <p className="eyebrow eyebrow-large">Services</p>
        <h2 className="h2-service">Un service sur mesure pour chaque occasion</h2>
        <ServiceCards />
      </section>
      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-left">
            <span className="section-tag">Ma mission</span>
            <h2>
              Donner vie à
              <br />
              <em>vos ambitions</em>
              <br />
              créatives
            </h2>
            <p>
              Derrière chaque demande, il y a une intention : honorer une mémoire, célébrer un <b>mariage</b>, marquer un <b>départ en retraite</b> ou offrir des mots justes lors de <b>funérailles</b>. VIBRANCES transforme ces intentions en <b>textes sur mesure</b> et en <b>chansons personnalisées</b>, écrits pour résonner auprès de celles et ceux qui les reçoivent, à <b>Montauban</b>, à <b>Toulouse</b> et partout en <b>Occitanie</b>.
            </p>

            <p>
              <b>Pompes funèbres, wedding planners, officiants de cérémonie, CSE, EHPAD</b> ou structures d'accueil : j'enrichis votre offre sans alourdir votre charge. Vous restez l'interlocuteur de vos clients ; j'apporte la plume, en <b>marque blanche</b> si vous le souhaitez, avec la discrétion qu'exige l'intime.
            </p>

            <p>
              De l'entretien découverte à la livraison, chaque <b>création littéraire et musicale</b> suit un fil clair : écoute, écriture, ajustements, validation. Vous obtenez un <b>hommage</b>, un <b>discours</b> ou une <b>composition originale</b> aboutis, fidèles à votre exigence et prêts à être lus, remis ou mis en musique.
            </p>
            <Link className="btn mission-cta" to="/contact">
              Démarrer un projet
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="mission-right">
            <div className="mission-img-frame">
              <img src="/vibrances-service-placeholder.svg" alt="Illustration visuelle de service" />
              <span className="img-label"><img src={illustrationImg} alt="" srcset="" /></span>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Services;
