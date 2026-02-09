//import des images
import masterImg from "../assets/Images/Master.jpg"

function MasterofPuppets() {
    return ( <>
        <h1>Master of puppets</h1>
        <img
                src={masterImg}
                alt="Logo de l'album Ride The Lightning"
                className="album"
              />
        <p>Master of puppets songs</p></>  );
}

export default MasterofPuppets;