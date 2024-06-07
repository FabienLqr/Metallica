// import datas
import albums from "../datas/albumsData";
function Nav() {
  return (
    <nav>
      {albums.map((album) => (
        <div key={album.id} className="navDiv">
          <img src={album.img} alt={album.name} className="albumLogo" />
          <p>{album.name}</p>
        </div>
      ))}
    </nav>
  );
}

export default Nav;
