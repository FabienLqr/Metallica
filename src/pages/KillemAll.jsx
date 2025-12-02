//import des musiques
import Seek from "../components/songs/killemall/seek.jsx";
import Militia from "../components/songs/killemall/militia.jsx";
import Motorbreath from "../components/songs/killemall/motorbreath.jsx";
import Phantom from "../components/songs/killemall/phantom.jsx";
import Remorse from "../components/songs/killemall/remorse.jsx";
import Horsemen from "../components/songs/killemall/horsemen.jsx";
import Light from "../components/songs/killemall/light.jsx";
import Jump from "../components/songs/killemall/jump.jsx";

// import des images
import kill from "../assets/Images/KILL'EMALL.jpg";

function KillemAll() {
  return (
    <>
      <h1>Kill&apos;em All</h1>
      <img src={kill} alt="Logo de l'album Kill'em All" className="album" />
      <section>
        <article className="homeArticles">
          <p>
            L&apos;album Kill&apos;em all est sortie le 25 juillet 1983.
            C&apos;est le tout premier album du groupe qui entrera dans la
            legende du trash metal. L&apos;album sera enregistre en moins de 3
            semaines en mai 1983.
          </p>
        </article>
        <article className="song">
          {/*il faut une gestion des musiques pour n'en afficher qu'une a la fois, menu deroulant? avec peut etre seek en valeur par defaut?*/}
          <Seek />
          <Militia />
          <Motorbreath />
          <Phantom />
          <Remorse />
          <Horsemen />
          <Light />
          <Jump />
        </article>
      </section>
    </>
  );
}

export default KillemAll;
