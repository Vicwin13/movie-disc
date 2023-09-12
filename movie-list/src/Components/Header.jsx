
import Poster from "./Images/Poster.png";
import NavBar from "./NavBar";
import HomeText from "./HomeText";
import SideNumbers from "./SideNumbers";

export default function Header() {
  return (
    <div>
      <div
        className="h-screen bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Poster})` }}>
        <NavBar />
        <section className="mt-20  relative ">
          <HomeText />
          <SideNumbers />
        </section>
      </div>
    </div>
  );
}
