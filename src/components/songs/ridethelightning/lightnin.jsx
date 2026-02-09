import Player from "../../Player";
import lightningMusic from "../../../assets/musics/rideTheLightning/rideTheLightning.mp3";

function Lightning() {
  return (
    <>
      <header className="albumHeader">
        <h3>Ride The Lightning</h3>
        <p>
          <time dateTime="PT6M36S">6&apos; 36&quot;</time>
        </p>
        <Player music={lightningMusic} />
      </header>
      <section>
        <h4>[Instrumental Intro]</h4>
      </section>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Guilty as charged, but damn it, it ain&apos;t right
          <br />
          There&apos;s someone else controlling me
          <br />
          Death in the air, strapped in the electric chair
          <br />
          This can&apos;t be happening to me
          <br />
          Who made you, God to say
          <br />
          &quot;I&apos;ll take your life from you&quot;?
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Flash before my eyes
          <br />
          Now it&apos;s time to die
          <br />
          Burning in my brain
          <br />I can feel the flame
        </p>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Wait for the sign to flick the switch of death
          <br />
          It&apos;s the beginning of the end
          <br />
          Sweat, chilling cold, as I watch death unfold
          <br />
          Consciousness, my only friend
          <br />
          My fingers grip with fear
          <br />
          What am I doing here?
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Flash before my eyes Now it&apos;s time to die
          <br />
          Burning in my brain
          <br />I can feel the flame
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Bridge]</h4>
        <p>
          Someone help me
          <br />
          Oh please, God, help me
          <br />
          They&apos;re trying to take it all away
          <br />I don&apos;t want to die (Ah)
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
      <section>
        <h4>[Bridge]</h4>
        <p>
          Someone help me
          <br />
          Oh please, God, help me
          <br />
          They&apos;re trying to take it all away
          <br />I don&apos;t want to die (Ah)
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Verse 3]</h4>
        <p>
          Time moving slow, the minutes seem like hours
          <br />
          The final curtain call I see
          <br />
          How true is this? Just get it over with
          <br />
          If this is true, just let it be
          <br />
          Wakened by horrid scream
          <br />
          Freed from this frightening dream
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Flash before my eyes
          <br />
          Now it&apos;s time to die
          <br />
          Burning in my brain
          <br />I can feel the flame
        </p>
      </section>
      <section>
        <h4>[Instrumental Outro]</h4>
      </section>
    </>
  );
}

export default Lightning;
