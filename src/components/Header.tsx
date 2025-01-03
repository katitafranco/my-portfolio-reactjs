import { useState } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 transition-all duration-500">
      <div className="relative flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#home">
            <span className="text-red-700">K</span>atita{" "}
            <span className="text-red-700">F</span>ranco
          </a>
        </div>

        {/* Menu Hamburger */}
        <div
          className={`menu flex flex-col justify-evenly w-10 h-10 cursor-pointer ${
            isOpen ? "change" : ""
          }`}
          onClick={toggleMenu}
        >
          <div className="line line-1 bg-white transition-transform"></div>
          <div className="line line-2 bg-white"></div>
          <div className="line line-3 bg-white transition-transform"></div>
        </div>
      </div>

      {/* Nav Links */}
      <NavLinks isOpen={isOpen} />
    </header>
  );
};

export default Header;
