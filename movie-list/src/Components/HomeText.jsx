import React from "react";
import imd from "./Images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import play from "./Images/Play.png";
import orange from "./Images/PngItem_1381056 1.png";

export default function HomeText() {
  return (
    <aside className="text-white max-w-sm  relative left-24">
      <h1 className="text-5xl font-bold pb-4 ">John Wick 3: Parabellum</h1>
      <div className="flex items-center gap-24 pb-4">
        <div className="flex items-center gap-2 ">
          <img className="h-fit" src={imd} alt="" />
          <p>86.0/100</p>
        </div>
        <div className="flex items-center gap-2 ">
          <img className="h-fit" src={orange} alt="" />
          <p>97%</p>
        </div>
      </div>
      <section className="pb-4">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </section>
      <div className="flex items-center gap-2 bg-red-600 w-fit rounded-md p-2">
        <img className="h-fit" src={play} alt="" />
        <p>WATCH TRAILER</p>
      </div>
    </aside>
  );
}
