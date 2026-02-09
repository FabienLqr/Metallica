//import image
import deathImg from "../assets/Images/Magnetic.jpg"

function Death() {
  return (
    <>
      <h1>Death Magnetic</h1>
      <img
              src={deathImg}
              alt="Logo de l'album Ride The Lightning"
              className="album"
            />
      <p>Death Magnetic song</p>
    </>
  );
}

export default Death;
