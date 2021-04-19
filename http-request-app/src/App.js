import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

const App = () => {
  const dummyData = [
    {
      id: 1,
      title: "아무 영화나 넣어보세요",
      description: "이게 영화 설명이 들어가는 칸입니다",
      releaseDate: "2021-05-22",
    },
    {
      id: 2,
      title: "또 다른 영화를 넣어보세요",
      description: "이게 영화 설명이 들어가는 칸입니다",
      releaseDate: "2021-10-05",
    },
  ];

  return (
    <>
      <section>
        <button>영화정보 가져오기</button>
      </section>
      <section>
        <MoviesList movies={dummyData} />
      </section>
    </>
  );
};

export default App;
