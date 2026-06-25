import { useState } from "react";
import CalendarPicker from "../components/CalendarPicker";
import ScheduleMeetingForm from "../components/ScheduleMeetingForm";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";

export function Contact() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <Seo title="Contact" description="Contactez VIBRANCES pour une demande de devis, un partenariat B2B ou un entretien découverte de 30 minutes." />
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Chaque projet d'écriture sur mesure naît d'un bon échange,
            <br />
            <em>du contexte et de la bonne formule.</em>
          </>
        }
      />
      <section className="cs">
        <div className="cs-grid">
          <section className="cs-meet">
            <h3 className="cs-nl-title">Prendre un rendez-vous</h3>
            <p className="cs-nl-desc">
              Réservez un créneau en quelques clics via le formulaire ci-dessous.
            </p>
            <div className="divide-line-form" aria-hidden="true"></div>
            <ScheduleMeetingForm 
              date={date}
              time={time}
            />
          </section>
          <aside className="planning">
            <h3 className="cs-calendar-title">Vos disponibilités</h3>
            <CalendarPicker
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          </aside>
        </div>

        <div className="cs-info-grid">
          <div className="cs-info-card">
            <div className="cs-info-card__head">
              <div className="cs-info-card__icon">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
              </div>
              <span className="cs-info-card__value">+33 (0)6 66 66 66   66</span>
            </div>
            <p className="cs-info-card__desc">Disponible du lundi au  vendredi, de 9h à 18h pour échanger sur vos projets.</p>
          </div>

          <div className="cs-info-card">
            <div className="cs-info-card__head">
              <div className="cs-info-card__icon">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              </div>
              <span className="cs-info-card__value">contact@vibrances.fr</span>
            </div>
            <p className="cs-info-card__desc">Réponse assurée sous  48h pour toute demande de collaboration ou de devis.</p>
          </div>

          <div className="cs-info-card">
            <div className="cs-info-card__head">
              <div className="cs-info-card__icon">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              </div>
              <span className="cs-info-card__value">Montauban, France</span>
            </div>
            <p className="cs-info-card__desc">Basée à Montauban, j'interviens partout en France et à distance.</p>
          </div>

          <div className="cs-legal">
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              <div>
                <p className="cs-legal__text">
                  En envoyant ce formulaire, vous acceptez que vos données soient utilisées uniquement dans le cadre de votre demande de contact. Aucune donnée n'est vendue ou partagée.
                </p>
                <div className="cs-legal__links">
                  <a href="/mentions-legales" className="cs-legal__link">Mentions légales</a>
                  <a href="/confidentialite" className="cs-legal__link">Politique de confidentialité</a>
                </div>
              </div>
          </div>
        </div>

        
      </section>
  </>
  );
}

export default Contact;
