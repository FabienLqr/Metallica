import Player from "../../Player";
import trappedMusic from "../../../assets/musics/rideTheLightning/trappedUnderIce.mp3";

function Trapped() {
  return (
    <>
      <header className="albumHeader">
        <h3>Trapped Under Ice</h3>
        <p>
          <time dateTime="PT4M03S">4&apos; 03&quot;</time>
        </p>
        <Player music={trappedMusic} />
      </header>
      <section>
        <h4>[Comes later]</h4>
      </section>
    </>
  );
}

export default Trapped;
