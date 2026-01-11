import Player from "../../Player";
import ktuluMusic from "../../../assets/musics/rideTheLightning/theCallOfKtulu.mp3";

function Ktulu () {
    return(<>
          <header className="albumHeader">
            <h3>The Call Of Ktulu</h3>
            <p>
              <time dateTime="PT8M52S">8&apos; 52&quot;</time>
            </p>
            <Player music={ktuluMusic} />
          </header>
          <section>
            <h4>[Comes later]</h4>
          </section>
        </>)
}

export default Ktulu;