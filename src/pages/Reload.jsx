//import image
import reloadImg from "../assets/Images/Reload.jpg"

function Reload() {
    return ( <>
    <h1>Reload</h1>
    <img
            src={reloadImg}
            alt="Logo de l'album Ride The Lightning"
            className="album"
          />
    <p>Reload song</p></> );
}

export default Reload;