//import image
import loadImg from "../assets/Images/Load.jpg"

function Load() {
    return ( <>
        <h1>Load</h1>
        <img
                src={loadImg}
                alt="Logo de l'album Ride The Lightning"
                className="album"
              />
        <p>Load songs</p></>  );
}

export default Load;