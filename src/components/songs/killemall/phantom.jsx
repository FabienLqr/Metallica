import Player from "../../Player";
import phantomLordMusic from "../../../assets/musics/killemall/phantomLord.mp3";

function Phantom() {
  return (
    <>
      <header className="albumHeader">
        <h3>Phantom Lord</h3>
        <p>
          <time dateTime="PT5M02S">5&apos; 02&quot;</time>
        </p>
        <Player music={phantomLordMusic}/>
      </header>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Sound starts ripping through your ears
          <br />
          The deafening sound of metal nears
          <br />
          Bodies waiting for his whips
          <br />
          The taste of leather on your lips
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Hear the cry of war, louder than before
          <br />
          With his sword in hand to control the land
          <br />
          Crushing metal strikes on this frightening night
          <br />
          Fall on to your knees for the phantom lord
        </p>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Victims falling under chains
          <br />
          You hear them crying dying pains
          <br />
          The fist of terrors breaking through
          <br />
          Now there&apos;s nothing you can do
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Hear the cry of war, louder than before
          <br />
          With his sword in hand to control the land
          <br />
          Crushing metal strikes on this frightening night
          <br />
          Fall on to your knees for the phantom lord
        </p>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
      <section>
        <h4>[Interlude]</h4>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
      <section>
        <h4>[Verse 3]</h4>
        <p>
          The leathered armies have prevailed
          <br />
          The phantom lord has never failed
          <br />
          Smoke is lifting from the ground
          <br />
          The rising-volume metal sound
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Hear the cry of war, louder than before
          <br />
          With his sword in hand to control the land
          <br />
          Crushing metal strikes on this frightening night
          <br />
          Fall on to your knees for the phantom lord
        </p>
      </section>
      <section>
        <h4>[Outro]</h4>
        <p>
          Fall to your knees
          <br />
          And bow to the phantom lord!
        </p>
      </section>
    </>
  );
}

export default Phantom;
