import { ComponentPropsWithoutRef, useRef, type FormEvent } from "react";

export type FormHandle = {
  clear: () => void;
};
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...restProps }: FormProps) => {
  const form = useRef<HTMLFormElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current!.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...restProps} ref={form}>
      {children}{" "}
    </form>
  );
};
export default Form;
