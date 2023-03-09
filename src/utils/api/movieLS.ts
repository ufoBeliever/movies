import { localStorageItemName } from "@/consts";
import { IMovie } from "@/models/movie";

export const isInLocalStorage = (movie: IMovie): boolean => {
  const moviesJSON = localStorage.getItem(localStorageItemName);
  if (moviesJSON) {
    const movies: IMovie[] = JSON.parse(moviesJSON);

    for (let movieItem of movies) {
      if (movieItem.imdbID === movie.imdbID) {
        return true;
      }
    }
  }
  return false;
};

export const setMovie = (movie: IMovie): void => {
  if (isInLocalStorage(movie)) {
    const currentMovies: IMovie[] = JSON.parse(
      localStorage.getItem(localStorageItemName)!
    );

    localStorage.setItem(
      localStorageItemName,
      JSON.stringify(currentMovies.filter((e) => e.imdbID !== movie.imdbID))
    );
  } else {
    const moviesJSON = localStorage.getItem(localStorageItemName);
    if (moviesJSON) {
      const currentMovies: IMovie[] = JSON.parse(
        localStorage.getItem(localStorageItemName)!
      );

      localStorage.setItem(
        localStorageItemName,
        JSON.stringify([...currentMovies, movie])
      );
    } else {
      localStorage.setItem(localStorageItemName, JSON.stringify([movie]));
    }
  }
};
