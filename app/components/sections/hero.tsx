import { Link } from "@remix-run/react";

export const HeroSection: React.FC = () => {
  return (
    <section className="p-container mt-20 grid grid-cols-1 gap-12">
      <div className="mb-[18%]">
        <div className="relative">
          <div className="w-full pb-[66.7731629%]">
            <img
              className="absolute z-10 w-full h-full rounded-2xl overflow-hidden"
              src="/assets/illustration-hero.svg"
              alt=""
            />
          </div>
          <div
            className={
              "absolute w-full [padding-bottom:64.85623%] bg-blue rounded-l-full mt-[-48.25%] ml-[13%] " +
              "laptop:mt-[-37.65%] laptop:ml-[27%]"
            }
          ></div>
        </div>
      </div>
      <header>
        <h1 className="font-sans font-medium text-3xl text-center tracking-wide text-dark [line-height:133%]">
          A Simple Bookmark Manager
        </h1>
        <p className="mt-4 font-sans [font-size:15px] text-center text-dark [line-height:167%] opacity-50">
          A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-8 flex items-center justify-between">
          <Link to="/">Get it on Chrome</Link>
          <Link to="/">Get it on Firefox</Link>
        </div>
      </header>
    </section>
  );
};
