import Link from "next/link";
import { MdLocalMovies } from "react-icons/md";

export const Header = () => {
  return (
    <header className="h-20 bg-gray-500 flex items-center justify-between px-4">
      <Link href="/">
        <div className="flex items-center h-full group">
          <MdLocalMovies size="50px" color="white" />
          <h2 className="hidden sm:block text-white text-2xl font-bold uppercase group-hover:underline ml-2">
            Movies test task
          </h2>
        </div>
      </Link>
      <Link href="/saved-movies">
        <span className="text-white text-xl font-semibold hover:underline">
          Saved movies
        </span>
      </Link>
    </header>
  );
};
