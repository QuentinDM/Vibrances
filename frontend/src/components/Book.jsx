const BOOK_URL = "https://librairie.bod.fr/le-bruit-que-fait-ma-bouche-florence-mistral-9782322841363";
const BOOK_COVER = "/Le_bruit_que_fait_ma_bouche.webp";

export function Book() {
  return (
    <section className="book-feature" aria-labelledby="book-title">
      <div className="book-feature__content">
        <p className="eyebrow">Le livre</p>
        <h2 id="book-title">Le Bruit que fait ma bouche</h2>
        <p className="book-feature__quote">« Ma bouche faisait du bruit. Pas une voix. »</p>
        <div className="book-feature__text">
          <p>
            À cinquante-cinq ans, Florence Mistral a tout perdu : l'entreprise familiale, son rôle, sa place dans le regard des autres. Lui restaient des mots qui semblaient s'échapper avant d'arriver quelque part, et le silence qui s'installe quand on cesse de se sentir entendue.
          </p>
          <p>
            Alors elle a écrit. Non pour raconter sa vie, mais pour retrouver sa voix.
          </p>
          <p>
            <em>Le Bruit que fait ma bouche</em> est un récit intime où la prose se mêle au poème et à la chanson. On y suit une femme qui traverse l'effacement, la perte et le doute, jusqu'à une clarté retrouvée : dire non sans hausser la voix, se choisir sans s'excuser. Au fil des pages, le texte se prolonge en chansons, à écouter en scannant le QR code dans le livre.
          </p>
          <p>
            Un récit pour celles et ceux qui ont senti, un jour, que leurs mots ne faisaient que du bruit, et qui cherchent le chemin qui mène du silence à une voix qui ne disparaît plus.
          </p>
        </div>
        <a className="btn btn-services book-feature__button" href={BOOK_URL} target="_blank" rel="noreferrer">
          Commander le livre
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
      <div className="book-feature__visual">
        <img src={BOOK_COVER} alt="Couverture du livre Le Bruit que fait ma bouche de Florence Mistral" />
      </div>
    </section>
  );
}

export default Book;
