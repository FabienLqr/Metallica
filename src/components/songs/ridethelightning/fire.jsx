import Player from "../../Player";
import fireMusic from "../../../assets/musics/rideTheLightning/fightFireWithFire.mp3";

function Fire() {
  return (
    <>
      <header className="albumHeader">
        <h3>Fight Fire With Fire</h3>
        <p>
          <time dateTime="PT4M44S">4&apos; 44&quot;</time>
        </p>
        <Player music={fireMusic} />
      </header>
      <section>
        <h4>[Comes later]</h4>
      </section>
    </>
  );
}

export default Fire;
