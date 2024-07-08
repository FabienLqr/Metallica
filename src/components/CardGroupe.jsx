/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import James from "../assets/Images/James.jpg";
import Kirk from "../assets/Images/Kirk.jpg";
import Robert from "../assets/Images/Robert.jpg";
import Lars from "../assets/Images/Lars.jpg";

function CardGroupe() {
  const [currentCardIndex] = useState(0);

  const cards = [
    {
      img: James,
      name: "James Hetfield",
      role: "Chanteur et Guitare rythmique",
      description: "James Hetfield est né le 18 novembre 1962",
      quote:
        "I was pretty much afraid of everything. Afraid of the world, afraid of speaking. You know really shy kid, music is a way to speak, as simple as that. I could either just Journal write poetry, write whatever was in my head and sit down drum a few chords and put that together and that's me, that's me telling the world about me when I can't do it on my own so music was the voice I didn't have.",
    },
    {
      img: Lars,
      name: "Lars Ulrich",
      role: "Batteur",
      description: "Lars Ulrich est né le 26 décembre 1963",
      quote: "Lars quote comes later",
    },
    {
      img: Robert,
      name: "Robert Trujilo",
      role: "Bassiste",
      description: "Robert Trujilo est né le 23 octobre 1964",
      quote: "Robert quote comes later",
    },
    {
      img: Kirk,
      name: "Kirk Hammett",
      role: "Guitare Lead",
      description: "Kirk Hammett est né le 3 août 1963",
      quote: "Kirk quote comes later",
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
                  <blockquote className="quote">
                    "{card.quote}"
                  </blockquote>
                </article>
              </section>
            </div>
          </>
        ))}
      </Carousel>
    </>
  );
}

export default CardGroupe;
