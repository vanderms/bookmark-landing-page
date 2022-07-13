import React from "react";

interface TitleProps {
  type: "headline" | "section" | "card";
  children: React.ReactNode;
  as?: string;
  className?: string;
  id?: string;
}

const typeTable = {
  headline: "h1",
  section: "h2",
  card: "h3",
};

export const Title: React.FC<TitleProps> = ({ type, ...props }) => {
  const tag = props.as ? props.as : typeTable[type];

  if (tag === "h1") {
    return (
      <h1
        id={props.id}
        className={
          "font-sans font-medium  tracking-wide text-dark " +
          "laptop:tracking-normal  " +
          `${
            type === "headline"
              ? "text-[1.875rem] [line-height:133%] laptop:[line-height:108%] laptop:text-[3rem] "
              : ""
          }` +
          `${
            type === "section"
              ? "text-[1.5rem] laptop:text-[2rem] [line-height:3.25rem] "
              : ""
          }` +
          `${type === "card" ? "text-[1.25rem] [line-height:120%] " : ""}` +
          `${props.className ?? ""}`
        }
      >
        {props.children}
      </h1>
    );
  }

  return React.createElement(
    tag,
    {
      id: props.id,
      className:
        "font-sans font-medium  tracking-wide text-dark " +
        "laptop:tracking-normal  " +
        `${
          type === "headline"
            ? "text-[1.875rem] [line-height:133%] laptop:[line-height:108%] laptop:text-[3rem] "
            : ""
        }` +
        `${
          type === "section"
            ? "text-[1.5rem] laptop:text-[2rem] [line-height:3.25rem] "
            : ""
        }` +
        `${type === "card" ? "text-[1.25rem] [line-height:120%] " : ""}` +
        `${props.className ?? ""}`,
    },
    props.children
  );
};
