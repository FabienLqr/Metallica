import Player from "../../Player";
import fadeMusic from "../../../assets/musics/rideTheLightning/fadeToBlack.mp3";

function Fade () {
    return(<>
          <header className="albumHeader">
            <h3>Fade To Black</h3>
            <p>
              <time dateTime="PT6M56S">6&apos; 56&quot;</time>
            </p>
            <Player music={fadeMusic} />
          </header>
          <section>
            <h4>[Comes later]</h4>
          </section>
        </>)
}

export default Fade;