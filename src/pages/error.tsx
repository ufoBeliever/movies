import Link from "next/link";

export default () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <span className="font-bold text-7xl md:text-9xl">Oops!</span>
      <span className="text-2xl">Something went wrong.</span>
      <Link href="/">
        <span className="hover:underline text-2xl text-gray-600">
          Go to the main page
        </span>
      </Link>
    </div>
  );
};
