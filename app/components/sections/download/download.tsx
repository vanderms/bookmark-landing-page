import { Text } from "~/components/typography/text/text";
import { Title } from "~/components/typography/title/title";
import { DownloadCard } from "~/components/cards/download/donwload-card";

export const DownloadSection: React.FC = () => {
  return (
    <section className="pt-[4.8125rem] p-container laptop:pt-[9.3125rem]">
      <Title type="section" className="text-center">
        Download the extension
      </Title>
      <Text className="text-center max-w-[33.75rem] mx-auto laptop:mt-4">
        We've got more browsers in the pipeline. Please do let us know if you've got a
        favourite you'd like us to prioritize.
      </Text>
      <div className="mt-10 flex flex-col gap-10 laptop:mt-12 laptop:flex-row laptop:items-center laptop:gap-9 laptop:justify-center">
        <DownloadCard
          image="/assets/logo-chrome.svg"
          href="/"
          title="Add to Chrome"
          description="Minimum version 62"
          className="mx-auto laptop:mx-0"
        />
        <DownloadCard
          image="/assets/logo-firefox.svg"
          href="/"
          title="Add to Firefox"
          description="Minimum version 55"
          className="mx-auto laptop:mx-0 laptop:mt-10"
        />
        <DownloadCard
          image="/assets/logo-opera.svg"
          href="/"
          title="Add to Opera"
          description="Minimum version 46"
          className="mx-auto laptop:mx-0 laptop:mt-20 "
        />
      </div>
    </section>
  );
};
