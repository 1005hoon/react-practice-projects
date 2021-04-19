import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("에러가 발생했습니다");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          description: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let renderContent = <p>데이터가 없습니다</p>;

  if (movies.length > 0) {
    renderContent = <MoviesList movies={movies} />;
  }

  if (error) {
    renderContent = <p>{error}</p>;
  }

  if (isLoading) {
    renderContent = <h1>데이터를 로딩중입니다</h1>;
  }
  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>영화정보 가져오기</button>
      </section>
      <section>{renderContent}</section>
    </>
  );
};

export default App;
