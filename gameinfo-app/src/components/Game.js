import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { resizeImage } from "../utils";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={resizeImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  p {
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
