import Player from "../../Player";
import damageMusic from "../../../assets/musics/masterOfPuppets/damageInc.mp3";

function Damage() {
  return (
    <>
      <header className="albumHeader">
        <h3>Damage, Inc.</h3>
        <p>
            <time dateTime="PT5M33S">5&apos; 33&quot;</time>
        </p>
        <Player music={damageMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Damage;
