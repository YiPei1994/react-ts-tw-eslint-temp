import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  type: "button";
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  type: "link";
} & ComponentPropsWithoutRef<"a">;

const Button = (props: LinkProps | ButtonProps) => {
  const { type } = props;
  if (type === "link") {
    return <a className="button" {...props}></a>;
  }
  if (type === "button") return <button className="button" {...props}></button>;
};

export default Button;
