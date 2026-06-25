import { useEffect, useRef } from "react";

export function SectionHeader({ eyebrow, title, showRule = true, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`section-header ${className}`.trim()}
      aria-label={typeof title === "string" ? title : "Section header"}
    >
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h1 className="section-header__title">{title}</h1>
      {showRule && <div className="section-header__rule" aria-hidden="true" />}
    </section>
  );
}

export default SectionHeader;
