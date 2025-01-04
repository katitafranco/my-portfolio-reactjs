// components/Header.tsx
import { useState } from "react";
import Logo from "./Logo"; // Importa el componente Logo
import HamburgerMenu from "./HamburgerMenu"; // Importa el componente HamburgerMenu
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 transition-all duration-500">
      <div className="relative flex justify-between items-center p-4">
        {/* Logo */}
        <Logo /> {/* Usamos el componente Logo */}
        {/* Menu Hamburger */}
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />{" "}
        {/* Usamos el componente HamburgerMenu */}
      </div>

      {/* Nav Links */}
      <NavLinks isOpen={isOpen} />
    </header>
  );
};

export default Header;
