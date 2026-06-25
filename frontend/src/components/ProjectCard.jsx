export const BANNER_MAP = {
  textes: {
    bannerClass: "ps-banner-text",
    catClass: "ps-cat-text",
    iconClass: "fa-solid fa-pen-nib",
  },
  chansons: {
    bannerClass: "ps-banner-music",
    catClass: "ps-cat-music",
    iconClass: "fa-solid fa-music",
  },
  collaborations: {
    bannerClass: "ps-banner-collab",
    catClass: "ps-cat-collab",
    iconClass: "fa-solid fa-users",
  },
};

export function ProjectCard({ project }) {
  const config = BANNER_MAP[project.category] || BANNER_MAP.textes;
  const { bannerClass, catClass, iconClass } = config;

  return (
    <article className="ps-card">
      <div className={`ps-banner ${bannerClass}`}>
        <i className={iconClass} aria-hidden="true"></i>
      </div>
      <div className="ps-card-body">
        <span className={`ps-cat ${catClass}`}>{project.label}</span>
        <h3 className="ps-card-title">{project.name}</h3>
        <p className="ps-card-desc">{project.excerpt}</p>
        <a className="card-link" href="/contact">
          En savoir plus
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
