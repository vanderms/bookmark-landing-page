import { Link } from "@remix-run/react";

interface ActionLinkProps {
  type: "primary" | "secondary";
  size: "sm" | "md";
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = ({ type, size, ...props }) => {
  return (
    <Link
      to={props.href}
      className={`text-sm font-medium tracking-wide border-2 shadow-[0px_8px_8px_-4px_rgba(73,93,207,.20012)]
        rounded-md py-3
        ${
          type === "primary"
            ? "text-white bg-blue border-blue hover:text-blue hover:bg-white"
            : "text-[#242A45BF] bg-[#F7F7F7] border-[#F7F7F7] hover:border-dark"
        }
        ${size === "sm" ? "px-3.5 laptop:px-[1.375rem]" : "px-[2.0625rem]"}
        ${props.className}
    `}
    >
      {props.children}
    </Link>
  );
};
