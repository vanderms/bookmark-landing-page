import React from "react";

interface TextProps {
  children: React.ReactNode;
  as?: string;
  className?: string;
  opacity?: 50 | 75 | 100;
  size?: "sm" | "normal";
}

export const Text: React.FC<TextProps> = (props) => {
  if (props.as) {
    return React.createElement(
      props.as,
      {
        className:
          "font-sans [font-size:15px] text-dark " +
          `${!props.opacity || props.opacity === 50 ? "opacity-50" : ""} ` +
          `${props.opacity === 75 ? "opacity-75" : ""} ` +
          `${
            props.size === "sm"
              ? "[line-height:200%] laptop:[line-height:225%] laptop:[font-size:16px] tracking-wide "
              : "[line-height:167%] laptop:text-lg "
          }` +
          `${props.className ?? ""} `,
      },
      props.children
    );
  }
  return (
    <p
      className={
        "font-sans [font-size:15px] text-dark " +
        `${!props.opacity || props.opacity === 50 ? "opacity-50" : ""} ` +
        `${props.opacity === 75 ? "opacity-75" : ""} ` +
        `${
          props.size === "sm"
            ? "[line-height:200%] laptop:[line-height:225%] laptop:[font-size:16px] tracking-wide "
            : "[line-height:167%] laptop:text-lg "
        }` +
        `${props.className ?? ""} `
      }
    >
      {props.children}
    </p>
  );
};
