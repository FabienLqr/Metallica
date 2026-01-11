import Player from "../../Player";
import creepingMusic from "../../../assets/musics/rideTheLightning/creepingDeath.mp3";

function Creeping() {
  return (
    <>
      <header className="albumHeader">
        <h3>Creeping Death</h3>
        <p>
          <time dateTime="PT6M36S">6&apos; 36&quot;</time>
        </p>
        <Player music={creepingMusic} />
      </header>
      <section>
        <h4>[Comes later]</h4>
      </section>
    </>
  );
}

export default Creeping;
