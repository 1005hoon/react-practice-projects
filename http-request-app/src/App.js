import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/movies");

      if (!response.ok) {
        throw new Error("에러가 발생했습니다");
      }

      const data = await response.json();

      const transformedMovies = data.map((movieData) => {
        return {
          id: movieData.id,
          title: movieData.title,
          description: movieData.description,
          releaseDate: movieData.releaseDate,
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

  const addMovieHandler = async (movie) => {
    await fetch("http://localhost:5000/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  let renderContent = <p>데이터가 없습니다</p>;

  if (error) {
    renderContent = <p>{error}</p>;
  }

  if (movies.length > 0) {
    renderContent = <MoviesList movies={movies} />;
  }

  if (movies.length === 0) {
    renderContent = <p>데이터가 없습니다</p>;
  }

  if (isLoading) {
    renderContent = <h1>데이터를 로딩중입니다</h1>;
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>영화정보 가져오기</button>
      </section>
      <section>{renderContent}</section>
    </>
  );
};

export default App;
