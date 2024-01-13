import { ChangeEvent, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type TextAreaProps = {
  name?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  classes?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({
  name,
  placeholder,
  onChange,
  label,
  error,
  classes,
  ...restProps
}: TextAreaProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <span className="text-md font-medium">{label}</span>

      <div className="flex flex-col gap-1">
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className={cn(
            'w-full min-h-[250px] p-3 text-lg outline-none border border-gray-300 rounded-md placeholder:text-gray-600 resize-none focus:border-black',
            error && 'border-red',
            classes
          )}
          {...restProps}
        />

        {error && <span className="p-1.5 text-xs text-red-500"> {error} </span>}
      </div>
    </div>
  );
};

export default TextArea;
