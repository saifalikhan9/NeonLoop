import React from 'react';
import Logo2 from '../../assets/SVGs/NeonLoop.png';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black mt-auto">
      <hr className="border-white" />
      <div className="container mx-auto max-w-7xl px-4 py-2">
        <div className="my-8 flex flex-col md:flex-row items-center justify-between">
          <div className="inline-flex w-20 h-20 items-center mb-4 md:mb-0">
            <img src={Logo2} alt="Company Logo" className="object-contain" />
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><a href="#" className="text-sm font-semibold text-white hover:underline">Home</a></li>
              <li><a href="#" className="text-sm font-semibold text-white hover:underline">About</a></li>
              <li><a href="#" className="text-sm font-semibold text-white hover:underline">Services</a></li>
              <li><a href="#" className="text-sm font-semibold text-white hover:underline">Contact</a></li>
            </ul>
          </nav>
          <div className="text-sm font-semibold text-white text-center md:text-right">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
