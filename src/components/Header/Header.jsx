import React from "react";
import { Menu, X, UserRound } from "lucide-react";
import logo2 from "../../assets/SVGs/NeonLoop.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Customize", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <header className="relative w-full border-b bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="inline-flex w-20 h-20 items-center space-x-2">
          <img src={logo2} alt="Logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <NavLink to="/" className="text-sm font-semibold text-white hover:text-glow">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-sm font-semibold text-white hover:text-glow">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/customize" className="text-sm font-semibold text-white hover:text-glow">
                Customize
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <div className="hidden lg:block">
            <Link to="/signIn">
              <button
                type="button"
                className="rounded-full hover:box-shadow-neon bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <UserRound />
              </button>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Link to="/signup">
              <button
                type="button"
                className="rounded-full hover:box-shadow-neon bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <Menu className="h-6 w-6 cursor-pointer text-white" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <Link to="/signIn">
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
