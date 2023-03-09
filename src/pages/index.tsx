import { Input, MoviesList } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies app</title>
        <meta name="description" content="Movies app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Movie, Search, Film" />
      </Head>
      <main className="p-10 gap-20 flex items-center min-h-screen justify-between flex-col">
        <Input />
        <div>
          <MoviesList />
        </div>
      </main>
    </>
  );
}
