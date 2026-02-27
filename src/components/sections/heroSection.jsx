import { motion as Motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full pt-24 md:pt-30 pb-16 md:pb-20 overflow-hidden bg-white font-['DM_Sans',sans-serif]">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#0A1D6E]/5 rounded-full blur-[150px]" />
      </div>

      <Motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">

          {/* Social Proof */}
          <Motion.div
            variants={itemVariants}
            className="flex items-center gap-2  py-2 rounded-full mb-6 w-fit mx-auto md:mx-0"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="customer"
                />
              ))}
            </div>
            <span className="text-sm text-gray-700">
              Over 300+ Happy Customers
            </span>
          </Motion.div>

          {/* Heading */}
          <Motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-regular text-[#0D1117] tracking-tight leading-[1.1] mb-6"
          >
            Phones. Gadgets. Repairs —
            <br className="hidden md:block" />
            <span className="text-[#0A1D6E]">
              {" "}All in One Place.
            </span>
          </Motion.h1>

          {/* Paragraph */}
          <Motion.p
            variants={itemVariants}
            className="text-gray-500 text-lg md:text-xl max-w-xl mb-8 leading-relaxed mx-auto md:mx-0"
          >
            Buy original smartphones, quality accessories, and get fast,
            reliable phone repairs you can trust.
          </Motion.p>

          {/* Button */}
          <Motion.div variants={itemVariants}>
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0A1D6E] text-white px-10 py-3 rounded-full font-regular text-md flex items-center gap-2 group mx-auto md:mx-0"
            >
              Shop Gadgets
            
            </Motion.button>
          </Motion.div>
        </div>

        {/* RIGHT SIDE */}
        <Motion.div
          className="flex-1 relative mt-12 md:mt-0"
          >
          <img
            src="/hero11.png"
            alt="Smartphone Lineup"
            className="w-full h-auto"
          />
        </Motion.div>

      </Motion.div>
    </section>
  );
};

export default HeroSection;