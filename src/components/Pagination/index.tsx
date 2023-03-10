import { FC } from "react";
import { IPagination } from "./types";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Pagination: FC<IPagination> = ({
  limit,
  itemsPerPage,
  currentPage,
  nextClick,
  prevClick,
}) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={prevClick}
        disabled={currentPage === 1}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 disabled:cursor-not-allowed"
      >
        <GrPrevious size="20px" />
      </button>
      <div className="text-xl flex items-center gap-2">
        Page:{" "}
        <div className="w-10 h-10 flex items-center justify-center rounded bg-gray-300 ">
          {currentPage}
        </div>{" "}
        of {Math.ceil(limit / itemsPerPage)}
      </div>
      <button
        disabled={currentPage === Math.ceil(limit / 10)}
        onClick={nextClick}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 disabled:cursor-not-allowed"
      >
        <GrNext size="20px" />
      </button>
    </div>
  );
};
