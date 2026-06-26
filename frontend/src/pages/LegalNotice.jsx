import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";

export function LegalNotice() {
  return (
    <>
      <Seo title="Mentions légales" description="Mentions légales du site Vibrances." />
      <SectionHeader eyebrow="Informations légales" title="Mentions légales" />
      <section className="legal-content">
        <div className="legal-container">
          <p><strong>Responsable :</strong> Florence DELLA MATTIA</p>
          <p><strong>Raison sociale :</strong> Vibrances</p>
          <p><strong>Siège social :</strong> 6635 route du lemboulas 82220 Molières</p>
          <p><strong>Forme juridique :</strong> Micro-entreprise</p>
          <p><strong>SIRET :</strong> //...//</p>
          <p><strong>Code APE (NAF) :</strong> //...//</p>
          <p><strong>Courriel :</strong> <a href="mailto:vibrances82@gmail.com" className="legal-link">vibrances82@gmail.com</a></p>
          <p><strong>Téléphone :</strong> 06.16.27.69.17</p>

          <p>Notre site est conforme au <strong>RGPD</strong> (Règlement Général sur la Protection des Données) RÈGLEMENT du PARLEMENT EUROPÉEN (UE) 2016/679 et du CONSEIL de l'EUROPE du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p>

          <h2>1 – Mention CNIL</h2>
          <p>Les informations nominatives que vous serez amené à fournir sur le site ne sont transmises qu’à l’éditeur.</p>
          <p>Nous vous informons que ces données pourront être utilisées par l’éditeur, conformément aux dispositions légales en vigueur, à des fins de prospection directe pour vous proposer des produits ou services analogues.</p>
          <p>Conformément aux dispositions de la loi dite « informatique et liberté » du 6 janvier 1978 telle que modifiée par la loi du 6 août 2004, le traitement de vos données peut donner lieu à l’exercice du droit d’accès et de rectification ainsi que d’un droit d’opposition pour motifs légitimes, auprès de l’éditeur dudit Site ou en adressant un courrier à l’adresse définie ci-dessus.</p>

          <h2>2 – Licence de droit d’usage</h2>
          <p>L’accès au Site vous confère un droit d’usage privé, non collectif et non exclusif sur le contenu dudit Site. Toute mise en réseau et toute rediffusion, quelle qu’en soit la forme, sont interdites.</p>
          <p>Le droit de reproduire ne s’entend qu’aux fins de représentation sur écran monoposte et est strictement réservé à votre usage privé. Si vous souhaitez faire un usage commercial des informations figurant sur ce Site, il convient de solliciter un accord exprès de notre part. Pour ce faire, envoyez-nous un e-mail en utilisant notre <Link to="/contact" className="legal-link">formulaire de contact</Link>.</p>
          <p>L’ensemble des Matériels édités sur le Site, incluant à titre non limitatif les textes, les Chansons, les titres audios, les infographies, les livres, les images constituent des œuvres au sens des dispositions de l’article L 112-1 du Code de la Propriété Intellectuelle. En conséquence, toute représentation ou reproduction, intégrale ou partielle, qui pourrait en être faite sans le consentement de leurs auteurs ou de leurs ayants-droit, est illicite. Vous ne pouvez donc modifier, copier, transmettre par e-mail ou de toute autre manière, céder, télécharger, afficher et, d’une façon générale, exploiter ces Matériels.</p>
          <p>Vous vous engagez en conséquence à :</p>
          <ul>
            <li>ne télécharger sur votre ordinateur les Matériels que pour un usage personnel et limité dans le temps ;</li>
            <li>n’imprimer sur support papier les Matériels téléchargés qu’à la condition que lesdites copies soient strictement limitées à un usage personnel ;</li>
            <li>ne pas reproduire la version numérique des Matériels à des fins de revue de presse ;</li>
            <li>ne pas altérer, modifier, déplacer, retirer ou remplacer le contenu éditorial (texte et/ou reproduction) des Matériels et/ou des auteurs des Matériels ou de leurs ayants-droit ;</li>
          </ul>
          <p>Nous vous rappelons que la violation de l’un des droits d’auteur de l’éditeur ou des auteurs de ce Site constitue un délit de contrefaçon puni en France par l’article L 335-2 du Code de la Propriété Intellectuelle et passible de trois ans d’emprisonnement et 300 000 euros d’amende.</p>
          <p>L’éditeur se réserve le droit, à sa seule discrétion et sans information préalable, de modifier, supprimer ou ajouter des mentions aux « Conditions Générales d’Utilisation » du Site, et ce à tout moment afin notamment de prendre en compte toute évolution légale, jurisprudentielle, éditoriale et/ou technique. La version qui prévaut est celle qui est accessible en ligne. Il vous est donc conseillé de vous référer régulièrement à la dernière version desdites Conditions Générales d’Utilisation.</p>
          <p>L’éditeur se réserve également la faculté de modifier les caractéristiques ou le contenu du Site. Il peut également restreindre l’accès du Site à certaines rubriques et ce, sans avertissement préalable.</p>
          <p>L’éditeur peut à sa seule discrétion suspendre, interrompre ou arrêter l’accès à tout ou partie du Site pour quelque raison que ce soit incluant notamment le non-respect des « Conditions Générales d’Utilisation » du Site. Il ne garantit pas que le Site soit sans erreurs ni que toutes les imperfections feront l’objet de corrections.</p>

          <h2>3 – Limitation de responsabilité</h2>
          <p>Vous êtes seul responsable des dommages et préjudices, directs ou indirects, matériels ou immatériels dès lors qu’ils auraient pour cause, fondement ou origine un usage du Site par vous-même ou par toute personne autorisée par vous à utiliser ce Site. Par usage, il convient d’entendre tout usage du Site quel qu’il soit, frauduleux ou non frauduleux.</p>
          <p>À ce titre, vous renoncez à toute réclamation ou action en justice relative à de tels dommages et préjudices, sur le fondement de la responsabilité contractuelle de l’éditeur de ce Site ou sur tout autre fondement.</p>
          <p>Des liens hypertextes peuvent renvoyer vers d’autres sites que le Site. En cliquant sur ces liens, vous quittez le Site et aboutissez ainsi sur des sites sur lesquels l’éditeur n’exerce aucun contrôle. En conséquence, ce dernier dégage toute responsabilité dans le cas où le contenu de ces sites contreviendrait aux dispositions légales et réglementaires en vigueur.</p>
          <p>En outre, il est rappelé qu’aucun lien hypertexte ne peut renvoyer sur le Site sans l’autorisation préalable et expresse de l’éditeur du Site. À défaut d’autorisation, un tel lien est considéré comme constitutif du délit de contrefaçon, délit dont les peines ont d’ores et déjà été rappelées ci-dessus.</p>
          <p>L’éditeur s’engage à faire les efforts nécessaires pour sécuriser l’accès, la consultation et l’utilisation des Matériels conformément aux règles d’usage de l’Internet. L’accès au Site est possible vingt-quatre (24) heures sur vingt-quatre, sept (7) jours sur sept, sauf en cas de force majeure ou d’événement hors du contrôle de l’éditeur et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du Site et des Matériels, qui pourront être effectuées sans vous en avoir averti au préalable.</p>
          <p>En conséquence, la responsabilité de l’éditeur ne peut être engagée dans les cas suivants :</p>
          <ul>
            <li>Interruptions momentanées d’une durée de quelques minutes pour la mise à jour de certains fichiers ;</li>
            <li>Difficultés de fonctionnement ou interruption momentanée de ces services indépendamment de la volonté de l’éditeur notamment en cas d’interruption des services d’électricité ou de télécommunication ;</li>
            <li>Interruptions momentanées des services nécessaires à leurs évolutions ou maintenance ;</li>
            <li>Défaillance ou dysfonctionnements du réseau Internet dans la transmission de messages ou documents.</li>
          </ul>
          <p>Vous déclarez accepter les caractéristiques et les limites de l’Internet, et en particulier reconnaître :</p>
          <ul>
            <li>que vous avez connaissance de la nature de l’Internet, en particulier de ses performances techniques et des temps de réponse pour consulter, interroger ou transférer les Informations ;</li>
            <li>que la communication de vos éventuels codes d’accès et précisément de votre identifiant et de votre mot de passe ou d’une manière générale de toute information jugée confidentielle est faite sous votre propre responsabilité ;</li>
            <li>qu’il vous appartient de prendre toutes mesures nécessaires pour s’assurer que les caractéristiques techniques de votre ordinateur vous permettent la consultation des Informations ;</li>
            <li>qu’il vous appartient de prendre toutes les mesures appropriées de façon à protéger vos propres données et/ou logiciels de la contamination par des éventuels virus circulant à travers le Site et/ou les Informations ;</li>
          </ul>
          <p>Il est précisé que le téléchargement des Matériels emporte acceptation sans réserve desdits Matériels et des présentes Conditions Générales d’Utilisation.</p>

          <h2>4 – Conservation et stockage des données</h2>
          <p>Les données recueillies sur le site, essentiellement par le biais du formulaire de contact, ne font pas l’objet d’un traitement informatisé. Autrement dit, aucune base de données n’est constituée à partir des données personnelles recueillies sur ce site et elles ne sont conservées que durant le temps de traitement de la demande et/ou de la relation commerciale conclue entre vous et l’éditeur.</p>
          <p>Les données sont utilisées strictement dans le cadre de la demande : demande d’information, demande de devis.</p>

          <h2>5 – Application de la loi française</h2>
          <p>Le réseau Internet étant par nature un réseau mondial, mais le présent site étant destiné à un public français, les règles applicables à tous les contenus et toutes les transmissions de données sur et autour du Site sont déterminées par la loi française. En cas de litige, les tribunaux français seront seuls compétents.</p>
        </div>
      </section>
    </>
  );
}

export default LegalNotice;
