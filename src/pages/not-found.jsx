import React from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 font-['DM_Sans',sans-serif]">
      <div className="text-center max-w-md w-full">
        
        {/* Animated Main Heading */}
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semi-bold text-[#0A1D6E] mb-4"
        >
          Page not found!
        </Motion.h1>

        {/* Animated Subtext */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 text-sm md:text-base leading-relaxed mb-10"
        >
          The page you're looking for does not exist or has been moved.
        </Motion.p>

        {/* Animated Button */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <a href="/">
            <Motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#081655" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0A1D6E] text-white px-10 py-3.5 rounded-full font-regular text-sm md:text-base flex items-center justify-center gap-2 mx-auto shadow-xl shadow-blue-900/20 transition-all"
            >
            
              Go Home
            </Motion.button>
          </a>
        </Motion.div>

        {/* Subtle Background Animation Element */}
        <Motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl"
        />
      </div>
    </div>
  );
};

export default NotFound;