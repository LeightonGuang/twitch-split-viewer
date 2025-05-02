import React from "react";

interface CustomButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  onClick: () => void;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  className,
  title,
  onClick,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-sm bg-[#2a292e] px-2! py-[0.3125rem]! text-[0.8125rem] font-semibold text-white hover:bg-[#302f35] ${className}`}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
