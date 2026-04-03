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
        <h4>[Instrumental Intro]</h4>
      </section>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Messenger of fear in sight
          <br />
          Dark deception kills the light
          <br />
          Hybrid children watch the sea
          <br />
          Pray for Father, roaming free
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Fearless wretch, insanity
          <br />
          He watches, lurking beneath the sea
          <br />
          Great Old One, forbidden site
          <br />
          He searches, hunter of the shadows is rising
          <br />
          Immortal
          <br />
          In madness, you dwell
        </p>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Crawling chaos, underground
          <br />
          Cult has summoned twisted sound
          <br />
          Out from ruins once possessed
          <br />
          Fallen city, living death
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Fearless wretch, insanity
          <br />
          He watches, lurking beneath the sea
          <br />
          Timeless sleep has been upset
          <br />
          He awakens, hunter of the shadows is rising
          <br />
          Immortal
          <br />
          In madness, you dwell
        </p>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
      </section>
      <section>
        <h4>[Bridge]</h4>
        <p>In madness, you dwell</p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
      </section>
      <section>
        <h4>[Verse 3]</h4>
        <p>
          Not dead, which eternal lie
          <br />
          Stranger aeons death may die
          <br />
          Drain you of your sanity
          <br />
          Face the thing that should not be
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Fearless wretch, insanity
          <br />
          He watches, lurking beneath the sea
          <br />
          Great Old One, forbidden site
          <br />
          He searches, hunter of the shadows is rising
          <br />
          Immortal
          <br />
          In madness, you dwell
        </p>
      </section>
      <section>
        <h4>[Instrumental Outro]</h4>
      </section> 
    </>
  );
}

export default Thing;
