import PageIntro from "../components/PageIntro";
import Seo from "../components/Seo";

export function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" description="Page introuvable sur le site VIBRANCES." />
      <PageIntro eyebrow="404" title="Cette page n'existe pas.">Retournez à l'accueil ou contactez VIBRANCES pour poursuivre votre visite.</PageIntro>
    </>
  );
}

export default NotFound;
