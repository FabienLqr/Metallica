// import utile
import { Link, Outlet } from "react-router-dom";

//import des images
import ride from "../assets/Images/RideTheLightning.jpg";

function RideTheLightning() {
  return (
    <>
      <h1>Ride The Lightning</h1>
      <img
        src={ride}
        alt="Logo de l'album Ride The Lightning"
        className="album"
      />
      <section>
        <article className="homeArticles">
          <p>
            L&apos;album Ride the Lightning est sortie le 27 juillet 1984.
            C&apos;est le second album du groupe de Trash Metal. Il est sept
            fois disque de platine et c&apos;est vendu à plusieurs millions
            d&apos;exemplaires rien qu&apos;au États-Unis
          </p>
        </article>
        <article className="songs">
          <p className="links">
            <Link to="/ride_the_lightning/fight_fire_with_fire">
              1- Fight Fire With Fire
            </Link>
            <Link to="/ride_the_lightning/ride_the_lightning">
              2- Ride The Lightning
            </Link>
            <Link to="/ride_the_lightning/for_whom_the_bell_tolls">
              3- For Whom The Bell Tolls
            </Link>
            <Link to="/ride_the_lightning/fade_to_black">4- Fade to Black</Link>
            <Link to="/ride_the_lightning/trapped_under_ice">
              5- Trapped Under Ice
            </Link>
            <Link to="/ride_the_lightning/escape">6- Escape</Link>
            <Link to="/ride_the_lightning/creeping_death">
              7- Creeping Death
            </Link>
            <Link to="/ride_the_lightning/the_call_of_ktulu">
              8- The Call of Ktulu
            </Link>
          </p>
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default RideTheLightning;
