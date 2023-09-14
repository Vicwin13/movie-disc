import { Link } from "react-router-dom";
import imd from "./Images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import favorite from "./Images/favourite.png";
import { useState } from "react";
// import orange from "./Images/PngItem_1381056 1.png";

export default function MovieCard({ cards }) {
  const [favColor, setFavColor] = useState("");

  const changeColor = () => {
    setFavColor("red");
  };

  const top10 = cards.slice(0, 10);

  return (
    <div className="mt-8">
      <h1
        className="text-[2.5rem] font-bold sm:pl-14 md:pl-20 lg:pl-[6.5rem] pb-4
      "
      >
        Featured Movies
      </h1>
      <div className="grid content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-10/12 mx-auto">
        {top10.map((card, index) => (
          <Link key={index} to={`/movies/${card.id}`}>
            <div
              className="h-[20rem] place-items-center"
              data-testid="movie-card"
            >
              <div
                data-testid="movie-poster "
                className=" 
             h-auto bg-no-repeat bg-cover bg-center "
                style={{
                  width: "100%",
                  height: "80%",
                  backgroundImage: `url('https://image.tmdb.org/t/p/original/${card.poster_path}')`,
                }}
              >
                <div className=" relative">
                  <div
                    className=" w-6 h-6 flex justify-center items-center rounded-full bg-gray-400 absolute inset-y-0 right-0 top-4 hover z-40 hover:bg-red-300"
                    onClick={changeColor}
                    style={{ marginRight: "2rem", favColor }}
                  >
                    <img className="h-fit" src={favorite} alt="" />
                  </div>
                </div>
              </div>
              <p data-testid="movie-title" className="font-bold">
                {card.original_title}
              </p>

              {/* This is for the rating and the orange icon */}

              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2 ">
                  <img className="h-fit" src={imd} alt="" />
                  <p>{card.vote_average}/100</p>
                </div>
                <div className="flex items-center gap-2 ">
                  {/* <img className="h-fit" src={orange} alt="" />
                  <p>97%</p> */}
                </div>
              </div>

              <p data-testid="movie-release-date">{card.release_date} </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
