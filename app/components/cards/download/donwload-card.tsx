import { Title } from "~/components/typography/title/title";
import { ActionLink } from "~/components/buttons/action-link/action-link";

interface DownloadCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  className?: string;
}

export const DownloadCard: React.FC<DownloadCardProps> = (props) => {
  return (
    <article
      className={`pt-[3.0625rem] pb-[1.5rem] flex flex-col items-center w-[min(17.5rem,100%)] 
        rounded-2xl shadow-[0px_10px_20px_-5px_rgba(73,93,207,.20012)] ${props.className}`}
    >
      <img
        src={props.image}
        alt=""
        className="w-[6.25rem] h-[6.25rem] object-center object-contain"
      />
      <Title type="card" className="mt-8 ">
        {props.title}
      </Title>
      <p className="mt-1.5 font-sans text-dark opacity-50 [font-size:.9375rem] [line-height:1.867]">
        {props.description}
      </p>
      <img
        src="/assets/bg-dots.svg"
        alt=""
        className="w-full h-1 object-center object-cover mt-8"
      />
      <ActionLink href="/" type="primary" size="md" className="mt-6">
        Add & Install Extension
      </ActionLink>
    </article>
  );
};
