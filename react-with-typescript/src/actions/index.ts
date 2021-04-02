import axios from "axios";
import { Dispatch } from "redux";

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(url);

    dispatch({
      type: "FETCH_TODOS",
      payload: res.data,
    });
  };
};
