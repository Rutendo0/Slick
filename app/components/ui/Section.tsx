import React from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = "", bg = "" }) => (
  <section className={`py-12 px-4 ${bg} ${className}`}>
    <div className="max-w-5xl mx-auto">
      {title && <h2 className="text-3xl font-bold mb-2 text-gray-900">{title}</h2>}
      {subtitle && <p className="text-lg text-gray-600 mb-6">{subtitle}</p>}
      {children}
    </div>
  </section>
);

export default Section; 