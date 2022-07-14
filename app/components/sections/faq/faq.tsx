import { Text } from "~/components/typography/text/text";
import { Title } from "~/components/typography/title/title";
import { FaqCollapse } from "~/components/collapses/faq/faq-collapse";
import { ActionLink } from "~/components/buttons/action-link/action-link";

export const FaqSection: React.FC = () => {
  return (
    <section className="pt-[8.75rem] p-container laptop:pt-[9.3125rem] ">
      <Title
        type="section"
        className="text-center [line-height:125%_!important] laptop:[line-height:162%_!important] "
      >
        Frequently Asked Questions
      </Title>
      <Text className="text-center max-w-[33.75rem] mx-auto mt-4 ">
        Here are some of our FAQs. If you have any other questions you'd like answered
        please feel free to email us.
      </Text>
      <div className="mt-11 border-[rgb(36,42,69,.15)] border-t max-w-[33.75rem] mx-auto laptop:mt-14 ">
        <FaqCollapse question="What is Bookmark?">
          <Text size="sm">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies
            non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula.{" "}
          </Text>
          <Text size="sm">
            Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris
            augue massa, ultricies non ligula. Suspendisse imperdiet.
          </Text>
        </FaqCollapse>
        <FaqCollapse question="How can I request a new browser?">
          <Text size="sm">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies
            non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula.{" "}
          </Text>
          <Text size="sm">
            Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris
            augue massa, ultricies non ligula. Suspendisse imperdiet.
          </Text>
        </FaqCollapse>
        <FaqCollapse question="Is there a mobile app?">
          <Text size="sm">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies
            non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula.{" "}
          </Text>
          <Text size="sm">
            Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris
            augue massa, ultricies non ligula. Suspendisse imperdiet.
          </Text>
        </FaqCollapse>
        <FaqCollapse question="What about other Chromium browsers?">
          <Text size="sm">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies
            non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula.{" "}
          </Text>
          <Text size="sm">
            Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris
            augue massa, ultricies non ligula. Suspendisse imperdiet.
          </Text>
        </FaqCollapse>
      </div>
      <div className="grid place-items-center mt-12 laptop:mt-[3.375rem] ">
        <ActionLink type="primary" size="sm" href="/">
          More Info
        </ActionLink>
      </div>
    </section>
  );
};
