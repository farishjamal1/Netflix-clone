import axios from "./axios";
import React, { useEffect, useState } from "react";
import './Row.css'
// import requests from "./Request";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // console.log(movie);
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__poster">
        {movies.map((movie)=>
          <img
          className={`row_posters ${isLargeRow && `row_posterLarge`}`}
          key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        )}
      </div>
    </div>
  );
}

export default Row;
