import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/SVGs/NeonLoop.png";

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      to={href}
      className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start">
            <img src={Logo2} alt="Neon Loop Logo" className="w-20 h-20 object-contain mb-4" />
            <span className="text-sm text-gray-400 text-center sm:text-left">
              &copy; {currentYear} Neon Loop. All rights reserved.
            </span>
          </div>

          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-6 sm:space-x-8">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;