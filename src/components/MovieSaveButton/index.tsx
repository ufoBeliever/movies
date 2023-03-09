import { IMovie } from "@/models/movie";
import { isInLocalStorage, setMovie } from "@/utils/api/movieLS";
import { FC, useEffect, useState } from "react";

export const MovieSaveButton: FC<IMovie> = (movie) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
    setIsChecked(isInLocalStorage(movie));
  }, []);
  const buttonClickHandler = () => {
    setMovie(movie);
    setIsChecked((prev) => !prev);
  };
  return (
    <button
      onClick={buttonClickHandler}
      className={[
        "px-4 py-2 rounded text-white font-bold text-xl flex items-center justify-center",
        isChecked ? "bg-green-500" : "bg-gray-500",
      ].join(" ")}
    >
      {isChecked ? "Saved" : "Save"}
    </button>
  );
};
