import Image from "next/image";
import { useRef, useEffect } from "react";
import Container from "../Container/Container";

type Props = {};

export default function HomeHero({}: Props) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <section
      id="hero-section"
      className="lg:h-hero bg-gradient-to-b  from-violet-200 to-violet-100 pt-10"
    >
      <Container height="full">
        <div className="flex h-full flex-col md:flex-row lg:px-2">
          <div className="flex flex-1 flex-col items-center justify-center gap-y-5 py-10 text-center lg:items-start  lg:gap-y-8 lg:text-left">
            <h1 className="relative z-[1] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ">
              {["Shorten URLs are", "now made easier"].map((t, i) => (
                <span
                  key={i}
                  className="relative inline-block after:absolute after:inset-x-0 after:bottom-1 after:z-[-1] after:h-4 after:w-full after:bg-violet-300 after:content-[''] last:ml-2 lg:last:ml-0"
                >
                  {t}
                </span>
              ))}
            </h1>
            <p className="max-w-[70%] font-medium leading-relaxed text-violet-500">
              Link Management Platform with all features you need in one place.
              Shorten, brand, manage and track your links the easy way.
            </p>
            <div className="rounded-full bg-white py-2 px-3 ring-2 ring-violet-300">
              <input
                ref={inputRef}
                type="url"
                className="border-none placeholder:text-sm placeholder:text-violet-500 focus:ring-0"
                placeholder="Paste long link"
              />
              <button className="rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90">
                Shorten
              </button>
            </div>
          </div>
          <div className="hidden flex-1 flex-col items-center justify-center lg:flex">
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
