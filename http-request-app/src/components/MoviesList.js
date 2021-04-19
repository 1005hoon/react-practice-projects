import React from "react";
import Movie from "./Movie";
import styles from "./MoviesList.module.css";

const MoviesList = (props) => {
  const renderMovies = props.movies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      description={movie.description}
      releaseDate={movie.releaseDate}
    />
  ));

  return <ul className={styles["movies-list"]}>{renderMovies}</ul>;
};

export default MoviesList;
