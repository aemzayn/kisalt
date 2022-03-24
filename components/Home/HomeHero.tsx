import Image from 'next/image'
import Container from '../Container/Container'
import HeroInput from './HeroInput'

export type HomeHeroProps = {}

export default function HomeHero({}: HomeHeroProps) {
  return (
    <section
      id="hero-section"
      className="lg:h-hero flex  items-center justify-center bg-gradient-to-b from-violet-200 to-violet-100"
    >
      <Container height="full">
        <div className="flex h-full flex-col md:flex-row lg:px-2">
          <div className="flex flex-1 flex-col items-center justify-center gap-y-5 py-10 text-center lg:items-start  lg:gap-y-8 lg:text-left">
            <h1 className="relative z-[1] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ">
              {['Shorten URLs are', 'now made easier'].map((t, i) => (
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
              Shorten, manage and track your links the easy way.
            </p>
            <HeroInput />
          </div>
          <div className="hidden flex-1 flex-col items-center justify-center lg:flex">
            <Image
              src="/images/screen/hero.png"
              alt="Person looking at phone"
              width={400}
              height={450}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
