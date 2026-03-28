import Player from "../../Player";
import disposableMusic from "../../../assets/musics/masterOfPuppets/disposableHeroes.mp3";

function Disposable() {
  return (
    <>
      <header className="albumHeader">
        <h3>Disposable Heroes</h3>
        <p>
            <time dateTime="PT8M16S">8&apos; 16&quot;</time>
        </p>
        <Player music={disposableMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Disposable;
