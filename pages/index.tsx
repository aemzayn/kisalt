import Head from "next/head";
import {
  SearchIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import Layout from "../components/Layout";
import { useRef, useState } from "react";

function HomePage() {
  const [searchLoading, setSearchLoading] = useState(false);
  const [links, setLinks] = useState(["github", "aemzayn"]);
  const [query, setQuery] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const inputRef = useRef(null);

  const handleSearchAvailable = () => {
    setSearchLoading(true);
    try {
      if (!query) {
        throw Error("Query is empty");
      }
      if (links.includes(query)) {
        throw Error("Not available");
      }
      setIsAvailable(true);
    } catch (error) {
      setIsAvailable(false);
    } finally {
      setSearchLoading(false);
    }
  };

  const shorten = () => {
    setLinks((allLinks) => [...allLinks, query]);
    setQuery("");
    setIsAvailable(null);
    inputRef.current.value = "";
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col">
        {/* Search */}
        <div className="flex w-full py-2 pl-4 pr-2 items-center bg-blue-50 rounded-lg">
          <SearchIcon className="h-6 w-6 text-blue-500" />
          <input
            ref={inputRef}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent placeholder:text-black mx-2 focus-within:border-0 focus-visible:border-0"
            placeholder="Find available slug..."
          />
          <button
            className="py-3 px-6 bg-blue-500 rounded-md text-white hover:bg-opacity-80 duration-100 disabled:bg-opacity-80"
            disabled={searchLoading}
            onClick={handleSearchAvailable}
          >
            {!searchLoading ? "Search" : "Loading..."}
          </button>
        </div>

        {isAvailable !== null && (
          <div className="flex flex-col w-full mt-4 px-2 py-10 rounded-lg bg-blue-50 gap-6 items-center">
            <p className="text-center">
              <span className="text-5xl block mb-2">/{query}</span>
              {isAvailable ? (
                <>
                  is availabe{" "}
                  <CheckCircleIcon className="h-4 w-4 inline-block text-green-500" />
                </>
              ) : (
                <>
                  is not availabe{" "}
                  <XCircleIcon className="h-4 w-4 inline-block text-red-500" />
                </>
              )}
            </p>
            <button
              onClick={shorten}
              className="py-4 px-6 text-white bg-blue-500 rounded-md text-lg hover:bg-opacity-80 duration-100"
            >
              Kisalt now!
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
