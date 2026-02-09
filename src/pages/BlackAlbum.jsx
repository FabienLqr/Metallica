//import image
import blackImg from "../assets/Images/Black.jpg"

function BlackAlbum() {
    return ( <>
        <h1>Black Album</h1>
        <img
                src={blackImg}
                alt="Logo de l'album Ride The Lightning"
                className="album"
              />
        <p>Black Album songs</p></>  );
}

export default BlackAlbum;