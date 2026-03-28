import Player from "../../Player";
import sanitariumMusic from "../../../assets/musics/masterOfPuppets/welcomeHomeSanitarium.mp3";

function Sanitariun() {
  return (
    <>
      <header className="albumHeader">
        <h3>Welcome Home (Sanitariun)</h3>
        <p>
          <time dateTime="PT6M28S">6&apos; 28&quot;</time>
        </p>
        <Player music={sanitariumMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Sanitariun;
