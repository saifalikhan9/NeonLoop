import React from "react";
import Logo2 from "../../assets/SVGs/NeonLoop.png";

const Footer = () => {
  return (
    <footer className=" w-full border-t bg-black text-white pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className=" w-20 h-20 items-center mb-4 md:mb-0">
          <img src={Logo2} alt="Company Logo" className="object-contain" />
        </div>

        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <span className="m-5 ">
            &copy; 2024 Neon Loop. <br/>All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
