import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  classes?: string;
};

const Button = ({ href, type, children, onClick, isDisabled = false, classes }: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          'px-4 py-3 w-full flex items-center justify-center md:w-[250px] bg-black/50 rounded-full text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500',
          classes
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        'px-4 py-3 w-full flex items-center justify-center md:w-[250px] bg-black/50 rounded-full text-white hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500',
        classes
      )}
    >
      {children}
    </button>
  );
};

export default Button;
