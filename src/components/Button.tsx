import React from "react";

interface ButtonProps {
  text: string;
  iconSrc: string;
}

const Button: React.FC<ButtonProps> = ({ text, iconSrc }) => {
  return (
    <a
      href="#"
      className="bg-[#F7F7F8] text-[#030229] flex text-sm  items-center p-2 p-3 rounded-lg w-full"
    >
      <div className="mx-auto flex">
        <img src={iconSrc} alt={text} className="w-18 h-18 mr-2" />
        <span className="text-center">{text}</span>
      </div>
    </a>
  );
};

export default Button;
