// import utilities
// import components
import Nav from "./Nav";
import Home from "../pages/Home";

function Header() {
  return (
    <>
      <header>
        <h1>Metallica</h1>
        <Nav />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default Header;
