import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineClock,
} from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const shopItems = [
    { name: "Phones", icon: <HiOutlineDevicePhoneMobile /> },
    { name: "Gadgets", icon: <HiOutlineCpuChip /> },
    { name: "Accessories", icon: <HiOutlineSparkles /> },
   { name: "Smartwatches", icon: <HiOutlineClock /> },

  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Phone Repairs", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center gap-2">
            <img src="/logo.svg" alt="" srcset="" />
            <span className="text-[#0A1D6E] font-medium text-sm md:text-base tracking-tight leading-tight">
              7G Upgraded Richy <br className="md:hidden" /> Communications
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 font-semi-bold">
            <a
              href="#"
              className="text-gray-500 hover:text-[#0A1D6E] transition-colors font-medium"
            >
              Home
            </a>

            {/* Shop Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-gray-500 group-hover:text-[#0A1D6E] transition-colors font-regular">
                Shop{" "}
                <FaChevronDown
                  className={`text-[10px] transition-transform duration-300 ${isShopOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isShopOpen && (
                  <Motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-0 w-52 bg-white shadow-2xl rounded-xl py-3 border border-gray-100 mt-2"
                  >
                    {shopItems.map((item, i) => (
                      <Motion.a
                        key={item.name}
                        href="#"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 px-5 py-3 text-gray-500 hover:bg-blue-50 hover:text-[#0A1D6E] transition-all"
                      >
                        <span className="text-xl text-[#0A1D6E]/70">
                          {item.icon}
                        </span>
                        <span className="text-sm font-regular">{item.name}</span>
                      </Motion.a>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-[#0A1D6E] transition-colors font-regular"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#081655" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0A1D6E] text-white px-8 py-3 rounded-full font-regular shadow-lg transition-all"
            >
              Book Repair
            </Motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A1D6E] text-2xl"
            >
              {isOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 bg-white z-40 lg:hidden px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              <a
                href="#"
                className="text-xl font-bold text-gray-900 border-b pb-2"
              >
                Home
              </a>

              <div>
                <button
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="flex justify-between w-full text-xl font-bold text-gray-900"
                >
                  Shop{" "}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${isShopOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isShopOpen && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-4 space-y-4 border-l-2 border-gray-100 overflow-hidden"
                    >
                      {shopItems.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          className="flex items-center gap-3 text-gray-500 font-medium"
                        >
                          {item.icon} {item.name}
                        </a>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-gray-900 border-b pb-2"
                >
                  {link.name}
                </a>
              ))}

              <Motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#0A1D6E] text-white py-4 rounded-xl mt-4 font-regular text-md"
              >
                Book Repair
              </Motion.button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
