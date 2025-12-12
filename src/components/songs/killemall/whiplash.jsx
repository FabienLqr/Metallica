import Player from "../../Player";
import whiplashMusic from "../../../assets/musics/killemall/whiplash.mp3";

function Whiplash() {
  return (
    <>
      <header className="albumHeader">
        <h3>Whiplash</h3>
        <p>
          <time dateTime="PT4M09S">4&apos; 09&quot;</time>
        </p>
        <Player music={whiplashMusic}/>
      </header>
      <section>
        <h4>[Verse 1]</h4>
        <p>
          Late at night, all systems go
          <br />
          You&apos;ve come to see the show
          <br />
          We do our best, you&apos;re the rest
          <br />
          You make it real, you know
          <br />
          There&apos;s a feeling deep inside
          <br />
          That drives you fuckin&apos; mad
          <br />
          A feeling of a hammerhead
          <br />
          You need it, oh, so bad
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Adrenaline starts to flow
          <br />
          You&apos;re thrashing all around
          <br />
          Acting like a maniac
          <br />
          Whiplash!
        </p>
      </section>
      <section>
        <h4>[Verse 2]</h4>
        <p>
          Bang your head against the stage
          <br />
          Like you never did before
          <br />
          Make it ring, make it bleed
          <br />
          Make it really sore
          <br />
          In a frenzied madness
          <br />
          With your leathers and your spikes
          <br />
          Heads are bobbing all around
          <br />
          It&apos;s hot as hell tonight
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Adrenaline starts to flow
          <br />
          You&apos;re thrashing all around
          <br />
          Acting like a maniac
          <br />
          Whiplash!
        </p>
      </section>
      <section>
        <h4>[Verse 3]</h4>
        <p>
          Here on stage, the Marshall noise
          <br />
          Is piercing through your ears
          <br />
          It kicks your ass, kicks your face
          <br />
          Exploding feeling nears
          <br />
          Now&apos;s the time to let it rip
          <br />
          To let it fuckin&apos; loose
          <br />
          We&apos;re gathered here to maim and kill
          <br />
          &apos;Cause this is what we choose
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Adrenaline starts to flow
          <br />
          You&apos;re thrashing all around
          <br />
          Acting like a maniac
        </p>
      </section>
      <section>
        <h4>[Instrumental Break]</h4>
        <p>Here we go!</p>
      </section>
      <section>
        <h4>[Guitar Solo]</h4>
        <p>Whiplash!</p>
      </section>
      <section>
        <h4>[Verse 4]</h4>
        <p>
          The show is through, the metal&apos;s gone
          <br />
          It&apos;s time to hit the road
          <br />
          Another town, another gig
          <br />
          Again, we will explode
          <br />
          Hotel rooms and motorways
          <br />
          Life out here is raw
          <br />
          But we&apos;ll never stop, we&apos;ll never quit
          <br />
          &apos;Cause we&apos;re Metallica
        </p>
      </section>
      <section>
        <h4>[Chorus]</h4>
        <p>
          Adrenaline starts to flow
          <br />
          You&apos;re thrashing all around
          <br />
          Acting like a maniac
        </p>
      </section>
      <section>
        <h4>[Outro]</h4>
        <p>Whoa, whoa</p>
      </section>
    </>
  );
}

export default Whiplash;
