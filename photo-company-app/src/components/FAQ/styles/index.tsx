import styled from "styled-components/macro";

// styled components
export const FAQ = styled.section`
  min-height: 90vh;
  display: block;
  padding: 5rem 10rem;
  color: #fff;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
`;

export const Question = styled.article`
  padding: 3rem 0;
  cursor: pointer;

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
