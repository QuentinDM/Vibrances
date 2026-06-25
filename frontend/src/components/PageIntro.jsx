import SectionHeader from "./SectionHeader";

export default function PageIntro({ eyebrow, title, children }) {
  return (
    <>
      <SectionHeader eyebrow={eyebrow} title={title} />
      {children && (
        <section className="section narrow">
          <p>{children}</p>
        </section>
      )}
    </>
  );
}
