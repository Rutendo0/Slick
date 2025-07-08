import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-semibold transition bg-red-600 hover:bg-red-700 text-white shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 