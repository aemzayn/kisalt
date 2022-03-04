import Container from '../Container/Container'

type Props = {}

export default function HomeInfo({}: Props) {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-3xl bg-purple-700 bg-[length:800px_625px] bg-[center_right_-20rem] bg-no-repeat p-10 text-white lg:bg-laptop lg:p-20">
          <div className="flex flex-col items-start gap-5 md:max-w-lg">
            <h2 className="text-2xl font-bold md:max-w-sm lg:text-3xl">
              Long boring URLs now can be shared easily
            </h2>
            <p className="lg:text-md text-sm text-violet-200">
              Kisalt allows to reduce long links from Instagram, Facebook,
              YouTube, Twitter, Linked In and top sites on the Internet, just
              paste the long URL and click the Shorten URL button.
            </p>
            <button className="rounded-full bg-violet-50  px-5 py-2 text-violet-900 duration-75 hover:bg-opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
