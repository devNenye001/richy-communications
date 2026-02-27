import React from "react";
import { motion as Motion } from "framer-motion";
import { 
  SiApple, 
  SiSamsung, 
  SiSony, 
  SiJbl 
} from "react-icons/si";

// For brands without simple React Icons, we use stylized text or SVG paths
const FeaturedBrands = () => {
  const brands = [
    { name: "Apple", icon: <SiApple /> },
    { name: "Samsung", icon: <SiSamsung className="text-4xl" /> },
    { name: "Sony", icon: <SiSony className="text-5xl" /> },
    { name: "Infinix", type: "text" },
    { name: "JBL", icon: <SiJbl className="text-3xl bg-gray-600 text-white px-1 rounded-sm" /> },
    { name: "Tecno", type: "text" },
  ];

  // We double the array to create a seamless infinite loop effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-white overflow-hidden font-['Rethink_Sans', sans-serif]">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm font-medium tracking-wide"
        >
          Featured Brands
        </Motion.p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex items-center">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white to-transparent z-10" />

        <Motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="inline-flex items-center justify-center px-8 md:px-16 text-gray-400 grayscale hover:grayscale-0 transition-all duration-300"
            >
              {brand.type === "text" ? (
                <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">
                  {brand.name}
                </span>
              ) : (
                <span className="text-4xl md:text-5xl">
                  {brand.icon}
                </span>
              )}
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default FeaturedBrands;