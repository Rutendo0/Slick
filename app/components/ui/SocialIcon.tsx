import React from "react";

interface SocialIconProps {
  type: "whatsapp" | "instagram" | "facebook" | "tiktok";
  href: string;
  className?: string;
}

// Changed JSX.Element to React.ReactNode here:
const icons: Record<string, React.ReactNode> = {
  whatsapp: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.93.547 3.73 1.497 5.26L2 22l4.89-1.47A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.29-1.26l-.3-.18-2.9.87.87-2.83-.19-.3A7.952 7.952 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.13-5.07c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35-.11-.01-.24-.01-.37-.01-.13 0-.34.05-.52.23-.18.18-.68.66-.68 1.6 0 .94.7 1.85.8 1.98.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.05 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z" />
    </svg>
  ),
  instagram: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
    </svg>
  ),
  facebook: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.002 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17.002 22 12z" />
    </svg>
  ),
  tiktok: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h1.5a.75.75 0 0 0 0-1.5h-1.5a3.75 3.75 0 1 0 3.75 3.75V8.56a6.5 6.5 0 0 0 3.5 1.02V8.08a5 5 0 0 1-3.5-1.36V2.75a.75.75 0 0 0-1.5 0z" />
    </svg>
  ),
};

const SocialIcon: React.FC<SocialIconProps> = ({ type, href, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center rounded-full p-2 hover:bg-red-100 transition ${className}`}
    aria-label={type}
  >
    {icons[type]}
  </a>
);

export default SocialIcon;
