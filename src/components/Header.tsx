// Header.tsx
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <Logo />
        <div className="flex items-center space-x-8">
          <div
            className="flex flex-col justify-center items-center cursor-pointer space-y-1"
            onClick={toggleNavbar}
          >
            <div className="w-6 h-1 bg-white transition-all transform"></div>
            <div className="w-6 h-1 bg-white transition-all transform"></div>
            <div className="w-6 h-1 bg-white transition-all transform"></div>
          </div>

          {/* Menu */}
          <nav
            className={`absolute top-0 right-0 w-48 h-screen bg-black transition-all transform ${
              navbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center pt-20 space-y-8">
              <a href="#home" className="text-white text-3xl">
                Home
              </a>
              <a href="#projects" className="text-white text-3xl">
                Projects
              </a>
              <a href="#contact" className="text-white text-3xl">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
