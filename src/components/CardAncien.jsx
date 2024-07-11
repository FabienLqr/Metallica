/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img
import Cliff from "../assets/Images/Cliff.jpg";
import Dave from "../assets/Images/Dave.jpg";
import Jason from "../assets/Images/Jason.jpg";

function AncienMembre() {
  const [currentCardIndex] = useState(0);
  const cards = [
    {
      img: Cliff,
      name: "Cliff Burton",
      role: "Bassiste",
      description: "Cliff Burton est né le 10 février 1962",
      note: "Cliff Burton etait le bassiste de Metallica. IL est mort lors d'un accident avec le bus de la tournee le 27 septembre 1986.",
    },
    {
      img: Dave,
      name: "Dave Mustaine",
      role: "Guitare lead",
      description: "Dave Mustaine est né le 13 septembre 1961",
      note: "Il fut exclus du groupe en 1983, il fonda par la suite le groupe Megadeth",
    },
    {
      img: Jason,
      name: "Jason Newsted",
      role: "Bassiste",
      description: "Jason NEWSTED est né le 4 mars 1963",
      note: "Il prit la suite de Burton a la basse de 1986 jusqu'au 2001 ou il quitta le",
    },
  ];
  return (
    <>
      <Carousel>
        {cards.map((card, index) => (
          <>
            <div
              className={`card-container ${
                index === currentCardIndex ? "active" : ""
              }`}
              key={index}
            >
              <img src={card.img} className="card-img" alt={card.name} />
              <section>
                <h3>{card.name}</h3>
                <p className="role">{card.role}</p>
                <article className="grp-description">
                  <p>{card.description}</p>
                  <blocknote className="note">"{card.note}"</blocknote>
                </article>
              </section>
            </div>
          </>
        ))}
      </Carousel>
    </>
  );
}

export default AncienMembre;
