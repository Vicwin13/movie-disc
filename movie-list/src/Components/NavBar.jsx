import React from "react";
import tv from "./Images/tv.png";
import icon from "./Images/Icon (1).png";
import icon1 from "./Images/Icon.png";

export default function NavBar() {
  return (
    <>
      <nav className=" flex content-center pt-4 justify-around">
        <div className="flex items-center">
          <img src={tv} alt="" />
          <p className="text-white pl-4">MovieBox</p>
        </div>

        {/* This is the input field
         */}

        <div className=" flex items-center relative">
          <input
            className="h-8 bg-transparent px-4 py-2 rounded-xl border-2 w-[32.8125rem]"
            placeholder="What do you want to watch?"
            type="text"
          />
          <svg
            className="absolute inset-y-0 pr-2 right-0 top-4 "
            width="28"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <p className="text-white pr-4">Sign in</p>
          <div className="bg-red-400 flex p-2 w-10 items-center justify-center h-10 rounded-full">
            <img className="" src={icon1} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
