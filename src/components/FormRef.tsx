import {
  ComponentPropsWithoutRef,
  useRef,
  type FormEvent,
  useImperativeHandle,
  forwardRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...restProps }: FormProps, ref) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("clearing");
          form.current?.reset();
        },
      };
    });

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
  }
);

export default Form;
