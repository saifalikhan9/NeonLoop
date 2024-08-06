import logo2 from "../../assets/SVGs/NeonLoop.png";
import UserContext from "../../Contexts/UserContext";
import { useContext, useState } from "react";
import { Button } from "@mui/material";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  const logoutHandle = async (e) => {
    e.preventDefault();
    await logout();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full ">
      <header className="relative w-full border-b bg-black text-white pb-4">
        <div className=" mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="  max-w-16 h-auto">
            <Link to={"/"}>
              <img src={logo2} alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <Link
                  to={"/"}
                  className="text-sm font-semibold text-white hover:text-gray-300"
                >
                  HOME
                </Link>{" "}
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-sm font-semibold text-white hover:text-gray-300"
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  to={"/customize"}
                  className="text-sm font-semibold text-white hover:text-gray-300"
                >
                  CUSTOMIZE
                </Link>
              </li>
            </ul>
          </div>

          <div className=" pt-1 absolute right-11 lg:hidden">
            <Menu
              onClick={toggleMenu}
              className=" absolute  h-6 w-6 cursor-pointer  "
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold font-Neoneon text-glow text-green-300 text-3xl">Neon Loop</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className=" h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full mt-6">
                    <nav className="">
                      <ul className="grid gap-y-4">
                        <li>
                          <Link
                            to={"/"}
                            className="text-sm font-semibold text-white hover:text-gray-300"
                          >
                            HOME
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/contact"}
                            className="text-sm font-semibold text-white hover:text-gray-300"
                          >
                            CONTACT US
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/customize"}
                            className="text-sm font-semibold text-white hover:text-gray-300"
                          >
                            CUSTOMIZE
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className=" mt-5">
                  <Button onClick={logoutHandle} variant="contained">
                    Log Out
                  </Button>
                </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-9 mr-5  lg:m-0 lg:p-0">
            {user ? (
              <div className="inline-flex   ">
                <div className=" pb-1 mr-5 lg:m-0 lg:p-0 " >
                  <Link to={"/cart"}>
                    <ShoppingCart />
                  </Link>
                </div>
                <div className=" lg:block hidden mx-4">
                  <Button onClick={logoutHandle} variant="contained">
                    Log Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="inline-flex space-x-5 lg:block">
                <button type="button">
                  <Link to={"/signIn"}>
                    <Person2OutlinedIcon />
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
