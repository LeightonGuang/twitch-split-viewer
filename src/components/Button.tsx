import React from "react";

interface CustomButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  className,
  title,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`h-min cursor-pointer rounded-full bg-[#2a292e] px-3 py-2 text-sm leading-none font-semibold text-white hover:bg-[#302f35] ${className}`}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
