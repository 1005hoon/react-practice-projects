import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

export const loadgames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upComingData = await axios.get(upcomingGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upComing: upComingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
