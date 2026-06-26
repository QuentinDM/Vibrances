import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";

export function PrivacyPolicy() {
  return (
    <>
      <Seo title="Politique de confidentialité - RGPD" description="Politique de confidentialité et respect du RGPD pour VIBRANCES." />
      <SectionHeader eyebrow="Informations légales" title="Politique de confidentialité (RGPD)" />
      <section className="legal-content">
        <div className="legal-container">
          <h2>Responsable du traitement</h2>
          <p><strong>VIBRANCES</strong></p>
          <p>Email : vibrances82@gmail.com</p>

          <h2>1 - Données collectées</h2>
          <p>VIBRANCES collecte uniquement les données strictement nécessaires au traitement de vos demandes de contact, notamment :</p>
          <ul>
            <li>Votre nom et prénom</li>
            <li>Votre adresse email</li>
            <li>Votre numéro de téléphone (optionnel)</li>
            <li>Les informations contenues dans vos messages</li>
          </ul>

          <h2>2 - Base légale du traitement</h2>
          <p>Le traitement de vos données est basé sur votre consentement explicite lors du remplissage du formulaire de contact.</p>

          <h2>3 - Finalité du traitement</h2>
          <p>Vos données sont traitées uniquement pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact</li>
            <li>Vous fournir les services demandés</li>
            <li>Établir un devis ou une facturation si nécessaire</li>
          </ul>

          <h2>4 - Durée de conservation</h2>
          <p>Vos données de contact sont conservées pendant la durée nécessaire au traitement de votre demande et au maximum 3 ans après le dernier contact.</p>

          <h2>5 - Partage des données</h2>
          <p>Vos données personnelles ne sont jamais partagées avec des tiers sans votre consentement explicite, sauf obligation légale.</p>

          <h2>6 - Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès :</strong> Vous pouvez accéder à vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données</li>
            <li><strong>Droit à l'oubli :</strong> Vous pouvez demander la suppression de vos données</li>
            <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander la limitation du traitement</li>
            <li><strong>Droit de portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
            <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à <strong>vibrances82@gmail.com</strong>.</p>

          <h2>7 - Sécurité</h2>
          <p>VIBRANCES met en place les mesures de sécurité appropriées pour protéger vos données contre les accès non autorisés et les fuites.</p>

          <h2>8 - Modifications de cette politique</h2>
          <p>VIBRANCES se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.</p>

          <h2>9 - Contact</h2>
          <p>Pour toute question concernant la gestion de vos données, contactez-nous à <strong>vibrances82@gmail.com</strong>.</p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
