import { MoviesAction, MoviesActionTypes } from "@/store/types/movies.d";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchMovies = (requestUrl: string): any => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const { data } = await axios.get(requestUrl);
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: "Request error",
      });
    }
  };
};
