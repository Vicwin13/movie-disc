import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieContent() {
  const { id } = useParams();

  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);

  const dateToUTC = (content) => {
    const currentDate = content?.release_date;
    const newDate = new Date(currentDate || null);
    const utcDate = newDate.toISOString();
    return utcDate;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=141138a81563444c4d2f5e960b5a13ae`
    )
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=141138a81563444c4d2f5e960b5a13ae`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, [id]);

  return (
    <div className=" w-full p-8">
      <section>
        <div className="pb-8 w-full h-[20rem] rounded-xl bg-red-400"></div>
      </section>
      <div className="pt-4">
        <div className="flex items-center justify-between font-bold">
          <h1 data-testid="movie-title" className="font-semibold text-[1.5rem]">
            {content.original_title}
          </h1>
          <p data-testid="movie-runtime">{content.runtime}</p>
          <p data-testid="movie-release-date">{dateToUTC(content)}</p>
          <div className="flex gap-4 font-bold text-xs  ">
            {content?.genres?.map((genre) => (
              <p
                className="bg-red-500 py-1 px-2 rounded-xl text-white"
                key={genre.id}
              >
                {genre.name}
              </p>
            ))}
          </div>
        </div>
        <section data-testid="movie-overview" className="pt-4 w-3/4">
          {content.overview}
        </section>
      </div>
    </div>
  );
}
