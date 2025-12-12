import Player from "../../Player";
import lightMusic from "../../../assets/musics/killemall/hitTheLights.mp3";

function Light() {
  return (
    <>
      <header className="albumHeader">
        <h3>Hit the Lights</h3>
        <p>
          <time dateTime="PT4M17S">4&apos; 17&quot;</time>
        </p>
        <Player music={lightMusic} />
      </header>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          No life ‘til leather
          <br />
          We&apos;re gonna kick some ass tonight
          <br />
          When our fans start screaming, it&apos;s right
          <br />
          Well, all right, yeah
        </p>
      </section>
      <section>
        <h4>[Pre-Chorus]</h4>
        <p>
          When we start to rock
          <br />
          We never wanna stop again
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Hit the lights!
          <br />
          Hit the lights!
          <br />
          Hit the lights!
        </p>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          You know our fans are insane
          <br />
          With volume higher
          <br />
          Than anything today
          <br />
          The only way, yeah
        </p>
      </section>
      <section>
        <h4>[Pre-Chorus]</h4>
        <p>
          When we start to rock
          <br />
          We never wanna stop again
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Hit the lights!
          <br />
          Hit the lights!
          <br />
          Hit the lights!
        </p>
      </section>
      <section>
        <h4>[Verse 3]</h4>
        <p>
          With all-out screaming
          <br />
          We&apos;re gonna rip right through your brain
          <br />
          We got the lethal power
          <br />
          It is causing you sweet pain
          <br />
          Oh, sweet pain, yeah
        </p>
      </section>
      <section>
        <h4>[Pre-Chorus]</h4>
        <p>
          When we start to rock
          <br />
          We never wanna stop again
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Hit the lights!
          <br />
          Hit the lights!
          <br />
          Hit the lights!
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
    </>
  );
}

export default Light;
