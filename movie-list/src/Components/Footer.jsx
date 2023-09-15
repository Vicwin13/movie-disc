import fb from "./Images/fb.png";
import ig from "./Images/ig.png";
import x from "./Images/x.png";
import yt from "./Images/yt.png";

export default function Footer() {
  return (
    <div className="mt-16 mx-auto pb-16 w-fit ">
      <footer>
        <div className="flex justify-around p-4">
          <img src={fb} />
          <img src={ig} />
          <img src={x} />
          <img src={yt} />
        </div>
        <div className="flex flex-col text-center sm:flex-row sm:gap-12 md:gap-24 p-4">
          <p> Condition of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <p className="text-center">
          {" "}
          &copy; 2021 MovieBox by Adriana Eka Prayudha
        </p>
      </footer>
    </div>
  );
}
