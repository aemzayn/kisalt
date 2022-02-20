import Image from "next/image";
import { useMemo } from "react";
import Container from "./Container";

type Props = {};

export default function Hero({}: Props) {
  const headerHeight = useMemo(() => {
    const header = document.getElementById("main-header");
    return header.offsetHeight || 104;
  }, []);

  return (
    <section
      id="hero-section"
      style={{
        // full height - nav
        height: `calc(100vh - ${headerHeight}px)`,
      }}
      className="bg-gradient-to-b from-violet-200 to-violet-100"
    >
      <Container height="full">
        <div className="flex h-full">
          <div className="flex-1 flex flex-col items-start  justify-center gap-y-8">
            <h1 className="text-5xl relative font-bold leading-tight z-[1]">
              {["Shorten URLs are", "now made easier"].map((t, i) => (
                <span
                  key={i}
                  className="inline-block relative after:content-[''] after:w-full after:h-4 after:bg-violet-300 after:absolute after:bottom-1 after:inset-x-0 after:z-[-1]"
                >
                  {t}
                </span>
              ))}
            </h1>
            <p className="text-violet-500 font-medium max-w-[70%] leading-relaxed">
              Link Management Platform with all features you need in one place.
              Shorten, brand, manage and track your links the easy way.
            </p>
            <div className="bg-white py-2 px-3 rounded-full ring-2 ring-violet-300">
              <input
                type="url"
                className="border-none placeholder:text-sm placeholder:text-violet-500 focus:ring-0"
                placeholder="Paste long link"
              />
              <button className="bg-violet-800 px-5 py-2 text-violet-50 rounded-full hover:bg-opacity-90 duration-75">
                Shorten
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <Image
              src="/assets/hero.png"
              alt="Person looking at phone"
              width={400}
              height={450}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
