import type React from "react";
import Navbar from "../layout/Navbar";

const Banner: React.FC = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <Navbar />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/bg.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
      </div>
      {/* Content Container */}
      <div className="relative pt-36 pb-20 md:pb-28 lg:pb-32 px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48 z-10">
        {/* Text Content */}
        <div className="max-w-2xl mb-8 md:mb-12 lg:mb-16 relative z-30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Unleash Your Car's True Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Experience unparalleled performance with 3BAR Performance. We deliver cutting-edge tuning solutions for your
            vehicle.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
            Explore Our Services
          </button>
        </div>
        {/* Car image positioned at bottom right */}
        <div className="absolute bottom-0 right-0 pointer-events-none z-20">
          <div className="relative hidden xl:block" style={{ width: '1200px', maxWidth: '95vw' }}>
            {/* Glow effects behind car */}
            <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-orange-500/10 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-red-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-red-500/30 rounded-full blur-3xl"></div>
            {/* Image container with enhanced blending effects */}
            <div className="relative overflow-hidden">
              <img
                src="/m3.jpg"
                alt="3BAR Performance Car"
                className="w-full h-auto z-10 select-none"
                style={{
                  filter: "brightness(1.1) contrast(1.1) saturate(1.2) drop-shadow(0 0 60px rgba(239, 68, 68, 0.4))",
                  maxHeight: "800px",
                  minHeight: "600px",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                  imageRendering: "auto",
                  maskImage: "radial-gradient(ellipse 85% 100% at center bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 100% at center bottom, black 50%, transparent 100%)",
                }}
                loading="eager"
                decoding="auto"
                width="1200"
                height="800"
              />
              {/* Multiple gradient overlays for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-20 pointer-events-none"></div>
              {/* Enhanced bottom fade effect */}
              <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 lg:h-80 bg-gradient-to-t from-black via-black/95 to-transparent z-25 pointer-events-none"></div>
            </div>
          </div>
          {/* Smaller car for medium screens */}
          <div className="relative hidden lg:block xl:hidden" style={{ width: '800px', maxWidth: '70vw' }}>
            {/* Glow effects behind car */}
            <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-orange-500/10 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-red-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-red-500/30 rounded-full blur-3xl"></div>
            {/* Image container with enhanced blending effects */}
            <div className="relative overflow-hidden">
              <img
                src="/m3.jpg"
                alt="3BAR Performance Car"
                className="w-full h-auto z-10 select-none"
                style={{
                  filter: "brightness(1.1) contrast(1.1) saturate(1.2) drop-shadow(0 0 60px rgba(239, 68, 68, 0.4))",
                  maxHeight: "500px",
                  minHeight: "350px",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                  imageRendering: "auto",
                  maskImage: "radial-gradient(ellipse 85% 100% at center bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 100% at center bottom, black 50%, transparent 100%)",
                }}
                loading="eager"
                decoding="auto"
                width="800"
                height="500"
              />
              {/* Multiple gradient overlays for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-20 pointer-events-none"></div>
              {/* Enhanced bottom fade effect */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/95 to-transparent z-25 pointer-events-none"></div>
            </div>
          </div>
        </div>
        {/* Car positioned below text on smaller screens */}
        <div className="lg:hidden relative w-full overflow-hidden pt-8 pb-8">
          <div className="relative mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
            {/* Glow effects behind car */}
            <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-orange-500/10 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-3xl"></div>
            {/* Image container with enhanced blending effects */}
            <div className="relative overflow-hidden">
              <img
                src="/m3.jpg"
                alt="3BAR Performance Car"
                className="w-full h-auto z-10 select-none"
                style={{
                  filter: "brightness(1.1) contrast(1.1) saturate(1.2) drop-shadow(0 0 60px rgba(239, 68, 68, 0.4))",
                  maxHeight: "350px",
                  minHeight: "200px",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                  imageRendering: "auto",
                  maskImage: "radial-gradient(ellipse 85% 100% at center bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 100% at center bottom, black 50%, transparent 100%)",
                }}
                loading="eager"
                decoding="auto"
                width="600"
                height="350"
              />
              {/* Multiple gradient overlays for seamless blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-20 pointer-events-none"></div>
              {/* Enhanced bottom fade effect */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/95 to-transparent z-25 pointer-events-none"></div>
            </div>
          </div>
        </div>
        {/* Reduced safety margin */}
        <div className="h-4 md:h-6 lg:h-8 bg-gradient-to-b from-black to-transparent"></div>
      </div>
    </div>
  );
}

export default Banner;