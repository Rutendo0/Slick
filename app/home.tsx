"use client";
import Banner from "./components/sections/Banner";
import CompanyOverview from "./components/sections/CompanyOverview";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center my-8">
    <div className="w-2/3 h-4 bg-gradient-to-r from-transparent via-red-50 to-transparent rounded-full opacity-50" />
  </div>
);

export default function HomePage() {
  return (
    <>
      <Banner />
      <div id="services">
        <Services />
      </div>
      <SectionDivider />
      <div id="about">
        <CompanyOverview />
      </div>
      <SectionDivider />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
