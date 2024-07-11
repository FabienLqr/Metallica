/* eslint-disable react/no-unescaped-entities */
import CardGroupe from "../components/CardGroupe";
import CardAncien from "../components/CardAncien";
// import datas
import Metallica from "../assets/Images/MetallicaLogo.jpg";

function Home() {
  return (
    <>
      <img src={Metallica} alt="Logo de Metallica" className="mainImg" />
      <section>
        <h2>Qui sont-ils?</h2>
        <article className="homeArticles">
          <p>
            Metallica est un groupe de trash metal et heavy metal originaire de
            Califonie (Etats-Unis d&apos;Amerique). La naissance du groupe est
            du a une annonce postée dans le journal <em>The Recycler</em> de
            Lars ULRICH pour former un groupe en 1980, c&apos;est James HETFIELD
            qui a repondu. Le groupe c&apos;est forme a Los Angeles en 1981.
            Metallica a eu d&apos;autres membres avant ceux que l&apos;on
            connait actuellement, c&apos;est principalement la place de bassiste
            qui a le plus change
          </p>
          <p>
            Metallica est l'un des membre du <em>Big Four of Trash</em> au cote
            de Anthrax, Megadeth et Slayer.
          </p>
          <p>
            En 2012, le groupe fonde son propre label discographique
            indépendant, Blackened Recordings, et acquiert tous les droits de
            ses albums en studio. En février 2017 le groupe annonce la fondation
            de <b>All Within My Hands</b>. La fondation se consacre à la
            création de communautés durables en soutenant l’éducation de la
            main-d’œuvre, la lutte contre la faim et d’autres services locaux
            essentiels. Vous pouvez acceder au site de la fondation via{" "}
            <a href="https://www.allwithinmyhands.org/">
              <b>ce lien</b>
            </a>
          </p>
        </article>
        <h2>Les membres</h2>
        <article className="homeArticles">
          <CardGroupe />
        </article>
        <h2>Anciens Membres</h2>
        <article className="homeArticles">
          <CardAncien />
        </article>
      </section>
    </>
  );
}

export default Home;
