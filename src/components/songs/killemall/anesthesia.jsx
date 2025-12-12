import Player from "../../Player";
import anesthesiaMusic from "../../../assets/musics/killemall/anesthesiaPullingTeeth.mp3";

function Anesthesia() {
  return (
    <>
      <header className="albumHeader">
        <h3>(Anesthesia) - Pulling Teeth</h3>
        <p>
          <time dateTime="PT4M15S">4&apos; 15&quot;</time>
        </p>
        <Player music={anesthesiaMusic} />
      </header>
      <section>
        <h4>[Pas de lyrics, juste profitez de ce solo de bass incroyable!]</h4>
      </section>
    </>
  );
}

export default Anesthesia;
