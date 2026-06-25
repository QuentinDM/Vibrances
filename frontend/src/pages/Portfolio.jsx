import { useState } from "react";
import AudioFeature from "../components/AudioFeature";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { portfolioProjects, projectFilters } from "../data/portfolio";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("tous");
  const visibleProjects =
    activeFilter === "tous"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Seo title="Portfolio" description="Références créatives VIBRANCES : extraits sonores, exemples anonymisés et univers littéraire." />
      <SectionHeader
        eyebrow="Réalisations"
        title={
          <>
            Des références créatives
            <br />
            <em>sans exposer l'intime.</em>
          </>
        }
      />
      <div className="text-intro">
        <p>
          Quelques exemples de <b>textes sur mesure</b> et de <b>chansons personnalisées</b> réalisés pour des particuliers et des structures partenaires, <br /> à Montauban, Occitanie, et autres régions de France.
        </p>
      </div>
      <AudioFeature showStreamingLinks />
      <section className="section-portfolio">
        <div className="section-inner">
          <span className="eyebrow">Projets</span>
          <h2>Créations et références.</h2>
        </div>

        <div className="btn-projet-filters" role="group" aria-label="Filtrer les projets">
          {projectFilters.map(([value, label]) => (
            <button
              key={value}
              className={`btn btn-filter${activeFilter === value ? " active" : ""}`}
              onClick={() => setActiveFilter(value)}
              type="button"
              aria-pressed={activeFilter === value}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="ps-grid" role="list">
          {visibleProjects.map((project) => (
            <div key={project.name} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
          {visibleProjects.length === 0 && (
            <p style={{ gridColumn: "1/-1", textAlign: "center", color: "rgba(70,19,30,0.4)", fontSize: "0.9rem", padding: "40px 0" }}>
              Aucun projet dans cette catégorie.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
