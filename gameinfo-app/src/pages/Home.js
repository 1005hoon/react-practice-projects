import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadgames } from "../actions/gamesAction";

import styled from "styled-components/macro";
import { motion } from "framer-motion";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadgames());
  }, [dispatch]);

  const { popular, newGames, upComing } = useSelector((state) => state.games);

  return (
    <div>
      <GameList>
        {selectedId && <GameDetail />}
        <h2>Upcoming Games</h2>
        <Games>
          {upComing.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </GameList>
    </div>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 3rem;
`;

export default Home;
