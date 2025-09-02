import React from "react";

const Button = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      {...props}
      className={`h-min cursor-pointer rounded-full bg-[#2a292e] px-3 py-2 text-sm leading-none font-semibold text-white hover:bg-[#302f35] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
