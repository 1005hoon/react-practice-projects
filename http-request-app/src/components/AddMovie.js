import React, { useRef } from "react";
import styles from "./AddMovie.module.css";

const AddMovie = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const releaseDateRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const movie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="description">설명</label>
        <textarea rows="5" id="description" ref={descriptionRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="date">개봉 날짜</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>영화 추가하기</button>
    </form>
  );
};

export default AddMovie;
