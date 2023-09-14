import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieContent() {
  const { id } = useParams();

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState([]);

  const dateToUTC = (content) => {
    const currentDate = content?.release_date;
    const newDate = new Date(currentDate || null);
    const utcDate = newDate.toISOString();
    return utcDate.split("T")[0];
  };

  const runTimeMinutes = (content) => {
    const currentRun = content?.runtime;
    const newRun = currentRun / 60;
    const newerRun = newRun.toFixed(2);
    return newerRun;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=141138a81563444c4d2f5e960b5a13ae`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not get the required data");
        }
        return response.json();
      })
      .then((data) => {
        setContent(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError("Error fetching data", error);
        setLoading(false);
      });
  }, [id]);

  // This is to search

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=141138a81563444c4d2f5e960b5a13ae`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSearch(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data", error);
  //     });
  // }, [id]);

  return (
    <div className=" w-full p-8">
      <section>
        <div className="pb-8 w-full h-[20rem] rounded-xl bg-red-400"></div>
      </section>
      {error && <div>{error}</div>}
      {loading && <div> Loading...</div>}
      {content && (
        <div className="pt-4">
          <div className="flex flex-wrap gap-y-6 items-center justify-between font-bold">
            <h1
              data-testid="movie-title"
              className="font-semibold text-[1.5rem]"
            >
              {content.original_title}
            </h1>
            <p data-testid="movie-runtime">{runTimeMinutes(content)}mins</p>
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
          <div className="pt-8 flex flex-wrap justify-between items-center">
            <section
              data-testid="movie-overview"
              className=" lg:w-3/4 text-justify"
            >
              {content.overview}
            </section>
            <aside>
              <div className=" p-2 text-center rounded-full px-4 bg-red-400">
                {" "}
                See Show times
              </div>
              <div className=" p-2 text-center rounded-full px-4 mt-2 bg-green-400">
                {" "}
                More watch options{" "}
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
