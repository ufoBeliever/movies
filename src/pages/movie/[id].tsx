import { MovieSaveButton } from "@/components/MovieSaveButton";
import { apikey } from "@/consts";
import { IMovieEnchase } from "@/models/movie";
import { generateSearchUrl } from "@/utils/api/generateSearchUrl";
import axios from "axios";
import { FC } from "react";

const Movie: FC<IMovieEnchase> = (response) => {
  const { Poster, Plot, Actors, Ratings, Year, Title, Runtime } = response;
  const title = (
    <h1 className="font-bold text-3xl block">
      {Title} ({Year})
    </h1>
  );
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="flex items-center md:hidden justify-between w-full gap-10">
        {title}
        <MovieSaveButton {...response} />
      </div>
      <div className="flex w-full gap-5 text-xl flex-col md:flex-row">
        <img
          alt="poster"
          src={Poster}
          className="rounded-xl h-96 w-72 self-center float-left"
        />
        <div className="flex flex-col gap-6">
          <div className="items-center hidden md:flex justify-between w-full gap-10">
            {title}
            <MovieSaveButton {...response} />
          </div>
          <div>Actors: {Actors}</div>
          <div>Lasts: {Runtime}</div>
          <div>
            Ratings:{" "}
            <ul>
              {Ratings.map((e) => {
                return (
                  <li key={e.Source} className="before:content-['⭐'] flex">
                    <div>
                      {e.Source} <span className="font-bold">{e.Value}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <article className="self-end md:self-start text-2xl text-center md:text-start">
        {Plot}
      </article>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const { data } = await axios.get(
      generateSearchUrl([
        { param: "i", value: id },
        { param: "plot", value: "full" },
      ])
    );
    if (data.Response === "False") {
      return {
        notFound: true,
      };
    }
    return {
      props: data,
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/error",
      },
      props: {},
    };
  }
}

export default Movie;
