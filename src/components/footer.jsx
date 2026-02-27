import React from "react";
import { motion as Motion } from "framer-motion";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTiktok, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { name: "Why Choose Us", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { name: "Phones", href: "#" },
        { name: "Gadgets", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Smartwatches", href: "#" },
      ],
    },
    {
      title: "REPAIRS",
      links: [
        { name: "Screen Replacement", href: "#" },
        { name: "Battery Replacement", href: "#" },
        { name: "Charging Port Fix", href: "#" },
        { name: "Software Issues", href: "#" },
        { name: "Water Damage", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
    { name: "Facebook", icon: <FaFacebookF />, href: "#" },
    { name: "TikTok", icon: <FaTiktok />, href: "#" },
  ];

  const contactLinks = [
    { name: "Phone", icon: <FaPhoneAlt />, href: "tel:+2348130271778" },
    { name: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/2348130271778" },
    { name: "Location", icon: <FaMapMarkerAlt />, href: "#" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 font-['DM_Sans',sans-serif]">
      <Motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Main Links Sections */}
          {footerSections.map((section) => (
            <Motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-gray-900 font-bold text-xs tracking-widest mb-6 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 hover:text-[#0A1D6E] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}

          {/* Follow Us Section */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-gray-900 font-bold text-xs tracking-widest mb-6 uppercase">
              FOLLOW US
            </h3>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="flex items-center gap-2 text-gray-500 hover:text-[#0A1D6E] transition-colors text-sm">
                    <span className="text-base">{social.icon}</span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Support Section */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-gray-900 font-bold text-xs tracking-widest mb-6 uppercase">
              SUPPORT
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#0A1D6E] transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0A1D6E] transition-colors text-sm font-medium">Book a Repair</a></li>
            </ul>
          </Motion.div>

          {/* Contact Section */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-gray-900 font-bold text-xs tracking-widest mb-6 uppercase">
              CONTACT
            </h3>
            <ul className="space-y-4">
              {contactLinks.map((contact) => (
                <li key={contact.name}>
                  <a href={contact.href} className="flex items-center gap-2 text-gray-500 hover:text-[#0A1D6E] transition-colors text-sm">
                    <span className="text-base">{contact.icon}</span>
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>

        </div>

        {/* Bottom Bar */}
        <Motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-100 flex flex-col items-center justify-center space-y-4"
        >
          <p className="text-gray-400 text-sm text-center">
            Copyright © {currentYear} 7G Upgraded Richy Communications.
          </p>
        </Motion.div>
      </Motion.div>
    </footer>
  );
};

export default Footer;