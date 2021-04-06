import styled from "styled-components/macro";
import { motion } from "framer-motion";

// styled components
export const Services = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1 1 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1.5rem;
      background: #fff;
      padding: 1rem;
      color: #2f2f2f;
      border-radius: 5px;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
