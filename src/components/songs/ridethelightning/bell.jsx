import Player from "../../Player";
import bellMusic from "../../../assets/musics/rideTheLightning/forWhomTheBellTolls.mp3";

function Bell() {
  return (
    <>
      <header className="albumHeader">
        <h3>For Whom The Bell Tolls</h3>
        <p>
          <time dateTime="PT5M10S">5&apos; 10&quot;</time>
        </p>
        <Player music={bellMusic} />
      </header>
      <section>
        <h4>[Comes later]</h4>
      </section>
    </>
  );
}

export default Bell;
