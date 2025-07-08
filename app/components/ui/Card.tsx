import React from "react";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, description, children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-6 flex flex-col items-center text-center ${className}`}>
    {icon && <div className="mb-3 text-4xl text-red-600">{icon}</div>}
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    {description && <p className="text-gray-600 mb-2">{description}</p>}
    {children}
  </div>
);

export default Card; 