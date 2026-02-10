import Player from "../../Player";
import bellMusic from "../../../assets/musics/rideTheLightning/forWhomTheBellTolls.mp3";

function Bell() {
  return (
    <>
      <header className="albumHeader">
        <h3>For Whom The Bell Tolls</h3>
        <p>
          <time dateTime="PT5M10S">5&apos; 10&quot;</time>
        </p>
        <Player music={bellMusic} />
      </header>
      <section>
        <h4>[Instrumental Intro]</h4>
      </section>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Make his fight, on the hill, in the early day
          <br />
          Constant chill deep inside
          <br />
          Shouting gun, on they run, through the endless grey
          <br />
          On they fight, for they&apos;re right, yes, but who&apos;s to say?
          <br />
          For a hill, men would kill, why? They do not know
          <br />
          Stiffened wounds test their pride
          <br />
          Men of five, still alive, through the raging glow
          <br />
          Gone insane from the pain that they surely know
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          For whom the bell tolls
          <br />
          Time marches on
          <br />
          For whom the bell tolls
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Take a look to the sky just before you die
          <br />
          It&apos;s the last time he will
          <br />
          Blackened roar, massive roar, fills the crumbling sky
          <br />
          Shattered goal fills his soul with a ruthless cry
          <br />
          Stranger now are his eyes to this mystery
          <br />
          Hears the silence so loud
          <br />
          Crack of dawn, all is gone, except the will to be
          <br />
          Now they see what will be, blinded eyes to see
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          For whom the bell tolls
          <br />
          Time marches on
          <br />
          For whom the bell tolls
        </p>
      </section>
      <section>
        <h4>[Instrumental Outro]</h4>
      </section>
    </>
  );
}

export default Bell;
