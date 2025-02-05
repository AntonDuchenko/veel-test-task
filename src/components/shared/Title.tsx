import classNames from "classnames";
import { createElement } from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  title: string;
}

export const Title: React.FC<TitleProps> = ({ type, title, className }) => {
  const mapTagBySize = {
    xs: "h6",
    sm: "h5",
    md: "h4",
    lg: "h3",
    xl: "h3",
    "2xl": "h2",
    "3xl": "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-lg font-normal",
    sm: "text-lg font-bold",
    md: "text-2xl font-bold",
    lg: "text-3xl font-bold",
    xl: "text-[32px] font-bold",
    "2xl": "text-4xl font-bold",
    "3xl": "text-[42px] font-bold",
  } as const;

  return createElement(mapTagBySize[type], {
    className: classNames(mapClassNameBySize[type], className),
    children: title,
  });
};
