import Player from "../../Player";
import thingMusic from "../../../assets/musics/masterOfPuppets/theThingThatShouldNotBe.mp3";

function Thing() {
  return (
    <>
      <header className="albumHeader">
        <h3>The Thing That Should Not Be</h3>
        <p>
            <time dateTime="PT6M37S">6&apos; 37&quot;</time>
        </p>
        <Player music={thingMusic} />
      </header>
      <section>
        <h4>[Soon]</h4>
      </section>
    </>
  );
}

export default Thing;
