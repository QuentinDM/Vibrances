import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";

export function About() {
  return (
    <>
      <Seo
        title="À propos — Sophia"
        description="Découvrir Sophia Laurent, designer de marque basée à Paris, et sa vision du design stratégique et poétique."
      />

      <SectionHeader eyebrow="Florence MISTRAL" title="À propos de moi" />

      <section className="about-section">
        <div className="about-text">
          <span className="tag">Je suis Florence</span>
          <h2>Auteure-compositrice,<br />basée à Montauban</h2>
          <p>
            Je suis Florence Mistral, <b>auteure-compositrice</b> inscrite à la SACEM et fondatrice de VIBRANCES. J'écris des <b>textes sur mesure</b> et des <b>chansons personnalisées</b> pour accompagner les moments importants de la vie.
            <br />
            <br />
            Mon métier, c'est de mettre en mots ce qui compte : un <b>hommage</b>, un <b>discours de cérémonie</b>, des vœux de <b>mariage</b>, ou une <b>chanson</b> née d'un récit et d'un souvenir. À travers une approche sensible et attentive, j'aide particuliers et professionnels à dire l'essentiel, avec justesse, écoute et authenticité.
            <br />
            <br />
            J'accompagne aussi des partenaires — <b>pompes funèbres, wedding planners, officiants, CSE et EHPAD</b> — grâce à des offres en <b>marque blanche</b>, pour enrichir leur catalogue de créations sur mesure et humaines, à <b>Montauban</b>, à <b>Toulouse</b> et partout en <b>Occitanie</b>
          </p>
          <div className="btn-group">
            <Link className="btn btn-primary" to="/services">Mes services</Link>
            <Link className="btn btn-secondary" to="/contact">Parlons-en</Link>
          </div>
        </div>

        <div className="about-photo">
          <div className="photo-frame">
            <div className="photo-bg-shape" />
            <div className="photo-placeholder">
              <i className="fa-solid fa-user" aria-hidden="true"></i>
              <span>VOTRE PHOTO</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fa-solid fa-clock" aria-hidden="true"></i>
          </div>
          <div>
            <div className="stat-num">+30</div>
            <div className="stat-label">ans d’écrits</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fa-solid fa-table-cells-large" aria-hidden="true"></i>
          </div>
          <div>
            <div className="stat-num">+20</div>
            <div className="stat-label">Compositions</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <i className="fa-solid fa-thumbs-up" aria-hidden="true"></i>
          </div>
          <div>
            <div className="stat-num">90%</div>
            <div className="stat-label">Satisfaction client</div>
          </div>
        </div>
      </div>

      <section className="presentation-section" id="presentation">
        <div className="section-inner">
          <p className="section-label">Mon parcours</p>
          <h2 className="section-title">Ma vision de l'écriture</h2>
          <p className="section-subtitle">
            Chaque projet est une histoire unique à raconter. Voici comment j'aborde mon travail.
          </p>

          <div className="story-grid">
            <div className="story-block highlight">
              <span className="story-number">01</span>
              <h3>L'origine de ma passion pour l'écriture</h3>
              <p>L'écriture m'accompagne depuis toujours. Avant d'en faire un métier, j'écrivais pour comprendre, relier et dire ce qui se tait. C'est en mesurant l'effet d'un <b>texte sur mesure</b> pour celles et ceux qui le reçoivent que ma vocation <b>d'écrivain à Montauban</b> s'est imposée : mettre les mots au service des émotions et des moments qui comptent.
              </p>
            </div>
            <div className="story-block">
              <span className="story-number">02</span>
              <h3>Une approche centrée sur l'humain</h3>
              <p>Chaque projet <b>d'écriture personnalisée</b> commence par une écoute. Avant de rédiger un <b>hommage</b>, un <b>discours de cérémonie</b> ou des <b>paroles de chanson</b>, je cherche à comprendre votre histoire et votre intention. Je ne plaque jamais de formules toutes faites : je façonne des textes fidèles à ce que vous vivez et souhaitez transmettre.
              </p>
            </div>
            <div className="story-block">
              <span className="story-number">03</span>
              <h3>L'équilibre entre forme et fonction</h3>
              <p>Un beau texte ne suffit pas s'il ne touche pas juste. Que ce soit pour un <b>mariage</b>, une <b>cérémonie laïque</b> ou un <b>départ en retraite</b>, je veille à ce que chaque mot serve l'émotion sans l'alourdir : une plume soignée mais accessible. La forme reste au service du sens, pour que le message arrive intact.
              </p>
            </div>
            <div className="story-block">
              <span className="story-number">04</span>
              <h3>Collaborer, co-créer, livrer</h3>
              <p>Écrire pour vous, c'est écrire avec vous. J'avance par allers-retours jusqu'à ce que le texte vous ressemble. Pour un particulier comme pour une structure partenaire — <b>wedding planner, officiant de cérémonie, pompes funèbres ou comité d'entreprise (CSE)</b> — je m'engage sur un rendu clair, dans les délais convenus, prêt à être lu, dit ou chanté.</p>
            </div>
          </div>

          <div className="quote-block">
            <p className="quote-text">
              « Écrire, c’est une façon de parler sans être interrompu. »
            </p>
            <p className="quote-author">— Jules Renard, Journal, 13 avril 1895</p>
          </div>

          <div className="services-cta" id="services">
            <p>
              Vous souhaitez en savoir plus sur ce que je peux faire pour vous ?<br />
              Découvrez l'ensemble de mes services et trouvons ensemble ce dont vous avez besoin.
            </p>
            <Link className="btn btn-services" to="/services">
              Voir mes services
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
