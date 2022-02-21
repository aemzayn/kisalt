import Container from "./Container";

type Props = {};

export default function HomeInfo({}: Props) {
  return (
    <section className="py-10">
      <Container>
        <div className="lg:bg-laptop bg-no-repeat bg-[center_right_-20rem] bg-[length:800px_625px] text-white bg-purple-700 p-10 lg:p-20 rounded-3xl">
          <div className="flex flex-col items-start gap-5 md:max-w-lg">
            <h2 className="text-2xl lg:text-3xl md:max-w-sm font-bold">
              Long boring URLs now can be shared easily
            </h2>
            <p className="text-sm lg:text-md text-violet-200">
              Kisalt allows to reduce long links from Instagram, Facebook,
              YouTube, Twitter, Linked In and top sites on the Internet, just
              paste the long URL and click the Shorten URL button.
            </p>
            <button className="bg-violet-50 text-violet-900  px-5 py-2 rounded-full hover:bg-opacity-90 duration-75">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
