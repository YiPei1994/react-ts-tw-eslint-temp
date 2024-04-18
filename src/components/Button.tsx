import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  type: 'button';
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  type: 'link';
  className?: string;
} & ComponentPropsWithoutRef<'a'>;

const Button = (props: LinkProps | ButtonProps) => {
  const { type, className } = props;

  if (type === 'link') {
    return (
      <a
        className={cn('text-darkprimary px-6 py-3 hover:underline', className)}
        {...props}
      ></a>
    );
  }
  if (type === 'button')
    return (
      <button
        className={cn(
          'button bg-darkprimary hover:bg-primary px-6 py-3 text-white',
          className,
        )}
        {...props}
      ></button>
    );
};

export default Button;
