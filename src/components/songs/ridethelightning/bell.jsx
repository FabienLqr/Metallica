import Player from "../../Player";
import bellMusic from "../../../assets/musics/rideTheLightning/forWhomTheBellTolls.mp3";

function Bell() {
  return (
    <>
      <header className="albumHeader">
        <h3>For Whom The Bell Tolls</h3>
        <p>
          <time dateTime="PT6M36S">6&apos; 36&quot;</time>
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
