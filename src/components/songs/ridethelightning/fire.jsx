import Player from "../../Player";
import fireMusic from "../../../assets/musics/rideTheLightning/fightFireWithFire.mp3";

function Fire() {
  return (
    <>
      <header className="albumHeader">
        <h3>Fight Fire With Fire</h3>
        <p>
          <time dateTime="PT4M44S">4&apos; 44&quot;</time>
        </p>
        <Player music={fireMusic} />
      </header>
      <section>
        <h4>[Instrumental Intro]</h4>
      </section>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Do unto others as they&apos;ve done to you
          <br />
          But what the hell is this world coming to?
          <br />
          Blow the universe into nothingness <br />
          Nuclear warfare shall lay us to rest
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Fight fire with fire
          <br />
          Ending is near
          <br />
          Fight fire with fire
          <br />
          Bursting with fear
          <br />
          We all shall die
        </p>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Time is like a fuse, short and burning fast
          <br />
          Armageddon&apos;s here, like said in the past
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Fight fire with fire
          <br />
          Ending is near
          <br />
          Fight fire with fire
          <br />
          Bursting with fear
          <br />
        </p>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Verse 3]</h4>
        <p>
          Soon to fill our lungs, the hot winds of death
          <br />
          The gods are laughing, so take your last breath
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Fight fire with fire
          <br />
          Ending is near
          <br />
          Fight fire with fire
          <br />
          Bursting with fear
        </p>
      </section>
      <section>
        <h4>[Outro]</h4>
        <p>
          Fight fire with fire, fight fire with fire
          <br />
          Fight fire with fire, fight fire with fire
          <br />
          Fight fire with fire, fight fire with fire
          <br />
          Fight fire with fire, fight fire with fire, fight
        </p>
      </section>
    </>
  );
}

export default Fire;
