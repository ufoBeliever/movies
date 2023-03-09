import { Movie, ReplaceWrapper } from "@/components";
import { localStorageItemName } from "@/consts";
import { IMovie } from "@/models/movie";
import { useEffect, useState } from "react";

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    const moviesJSON = localStorage.getItem(localStorageItemName);
    setSavedMovies(moviesJSON ? JSON.parse(moviesJSON) : []);
  }, []);

  return (
    <div className="flex items-center flex-col p-10 gap-6">
      <h1 className="font-bold text-3xl block">Your saved movies</h1>
      {savedMovies.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 w-fit mx-auto">
          {savedMovies.map((e) => {
            return <Movie {...e} key={e.imdbID} />;
          })}
        </div>
      ) : (
        <ReplaceWrapper>
          <div className="text-2xl text-center">No saved movies yet</div>
        </ReplaceWrapper>
      )}
    </div>
  );
};

export default SavedMovies;
