import React from "react";
import posterImage from "./Images/PosterImage.png";
import favorite from "./Images/favourite.png";

export default function MovieCard({ cards }) {
  return (
    <div>
      {cards.map((card, index) => (
       
        <div data-testid="movie-card" key={index}>
          <div
            data-testid="movie-poster"
            className="h-screen bg-no-repeat"
            style={{ backgroundImage: `url(${posterImage})` }}>
            <div className="">
              <h1 className="text-white">{card.title}</h1>
              <div>
                <img src={favorite} alt="" />
              </div>
            </div>
          </div>
          <p data-testid="movie-title"></p>
        </div>
      ))}
    </div>
  );
}
