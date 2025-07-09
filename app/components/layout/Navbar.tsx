import type React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => (
  <nav
    className="w-full fixed top-0 left-0 z-40 flex items-center justify-between px-16 pt-10 pb-4 backdrop-blur"
    style={{
      background: 'black',
      boxShadow: '0 4px 24px 0 rgba(220,38,38,0.25)', // subtle red glow
    }}
  >
    {/* Logo */}
    <div className="flex items-center">
      <span className="text-4xl font-extrabold tracking-widest text-white select-none">
        <span className="text-red-600">S</span>LICK
      </span>
    </div>
    {/* Nav Links */}
    <div className="flex items-center space-x-14">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="uppercase tracking-widest text-white text-lg font-semibold hover:text-red-600 transition px-2 select-none"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar; 