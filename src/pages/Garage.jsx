//import image
import garageImg from "../assets/Images/Garage.jpg"

function Garage() {
  return (
    <>
      <h1>Garage Inc.</h1>
      <img
              src={garageImg}
              alt="Logo de l'album Ride The Lightning"
              className="album"
            />
      <p>Garage Inc. song</p>
    </>
  );
}

export default Garage;
