import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [cards, setCards] = useState([]);
  const data =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=141138a81563444c4d2f5e960b5a13ae";

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => {
        const movie = data.results
        setCards(movie);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <div>
      <MovieCard cards={cards} />
    </div>
  );
}
