import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Slick Logistics - Modern Logistics Solutions",
  description:
    "Slick Logistics: Modern, reliable logistics provider. Vehicle sourcing, shipping, customs clearance, and expert support.",
  keywords: "logistics, vehicle import, shipping, customs clearance, Slick Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true} className="bg-white text-gray-900">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
