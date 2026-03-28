import Player from "../../Player";
import messiahMusic from "../../../assets/musics/masterOfPuppets/leperMessiah.mp3";

function Messiah() {
  return (
    <>
      <header className="albumHeader">
        <h3>Leper Messiah</h3>
        <p>
            <time dateTime="PT5M40S">5&apos; 40&quot;</time>
        </p>
        <Player music={messiahMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Messiah;
