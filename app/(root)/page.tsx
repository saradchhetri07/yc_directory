import Image from "next/image";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartUpCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export interface startUpCardType {
  _createdAt: string;
  views: number;
  author: {
    _id: number;
    name: string;
  };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const newDate = new Date();

  const posts: startUpCardType[] = await client.fetch(STARTUP_QUERY);

  // const posts: startUpCardType[] = [
  //   {
  //     _createdAt: newDate.toISOString(),
  //     views: 55,
  //     author: { _id: 1, name: "Sarad" },
  //     _id: 1,
  //     description: "This is description",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_1280.png",
  //     category: "Robots",
  //     title: "we Robots",
  //   },
  //   {
  //     _createdAt: newDate.toISOString(),
  //     views: 55,
  //     author: { _id: 1, name: "Sarad" },
  //     _id: 2,
  //     description: "This is description",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_1280.png",
  //     category: "Robots",
  //     title: "we Robots",
  //   },
  //   {
  //     _createdAt: newDate.toISOString(),
  //     views: 55,
  //     author: { _id: 1, name: "Sarad" },
  //     _id: 3,
  //     description: "This is description",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_1280.png",
  //     category: "Robots",
  //     title: "we Robots",
  //   },
  //   {
  //     _createdAt: newDate.toISOString(),
  //     views: 55,
  //     author: { _id: 1, name: "Sarad" },
  //     _id: 4,
  //     description: "This is description",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/09/25/23/28/android-7479380_1280.png",
  //     category: "Robots",
  //     title: "we Robots",
  //   },
  // ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your StartUp, <br />
          Connect with Entreprenuers
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and get noticed in virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-bold">
          {query ? `Search results for "${query}"` : "All results"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: startUpCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">'No Posts Found'</p>
          )}
        </ul>
      </section>
    </>
  );
}
