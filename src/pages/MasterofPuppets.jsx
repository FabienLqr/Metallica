// import utile
import { Link, Outlet } from "react-router-dom";

//import des images
import masterImg from "../assets/Images/Master.jpg";

function MasterofPuppets() {
  return (
    <>
      <h1>Master of puppets</h1>
      <img
        src={masterImg}
        alt="Logo de l'album Ride The Lightning"
        className="album"
      />
      <section>
        <article className="homeArticles">
          <p>
            L&apos;album Master of puppets est sortie le 3 mars 1986. C&apos;est
            le premier album de Trash Metal a etre certifié du disque de platine
            le 9 juin 2003. Il est rentré dans la Bibliothèque du Congrès le 23
            mars 2016 de part son importance historique.
          </p>
        </article>
        <article className="songs">
          <p className="links">
            <Link to="/master_of_puppets/battery">1- Battery</Link>
            <Link to="/master_of_puppets/master_of_puppets">
              2- Master of Puppets
            </Link>
            <Link to="/master_of_puppets/the_thing_that_should_not_be">
              3- The Thing That Should Not Be
            </Link>
            <Link to="/master_of_puppets/welcome_home_sanitarium">
              4- Welcome Home (Sanitarium)
            </Link>
            <Link to="/master_of_puppets/disposable_heroes">
              5- Disposable Heroes
            </Link>
            <Link to="/master_of_puppets/leper_messiah">6- Leper Messiah</Link>
            <Link to="/master_of_puppets/orion">7- Orion</Link>
            <Link to="/master_of_puppets/damage_inc">8- Damage, Inc.</Link>
          </p>
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default MasterofPuppets;
