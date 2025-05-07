import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled
          ? "opacity-100 transform rotate-x-0"
          : "opacity-0 rotate-x-[-100deg]"
      } fixed top-0 w-full z-50 flex justify-between items-center bg-gray-200 p-5 transition-all duration-800 ease-in-out shadow-lg`}
    >
      <div>
        <img src="images/logo.png" alt="Logo" width={50} height={50} />
      </div>

      <nav className="text-gray-700 md:flex gap-10 hidden">
        <a
          href="#home"
          className="transition duration-100 ease-in-out hover:text-emerald-500 hover:scale-110"
        >
          Home
        </a>
        <a
          href="#aboutSection"
          className="transition duration-100 ease-in-out hover:text-emerald-500 hover:scale-110"
        >
          About
        </a>
        <a
          href="#skill"
          className="transition duration-100 ease-in-out hover:text-emerald-500 hover:scale-110"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="transition duration-100 ease-in-out hover:text-emerald-500 hover:scale-110"
        >
          Projects
        </a>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-0 bg-gray-200 p-4 md:hidden rounded-lg shadow-lg">
          <a
            href="#home"
            className="block py-2 px-4 text-gray-700 hover:text-emerald-500 hover:scale-110"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-gray-700 hover:text-emerald-500 hover:scale-110"
          >
            About
          </a>
          <a
            href="#skill"
            className="block py-2 px-4 text-gray-700 hover:text-emerald-500 hover:scale-110"
          >
            Skills
          </a>
          <a
            href="#project"
            className="block py-2 px-4 text-gray-700 hover:text-emerald-500 hover:scale-110"
          >
            Projects
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
