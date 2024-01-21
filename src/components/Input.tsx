import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label} </label>
      <input id={id} {...props} name={id} />
    </p>
  );
};

export default Input;
