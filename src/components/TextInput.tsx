import React from "react";

interface TextInputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const baseClassName =
    "w-80 h-12 bg-[#F7F7F8] border border-none p-2 px-4 focus:border-blue-500 rounded-lg w-full text-black";

  const inputClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClassName}
    />
  );
};

export default TextInput;
