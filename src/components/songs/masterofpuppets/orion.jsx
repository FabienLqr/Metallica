import Player from "../../Player";
import orionMusic from "../../../assets/musics/masterOfPuppets/orion.mp3";

function Orion() {
  return (
    <>
      <header className="albumHeader">
        <h3>Orion</h3>
        <p>
            <time dateTime="PT8M28S">8&apos; 28&quot;</time>
        </p>
        <Player music={orionMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Orion;
