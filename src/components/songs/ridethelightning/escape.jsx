import Player from "../../Player";
import escapeMusic from "../../../assets/musics/rideTheLightning/escape.mp3";

function Escape () {
    return(<>
          <header className="albumHeader">
            <h3>Escape</h3>
            <p>
              <time dateTime="PT4M23S">4&apos; 23&quot;</time>
            </p>
            <Player music={escapeMusic} />
          </header>
          <section>
            <h4>[Comes later]</h4>
          </section>
        </>)
}

export default Escape;