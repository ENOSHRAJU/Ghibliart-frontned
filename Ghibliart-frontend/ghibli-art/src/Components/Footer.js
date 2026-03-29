import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const links = ["Home", "Features", "Samples", "About"];

  return (
    <footer
      className="px-6 md:px-10 py-16
                 text-gray-200
                 border-t border-white/20"
    >
      {/* Top section */}
      <div
        className="max-w-6xl mx-auto
                   grid gap-10
                   md:grid-cols-2"
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
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
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transform your photos into magical, hand-crafted
            Ghibli-style artwork using AI.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Create</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">How it works</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {links.map((label) => (
                <li key={label} className="hover:text-white cursor-pointer">
                  <ScrollLink
                    to={label.toLowerCase()}
                    smooth={true}
                    duration={500}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
              <li className="hover:text-white cursor-pointer">
                <Link
                  to="/create"
                  className="hover:text-white cursor-pointer"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                <a
                  href="https://github.com/ENOSHRAJU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a
                  href="https://linkedin.com/in/enoshraju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a
                  href="https://enoshraju.github.io/portfolio-react/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom strip */}
      <div
        className="mt-16 pt-6
                   border-t border-white/10
                   text-center text-xs text-gray-500"
      >
        © {new Date().getFullYear()} GhibliCraft. Created by Enosh Kaligithi.
      </div>
    </footer>
  );
}

export default Footer;
