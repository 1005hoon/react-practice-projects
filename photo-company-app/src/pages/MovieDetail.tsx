import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieData";

interface MovieData {
  title: string;
  mainImg: string;
  secondaryImg: string;
  url: string;
  awards: { title: string; description: string }[];
}

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState<MovieData[]>(MovieState);
  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    const currentMovie = movies.filter((movieData) => movieData.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: #fff;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

interface AwardProps {
  title: string;
  description: string;
}

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award: React.FunctionComponent<AwardProps> = ({ title, description }) => (
  <AwardContainer>
    <h3>{title}</h3>
    <div className="line"></div>
    <p>{description}</p>
  </AwardContainer>
);

const AwardContainer = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1.5rem 0;
  }

  p {
    padding: 1rem 0;
  }
`;
export default MovieDetail;
