import Player from "../../Player";
import fadeMusic from "../../../assets/musics/rideTheLightning/fadeToBlack.mp3";

function Fade() {
  return (
    <>
      <header className="albumHeader">
        <h3>Fade To Black</h3>
        <p>
          <time dateTime="PT6M56S">6&apos; 56&quot;</time>
        </p>
        <Player music={fadeMusic} />
      </header>
      <section>
        <h4>[Instrumental Intro]</h4>
      </section>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Life, it seems, will fade away
          <br />
          Drifting further every day
          <br />
          Getting lost within myself
          <br />
          Nothing matters, no one else
          <br />
          I have lost the will to live
          <br />
          Simply nothing more to give
          <br />
          There is nothing more for me
          <br />
          Need the end to set me free
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Things not what they used to be
          <br />
          Missing one inside of me
          <br />
          Deathly lost, this can&apos;t be real
          <br />
          Cannot stand this hell I feel
          <br />
          Emptiness is filling me
          <br />
          To the point of agony
          <br />
          Growing darkness taking dawn
          <br />I was me, but now he&apos;s gone
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Bridge]</h4>
        <p>
          No one but me can save myself, but it&apos;s too late
          <br />
          Now I can&apos;t think, think why I should even try
          <br />
          Yesterday seems as though it never existed
          <br />
          Death greets me warm, now I will just say goodbye
          <br />
          (Goodbye)
        </p>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
      <section>
        <h4>[Instrumental Outro]</h4>
      </section>
    </>
  );
}

export default Fade;
