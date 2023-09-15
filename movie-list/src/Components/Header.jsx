import Poster from "./Images/Poster.png";
import NavBar from "./NavBar";
import HomeText from "./HomeText";
import SideNumbers from "./SideNumbers";

export default function Header() {
  return (
    <div>
      <div
        className="h-[30rem] md:h-screen  bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${Poster})` }}
      >
        <NavBar />
        <section className="mt-20  relative ">
          <HomeText />
          <SideNumbers />
        </section>
      </div>
    </div>
  );
}
