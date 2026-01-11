import Player from "../../Player";
import lightningMusic from "../../../assets/musics/rideTheLightning/fightFireWithFire.mp3";

function Lightning () {
    return(<>
          <header className="albumHeader">
            <h3>Ride The Lightning</h3>
            <p>
              <time dateTime="PT6M36S">6&apos; 36&quot;</time>
            </p>
            <Player music={lightningMusic} />
          </header>
          <section>
            <h4>[Comes later]</h4>
          </section>
        </>)
}

export default Lightning;