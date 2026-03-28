import Player from "../../Player";
import masterMusic from "../../../assets/musics/masterOfPuppets/masterOfPuppets.mp3";

function Master() {
  return (
    <>
      <header className="albumHeader">
        <h3>Master of Puppets</h3>
        <p>
            <time dateTime="PT8M37S">8&apos; 37&quot;</time>
        </p>
        <Player music={masterMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Master;
