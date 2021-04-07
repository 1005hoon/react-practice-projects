import React from "react";

import styled from "styled-components/macro";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
