import { ActionLink } from "../../buttons/action-link/action-link";
import { Text } from "~/components/typography/text/text";

export const HeroSection: React.FC = () => {
  return (
    <section className="p-container mt-20 grid grid-cols-1 gap-12 laptop:grid-cols-[33.75rem_1fr] laptop:gap-[65px] laptop:mt-[6.75rem] ">
      <div className="mb-[18%] laptop:order-2 laptop:w-[114.6534653%] laptop:mb-[19.8019802%]">
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
              "laptop:pb-[60.7944732%]   laptop:mt-[-43.5233161%] laptop:ml-[26.7702936%]"
            }
          ></div>
        </div>
      </div>
      <header className="laptop:order-1 laptop:mt-[4.4375rem] ">
        <h1
          className={
            "font-sans font-medium text-3xl text-center tracking-wide text-dark [line-height:133%] " +
            "laptop:text-5xl laptop:text-left laptop:tracking-normal laptop:[line-height:108%] "
          }
        >
          A Simple Bookmark Manager
        </h1>
        <Text className="mt-4 laptop:mt-6 text-center laptop:text-left ">
          A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.
        </Text>
        <div className="mt-8 flex items-center justify-center gap-3 laptop:justify-start laptop:gap-4">
          <ActionLink size="sm" type="primary" href="/">
            Get it on Chrome
          </ActionLink>
          <ActionLink size="sm" type="secondary" href="/">
            Get it on Firefox
          </ActionLink>
        </div>
      </header>
    </section>
  );
};
