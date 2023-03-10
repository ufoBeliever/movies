import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { fetchMovies } from "@/store/action-creators/movies";
import { generateSearchUrl } from "@/utils/api/generateSearchUrl";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Movie } from "../Movie";
import { Pagination } from "../Pagination";
import { ReplaceWrapper } from "../ReplaceWrapper";

export const MoviesList = () => {
  const [page, setPage] = useState<number>(1);
  const [elementsLength, setElementsLength] = useState<number>(0);
  const { movies, error, loading } = useTypedSelector((state) => state.movies);
  const { inputString } = useTypedSelector((state) => state.input);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputString) {
      dispatch(
        fetchMovies(
          generateSearchUrl([
            { param: "s", value: inputString },
            { param: "page", value: page.toString() },
          ])
        )
      );
    }
  }, [inputString, page]);

  useEffect(() => {
    if (movies?.totalResults) {
      setElementsLength(+movies.totalResults);
    }
  }, [movies]);

  const nextClick = () => {
    if (page < elementsLength) {
      setPage((prev) => prev + 1);
    }
  };
  const prevClick = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const renderItems = () => {
    if (error) {
      window.location.href = "/error";
    }

    if (loading) {
      return (
        <ReplaceWrapper>
          <ReactLoading type="spin" color="black" height={50} width={50} />
        </ReplaceWrapper>
      );
    }

    if (!movies?.Search && !movies) {
      return (
        <ReplaceWrapper>
          <div className="text-2xl text-center">
            Type your request to find some movies!
          </div>
        </ReplaceWrapper>
      );
    }

    return movies?.Search ? (
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 w-fit mx-auto"
        style={{ minHeight: "616px" }}
      >
        {movies.Search.map((e) => (
          <Movie {...e} key={e.imdbID} />
        ))}
      </div>
    ) : (
      <ReplaceWrapper>
        <div className="text-2xl text-center">
          No items found by your request
        </div>
      </ReplaceWrapper>
    );
  };

  return (
    <div className="flex flex-col items-center gap-16">
      {renderItems()}
      {movies?.Search && (
        <Pagination
          limit={elementsLength}
          currentPage={page}
          itemsPerPage={10}
          nextClick={nextClick}
          prevClick={prevClick}
        />
      )}
    </div>
  );
};
