import { IMovie } from "@/models/movie";
import Link from "next/link";
import { FC } from "react";

export const Movie: FC<IMovie> = ({ Title, Year, imdbID, Poster }) => {
  return (
    <Link href={`/movie/${imdbID}`}>
      <div className="hidden xl:block relative cursor-pointer w-48 h-72">
        <img
          alt="poster"
          src={Poster}
          className="w-48 h-72 object-cover rounded-xl"
        />
        <div
          className="w-48
                    h-72
                    absolute
                    top-0
                    left-0
                    hover:bg-semi-transparent
                    transition
                    flex
                    items-end
                    p-3
                    rounded-xl
                    duration-500
                    group"
        >
          <span
            className="transition
                      text-white
                        font-bold
                        text-xl
                        opacity-0
                        group-hover:opacity-100
                        duration-500"
          >
            {Title} ({Year})
          </span>
        </div>
      </div>

      <div className="block xl:hidden relative cursor-pointer w-72 h-72 group">
        <img
          alt="poster"
          src={Poster}
          className="w-72 h-72 object-cover rounded-xl"
        />
        <div
          className="w-72
                      h-22
                      absolute
                      bottom-0
                      left-0
                    bg-semi-transparent
                      transition
                      flex
                      items-end
                      p-3
                      rounded-xl
                      duration-500
                      group-hover:animate-bounce"
        >
          <span
            className="transition
                      text-white
                        font-bold
                        text-xl"
          >
            {Title} ({Year})
          </span>
        </div>
      </div>
    </Link>
  );
};
