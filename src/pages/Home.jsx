/* eslint-disable react/no-unescaped-entities */
// import datas
import Metallica from "../assets/Images/MetallicaLogo.jpg";
import James from "../assets/Images/James.jpg";
import Kirk from "../assets/Images/Kirk.jpg";
import Robert from "../assets/Images/Robert.jpg";
import Lars from "../assets/Images/Lars.jpg";

function Home() {
  return (
    <>
      <img src={Metallica} alt="Logo de Metallica" className="mainImg" />
      <section>
        <h2>Qui sont-ils?</h2>
        <article className="homeArticles">
          Metallica est un groupe de trash metal et heavy metal originaire de
          Califonie (Etats-Unis d&apos;Amerique). La naissance du groupe est du
          a une annonce postée dans le journal <em>The Recycler</em> de Lars
          ULRICH pour former un groupe en 1980, c&apos;est James HETFIELD qui a
          repondu. Le groupe c&apos;est forme a Los Angeles en 1981. Metallica a
          eu d&apos;autres membres avant ceux que l&apos;on connait
          actuellement, c&apos;est principalement la place de bassiste qui a le
          plus change
        </article>
        <h2>Les membres</h2>
        <article className="homeArticles">
          <div className="card-container">
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
          </div>
        </article>
        <h2>Anciens Membres</h2>
        <article className="homeArticles">
          <ul>
            <li>
              Dave MUSTAIN qui a ete exclus, il a ensuite forme le groupe
              Megadeth
            </li>
            <li>Ron McGOVNEY est le premier bassiste de Metallica</li>
            <li>Cliff BURTON le bassiste mort en 1986 dans un accident</li>
            <li>Jason NEWSTED qui prend la place de BURTON</li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default Home;
