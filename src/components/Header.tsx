// components/Header.tsx
import { useState } from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 transition-all duration-500">
      <div className="relative flex justify-between items-center p-4 z-50">
        {/* Logo */}
        <Logo />
        {/* Menu Hamburger */}
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Nav Links */}
      <NavLinks isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
