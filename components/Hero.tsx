import Image from "next/image";
import { useRef, useEffect } from "react";
import Container from "./Container";

type Props = {};

export default function Hero({}: Props) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <section
      id="hero-section"
      className="lg:h-hero bg-gradient-to-b  from-violet-200 to-violet-100"
    >
      <Container height="full">
        <div className="flex flex-col md:flex-row lg:px-2 h-full">
          <div className="flex-1 py-10 flex flex-col items-center lg:items-start text-center lg:text-left justify-center  gap-y-5 lg:gap-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl relative font-bold leading-tight z-[1] ">
              {["Shorten URLs are", "now made easier"].map((t, i) => (
                <span
                  key={i}
                  className="inline-block relative after:content-[''] after:w-full after:h-4 after:bg-violet-300 after:absolute after:bottom-1 after:inset-x-0 after:z-[-1] last:ml-2 lg:last:ml-0"
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
                ref={inputRef}
                type="url"
                className="border-none placeholder:text-sm placeholder:text-violet-500 focus:ring-0"
                placeholder="Paste long link"
              />
              <button className="bg-violet-800 px-5 py-2 text-violet-50 rounded-full hover:bg-opacity-90 duration-75">
                Shorten
              </button>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 flex-col items-center justify-center">
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
