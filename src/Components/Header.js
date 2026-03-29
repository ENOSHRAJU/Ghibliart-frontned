import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

function Header({ isCreatePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "Features", "Samples", "About"];

  return (
    <header className="
      sticky top-4 z-50
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-2xl px-6 py-4
      shadow-[0_4px_20px_rgba(255,120,150,0.2)]
    ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <HiOutlineSparkles className="w-8 h-8 text-rose-500" />
          <h1 className="
            text-2xl font-bold
            bg-gradient-to-r from-rose-400 via-pink-500 to-orange-500
            bg-clip-text text-transparent
          ">
            GhibliCraft
          </h1>
        </Link>

        {/* Desktop Navigation */}
        {!isCreatePage && (
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((label) => (
                <li key={label} className="relative group">
                  <ScrollLink
                    to={label.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-white/90 font-medium hover:text-white transition-colors"
                  >
                    {label}
                  </ScrollLink>

                  {/* Animated underline on hover */}
                  <span className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-rose-400 to-orange-400
                    transition-all duration-300
                    group-hover:w-full
                  "></span>
                </li>
              ))}

              {/* Create Button */}
              <li className="relative group">
                <Link
                  to="/create"
                  className="text-white/90 font-medium hover:text-white transition-colors"
                >
                  Create
                </Link>

                <span className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-gradient-to-r from-rose-400 to-orange-400
                  transition-all duration-300
                  group-hover:w-full
                "></span>
              </li>
            </ul>
          </nav>
        )}

        {/* Create Page Header */}
        {isCreatePage && (
          <div className="hidden md:block relative group">
            <button
              className="flex items-center gap-2 text-white/90 font-medium hover:text-white transition-colors"
              onClick={() => navigate("/")}
            >
             ← Back to Home
            </button>

            <span className="
              absolute left-0 -bottom-1 h-[2px] w-0
              bg-gradient-to-r from-rose-400 to-orange-400
              transition-all duration-300
              group-hover:w-full
            "></span>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="
          md:hidden mt-6 rounded-xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
        ">
          <ul className="flex flex-col divide-y divide-white/10">
            {!isCreatePage ? (
              <>
                {navItems.map((label) => (
                  <li key={label}>
                    <ScrollLink
                      to={label.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="block px-6 py-4 text-white/90 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </ScrollLink>
                  </li>
                ))}
                <li>
                  <Link
                    to="/create"
                    className="block px-6 py-4 text-white/90 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Create
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="flex items-center gap-2 px-6 py-4 text-white/90 hover:text-white w-full text-left"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/");
                  }}
                >
                  ← Back to Home
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
