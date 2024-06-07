// import datas
import Metallica from "../assets/Images/MetallicaLogo.jpg";

function Home() {
  return (
    <>
      <img src={Metallica} alt="Logo de Metallica" className="mainImg" />
      <section>
        <h2>Qui sont-ils?</h2>
        <article className="homeArticles">
          Metallica est un groupe de trash metal et heavy metal originaire de
          Califonie (Etats-Unis d&apos;Amerique). La naissance du groupe est du
          a une annonce de Lars ULRICH pour former un groupe en 1980, c&apos;est
          James HETFIELD qui a repondu. Le groupe c&apos;est forme a Los Angeles
          en 1981. Metallica a eu d&apos;autres membres avant ceux que l&apos;on
          connait actuellement, c&apos;est principalement la place de bassiste
          qui a le plus change
        </article>
        <h2>Les membres</h2>
        <article className="homeArticles">
          <ul>
            <li>James HETFIELD: Guitariste et chanteur</li>
            <li>Kirk HAMMET: guitariste lead</li>
            <li>Robert TRUJILLO: Bassiste</li>
            <li>Lars ULRICH: Batteur</li>
          </ul>
          <h3>Anciens Membres</h3>
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
