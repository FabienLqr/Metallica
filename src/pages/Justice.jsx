//import image
import justiceImg from "../assets/Images/Justice.jpg"

function Justice() {
    return ( <>
        <h1>And Justice for All</h1>
        <img
                src={justiceImg}
                alt="Logo de l'album Ride The Lightning"
                className="album"
              />
        <p>And Justice for all songs</p></>  );
}

export default Justice;