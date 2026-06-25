import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { faqs } from "../data/faqs";

export function FAQ() {
  return (
    <>
      <Seo title="FAQ" description="Questions fréquentes sur les textes personnalisés, chansons sur mesure, droits SACEM et marque blanche VIBRANCES." />
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Des réponses claires sur mes textes et chansons personnalisés,
            <br />
            <em>pour les particuliers comme pour les structures partenaires.</em>
          </>
        }
      />
      <section className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </>
  );
}

export default FAQ;
