import { Title } from "~/components/typography/title/title";
import { Text } from "~/components/typography/text/text";
import { ActionLink } from "~/components/buttons/action-link/action-link";
import { useState } from "react";
import { getCard, CardType } from "~/services/cards-data";
import { FeatureButton } from "~/components/buttons/feature-button/feature-button";

export const FeaturesSection: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<CardType>(CardType.BOOKMARK);

  const card = getCard(currentCard);

  return (
    <section className="pt-[8.75rem] p-container laptop:pt-20">
      <header>
        <Title className="text-center" type="section">
          Features
        </Title>
        <Text className="text-center max-w-[33.75rem] mx-auto laptop:mt-4">
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </Text>
      </header>
      <div className="mt-10 laptop:mt-[4.5rem] laptop:grid laptop:grid-cols-3 laptop:w-[45.625rem] laptop:mx-auto ">
        <FeatureButton
          onClick={() => setCurrentCard(CardType.BOOKMARK)}
          active={currentCard === CardType.BOOKMARK}
        >
          Simple Bookmarking
        </FeatureButton>
        <FeatureButton
          onClick={() => setCurrentCard(CardType.SPEEDY)}
          active={currentCard === CardType.SPEEDY}
        >
          Speedy Searching
        </FeatureButton>
        <FeatureButton
          onClick={() => setCurrentCard(CardType.SHARE)}
          active={currentCard === CardType.SHARE}
        >
          Easy Sharing
        </FeatureButton>
      </div>
      <article className="mt-[4.5rem] laptop:grid grid-cols-[1fr,27.8125rem] gap-[7.8125rem] ">
        <div className="relative pb-[11.8971061%] laptop:pb-[16.4814815%] laptop:flex justify-end">
          <div
            className={`relative z-10 
              ${currentCard === CardType.BOOKMARK ? "w-[min(100%,536px)]" : ""}
              ${currentCard === CardType.SHARE ? "w-[min(100%,478px)]" : ""}
              ${currentCard === CardType.SPEEDY ? "w-[min(100%,440px)]" : ""}`}
          >
            <div
              className={`relative w-full
                ${currentCard === CardType.BOOKMARK ? "pb-[64.5522388%]" : ""}
                ${currentCard === CardType.SHARE ? "pb-[87.0292887%] " : ""}
                ${currentCard === CardType.SPEEDY ? "pb-[86.3636364%]" : ""}`}
            >
              <img
                src={card.image.url}
                alt=""
                className="absolute top-0 l-0 w-full h-full "
              />
            </div>
          </div>
          <div
            className={`absolute w-full h-0 pb-[65.2733119%] bg-blue 
              bottom-0 z-0 ml-[-11.1821086%] rounded-r-full
              laptop:w-[118.5185185%] laptop:ml-[-30.5555556%]
              `}
          ></div>
        </div>
        <header className="mt-8 laptop:mt-[3.5625rem]">
          <Title type="section" className="text-center laptop:text-left">
            {card.title}
          </Title>
          <Text
            size="normal"
            className="text-center mw-[33.75rem] mx-auto laptop:text-left laptop:mt-4"
          >
            {card.description}
          </Text>
          <div className="mt-4 grid place-items-center laptop:mt-8 laptop:justify-start">
            <ActionLink size="sm" href={card.href} type="primary">
              More Info
            </ActionLink>
          </div>
        </header>
      </article>
    </section>
  );
};
