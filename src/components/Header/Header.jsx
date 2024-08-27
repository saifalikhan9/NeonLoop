import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu, X, ShoppingCart } from "lucide-react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import UserContext from "../../Contexts/UserContext";
import logo2 from "../../assets/SVGs/NeonLoop.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  const logoutHandle = async (e) => {
    e.preventDefault();
    await logout();
    setIsMenuOpen(false); // Close the menu after logout
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/contact", label: "CONTACT US" },
    { to: "/customize", label: "CUSTOMIZE" },
  ];

  return (
    <header className="w-full border-b bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link to="/" className="max-w-16">
          <img src={logo2} alt="Neon Loop Logo" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm font-semibold hover:text-gray-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/cart">
                <ShoppingCart />
              </Link>
              {/* Logout button visible only on larger screens */}
              <Button
                onClick={logoutHandle}
                variant="contained"
                className="hidden lg:block"
              >
                Log Out
              </Button>
              <button onClick={toggleMenu} className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </>
          ) : (
            <Link to="/signIn">
              <Person2OutlinedIcon />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 lg:hidden">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold font-Neoneon text-glow text-green-300 text-3xl">
                Neon Loop
              </span>
              <button onClick={toggleMenu}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex-grow">
              <ul className="space-y-4">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm font-semibold hover:text-gray-300"
                      onClick={toggleMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                {user && (
                  <li>
                    <Button
                      onClick={logoutHandle}
                      variant="contained"
                      className="w-full"
                    >
                      Log Out
                    </Button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;