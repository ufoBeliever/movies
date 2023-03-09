import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { moviesReducer } from "./moviesReducer";

export const rootReducer = combineReducers({
  input: inputReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
