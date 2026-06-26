import logoImage from "../../public/logo-vibrances.png";
import music from '../../public/poeme-concours.mp3';

export function AudioFeature({ showStreamingLinks = false }) {
  return (
    <section className="audio-feature" aria-label="Extrait sonore">
      <div className="audio-feature-title">
        <p className="eyebrow">Extrait sonore</p>
        <h2>Écouter l'univers VIBRANCES</h2>
      </div>
      <div className="audio-card-content">
        <div className="audio-card__cover">
          <img src={logoImage} alt="album VIBRANCES" />
        </div>
        <div className="audio-card">
          <div className="play-symbol" aria-hidden="true">▶</div>
          <div>
            <strong>Extrait : le bohneur</strong>
            <span>Composition originale - VIBRANCES</span>
          </div>
          <audio controls preload="none" aria-label="Extrait audio VIBRANCES">
            <source src={music} type="audio/mp3" />
          </audio>
        </div>
      </div>
      <p>
        Prenez quelques instants pour écouter un extrait du répertoire de Flo Misdelma.
      </p>
      <div>
        {showStreamingLinks && (
          <div className="streaming-links">
            <a
              className="streaming-button youtube"
              href="https://www.youtube.com/channel/UC8nSTKNCc3dPmqZtwkS-4EQ"
              target="_blank"
              rel="noreferrer"
            >
              <span className="streaming-icon" aria-hidden="true">
                <i className="fa-brands fa-youtube"></i>
              </span>
              <span>YouTube</span>
            </a>
            <a
              className="streaming-button spotify"
              href="https://open.spotify.com/track/3mlKD5EbZkEOUJLEN1Hxh9"
              target="_blank"
              rel="noreferrer"
            >
              <span className="streaming-icon" aria-hidden="true">
                <i className="fa-brands fa-spotify"></i>
              </span>
              <span>Spotify</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default AudioFeature;
