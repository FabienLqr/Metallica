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
          <p className="links">
            <Link to="/kill_em_all/seek&destroy">1- Seek & Destroy</Link>
            <Link to="/kill_em_all/metal_militia">2- Metal Militia</Link>
            <Link to="/kill_em_all/motorbreath">3- Motorbreath</Link>
            <Link to="/kill_em_all/phantom_lord">4- Phantom Lord</Link>
            <Link to="/kill_em_all/no_remorse">5-No Remorse</Link>
            <Link to="/kill_em_all/the_four_horsemen">
              6- The Four Hoursemen
            </Link>
            <Link to="/kill_em_all/hit_the_light">7- Hit the Light</Link>
            <Link to="/kill_em_all/jump_in_the_fire">8- Jump in the Fire</Link>
            <Link to="/kill_em_all/whiplash">9- Whiplash</Link>
            <Link to="/kill_em_all/anesthesia">
              10- Anesthesia - Pulling Teeth
            </Link>
          </p>
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default KillemAll;
