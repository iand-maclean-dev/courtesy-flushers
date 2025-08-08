import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Heading({
  as: Tag = "h2",
  className = "",
  ...rest
}: Props) {
  const map: Record<string, string> = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-semibold",
    h4: "text-lg font-medium",
    h5: "text-base font-medium",
    h6: "text-sm font-medium",
  };
  return <Tag className={`${map[Tag]} ${className}`.trim()} {...rest} />;
}
