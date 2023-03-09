import { IMovie, IResponse } from "@/models/movie";
export interface IUserState {
  movies: IResponse | null;
  loading: boolean;
  error: null | string;
}

export enum MoviesActionTypes {
  FETCH_MOVIES = "FETCH_MOVIES",
  FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
}

export interface IFetchMoviesAction {
  type: MoviesActionTypes.FETCH_MOVIES;
}

export interface IFetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: IResponse;
}

export interface IFetchMoviesErrorAction {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

export type MoviesAction =
  | IFetchMoviesAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesErrorAction;
