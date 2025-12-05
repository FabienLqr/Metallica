//import utile
import { Link, Outlet } from "react-router-dom";

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
        <article className="songs">
          {/*il faut une gestion des musiques pour n'en afficher qu'une a la fois, menu deroulant? avec peut etre seek en valeur par defaut?*/}
          <Link to="/kill_em_all/seek&destroy">Seek & Destroy</Link>
          <Link to="/kill_em_all/metal_militia">Metal Militia</Link>
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default KillemAll;
