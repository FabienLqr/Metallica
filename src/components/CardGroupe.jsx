/* eslint-disable react/no-unescaped-entities */
import James from "../assets/Images/James.jpg";
import Kirk from "../assets/Images/Kirk.jpg";
import Robert from "../assets/Images/Robert.jpg";
import Lars from "../assets/Images/Lars.jpg";

function CardGroupe() {
    return ( <><div className="card-container">
        <div className="img-container">
          <img src={James} className="card-img" alt="James Hetfield" />
        </div>
        <section>
          <h3>James Hetfield</h3>
          <p className="role">Chanteur et Guitare rythmique</p>
          <article className="grp-description">
            <p>James Hetfield est né le 18 novembre 1962</p>
            <blockquote className="james-quote">
              "I was pretty much afraid of everything. Afraid of the world,
              afraid of speaking. You know really shy kid, music is a way to
              speak, as simple as that. I could either just Journal write
              poetry, write whatever was in my head and sit down drum a few
              chords and put that together and that's me, that's me telling
              the world about me when I can't do it on my own so music was
              the voice I didn't have."
            </blockquote>
          </article>
        </section>
      </div>

      <div className="card-container">
        <div className="img-container">
          <img src={Lars} className="card-img" alt="Lars Ulrich" />
        </div>
        <section>
          <h3>Lars Ulrich</h3>
          <p className="role">Batteur</p>
          <article className="grp-description">
            <p>Lars Ulrich est né le 26 décembre 1963</p>
            <blockquote className="james-quote">
              "Lars quote comes later"
            </blockquote>
          </article>
        </section>
      </div>

      <div className="card-container">
        <div className="img-container">
          <img src={Robert} className="card-img" alt="Ronert Trujilo" />
        </div>
        <section>
          <h3>Robert Trujilo</h3>
          <p className="role">Bassiste</p>
          <article className="grp-description">
            <p>Robert Trujilo est né le 23 octobre 1964</p>
            <blockquote className="james-quote">
              "Robert quote comes later"
            </blockquote>
          </article>
        </section>
      </div>

      <div className="card-container">
        <div className="img-container">
          <img src={Kirk} className="card-img" alt="Kirk Hammett" />
        </div>
        <section>
          <h3>Kirk Hammett</h3>
          <p className="role">Guitare Lead</p>
          <article className="grp-description">
            <p>Kirk Hammett est né le 3 août 1963</p>
            <blockquote className="james-quote">
              "Kirk quote comes later"
            </blockquote>
          </article>
        </section>
      </div></> );
}

export default CardGroupe;