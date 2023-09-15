import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {
    fetch(  "https://api.themoviedb.org/3/movie/top_rated?api_key=141138a81563444c4d2f5e960b5a13ae")
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const movie = data.results;
        setCards(movie);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <div> {error}</div>}
      {loading && <h1> LOADING...</h1>}
      {cards && <MovieCard cards={cards} />}
    </div>
  );
}
