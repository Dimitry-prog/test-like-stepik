import { cn } from '@/lib/utils';
import { ChangeEvent, InputHTMLAttributes } from 'react';

type InputProps = {
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  classes?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  name,
  onChange,
  type = 'text',
  label,
  placeholder = '',
  error,
  classes,
  ...restProps
}: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <span className="text-md font-medium">{label}</span>

      <div className="flex flex-col gap-1">
        <input
          name={name}
          onChange={onChange}
          type={type}
          className={cn(
            'w-full p-3 text-lg outline-none border border-gray-300 rounded-md placeholder:text-gray-600 focus:border-black',
            error && 'border-red',
            classes
          )}
          placeholder={placeholder}
          {...restProps}
        />

        {error && <span className="p-1.5 text-xs text-red-500"> {error} </span>}
      </div>
    </div>
  );
};

export default Input;
