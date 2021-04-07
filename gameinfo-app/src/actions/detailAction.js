import axios from "axios";

import { gameDetailsUrl, gameScreenShotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
  });

  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenShotUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshot: screenshotData.data,
    },
  });
};
