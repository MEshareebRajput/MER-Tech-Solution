import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex flex-col items-center gap-4">
      <div className="flex gap-6">
        <a
          href="/coming-soon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="/coming-soon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="/coming-soon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://wa.me/923282300151"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
