//import utilities
import { Link, Outlet } from "react-router-dom";

// import component
import Footer from "../components/Footer";

// import datas
import logo from "../assets/Images/logo.jpg";
import kta from "../assets/Images/KILL'EMALL.jpg";
import ride from "../assets/Images/RideTheLightning.jpg";
import master from "../assets/Images/Master.jpg";
import justice from "../assets/Images/Justice.jpg";
import black from "../assets/Images/Black.jpg";
import load from "../assets/Images/Load.jpg";
import reload from "../assets/Images/Reload.jpg";
import anger from "../assets/Images/Anger.jpg";
import death from "../assets/Images/Magnetic.jpg";
import hardwired from "../assets/Images/Hardwired.jpg";
import seasons from "../assets/Images/Seasons.jpg";
import sm from "../assets/Images/SM2.jpg";
import sm2 from "../assets/Images/SM.jpg";
import garage from "../assets/Images/Garage.jpg";
import lulu from "../assets/Images/Lulu.jpg";

function Nav() {
  return (
    <>
      <header>
        <h1>Metallica</h1>
      </header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo de l'acceuil" className="albumLogo" />
          <p>Acceuil</p>
        </Link>
        <Link to="kill_em_all">
          <img
            src={kta}
            alt="Logo de l'album Kill'em All"
            className="albumLogo"
          />
          <p>Kill&apos;em all</p>{" "}
        </Link>
        <Link to="/ride_the_lightning">
          <img
            src={ride}
            alt="Logo de l'album Ride the Lightning"
            className="albumLogo"
          />
          <p>Ride The Lightning</p>{" "}
        </Link>
        <Link to="/master_of_puppets">
          <img
            src={master}
            alt="Logo de l'album Master of puppets"
            className="albumLogo"
          />
          <p>Master of puppets</p>{" "}
        </Link>
        <Link to="/justice_for_all">
          <img
            src={justice}
            alt="Logo de l'album And Justice for All"
            className="albumLogo"
          />
          <p>... And Justice for All</p>{" "}
        </Link>
        <Link to="/black_album">
          <img
            src={black}
            alt="Logo de l'album Metallica"
            className="albumLogo"
          />
          <p>Black Album</p>{" "}
        </Link>
        <Link to="/load">
          <img src={load} alt="Logo de l'album Load" className="albumLogo" />
          <p>Load</p>{" "}
        </Link>
        <Link to="/reload">
          <img
            src={reload}
            alt="Logo de l'album Reload"
            className="albumLogo"
          />
          <p>ReLoad</p>{" "}
        </Link>
        <Link to="/st_anger">
          <img
            src={anger}
            alt="Logo de l'album St. Anger"
            className="albumLogo"
          />
          <p>ST. Anger</p>{" "}
        </Link>
        <Link to="/death_magnetic">
          <img
            src={death}
            alt="Logo de l'album Death Magnetic"
            className="albumLogo"
          />
          <p>Death Magnetic</p>{" "}
        </Link>
        <Link to="/hardwired_to_self_destruct">
          <img
            src={hardwired}
            alt="Logo de l'album Hardwired to Self-Destruct"
            className="albumLogo"
          />
          <p>Hardwired to Self-Destruct</p>{" "}
        </Link>
        <Link to="/72_seasons">
          <img
            src={seasons}
            alt="Logo de l'album 72 seasons"
            className="albumLogo"
          />
          <p>72 Seasons</p>{" "}
        </Link>
        <Link to="/sm">
          <img src={sm} alt="Logo de l'album S&M" className="albumLogo" />
          <p>S&M</p>{" "}
        </Link>
        <Link to="/sm2">
          <img src={sm2} alt="Logo de l'album S&M2" className="albumLogo" />
          <p>S&M2</p>{" "}
        </Link>
        <Link to="/garage">
          <img
            src={garage}
            alt="Logo de l'album Garage Inc."
            className="albumLogo"
          />
          <p>Garage Inc.</p>{" "}
        </Link>
        <Link to="/lulu">
          <img src={lulu} alt="Logo de l'album Lulu" className="albumLogo" />
          <p>Lulu</p>{" "}
        </Link>
      </nav>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Nav;
