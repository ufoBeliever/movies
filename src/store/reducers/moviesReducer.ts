import { IUserState, MoviesAction, MoviesActionTypes } from "../types/movies.d";

const initialState: IUserState = {
  movies: null,
  loading: false,
  error: null,
};

export const moviesReducer = (
  state = initialState,
  action: MoviesAction
): IUserState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return { loading: true, error: null, movies: null };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { loading: false, error: null, movies: action.payload };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, movies: null };
    default:
      return state;
  }
};
