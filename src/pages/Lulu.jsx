//import image
import luluImg from "../assets/Images/Lulu.jpg"

function Lulu() {
  return (
    <>
      <h1>Lulu</h1>
      <img
              src={luluImg}
              alt="Logo de l'album Ride The Lightning"
              className="album"
            />
      <p>Lulu song</p>
    </>
  );
}

export default Lulu;
