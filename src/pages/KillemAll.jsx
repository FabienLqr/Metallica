import Seek from "../components/songs/killemall/seek.jsx";

function KillemAll() {
  return (
    <>
      <h1>Kill&apos;em All</h1>
      <section>
        <article className="homeArticles">
          <p>
            L&apos;album Kill&apos;em all est sortie le 25 juillet 1983.
            C&apos;est le tout premier album qui entrera dans la legende du
            trash metal. L&apos;album sera enregistre en moins de 3 semaines en
            mai 1983.
          </p>
        </article>
        <article>
          <Seek />
        </article>
      </section>
    </>
  );
}

export default KillemAll;
