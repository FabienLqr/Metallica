import Player from "../../Player";
import batteryMusic from "../../../assets/musics/masterOfPuppets/battery.mp3";

function Battery() {
  return (
    <>
      <header className="albumHeader">
        <h3>Battery</h3>
        <p>
          <time dateTime="PT5M13S">5&apos; 13&quot;</time>
        </p>
        <Player music={batteryMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Battery;
