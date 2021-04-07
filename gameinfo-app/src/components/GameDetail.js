import React from "react";

import styled from "styled-components/macro";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const GameDetail = () => {
  const { game, screenshot } = useSelector((state) => state.detail);
  return (
    <>
      {Object.keys(game).length ? (
        <CardShadow>
          <Detail>
            <div className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </div>
              </div>
            </div>
            <div className="media">
              <img src={game.background_image} alt={game.name} />
            </div>
            <div className="description">
              <p>{game.description_raw}</p>
            </div>
            <div className="gallery">
              {screenshot.results.map((screen) => (
                <img key={screen.id} src={screen.image} alt="game screenshot" />
              ))}
            </div>
          </Detail>
        </CardShadow>
      ) : (
        ""
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 10rem 20rem;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: black;

  img {
    width: 100%;
  }
`;

export default GameDetail;
