// components/HamburgerMenu.tsx
const HamburgerMenu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      className={`menu flex flex-col justify-evenly w-10 h-10 cursor-pointer z-50 ${
        isOpen ? "change" : ""
      }`}
      onClick={toggleMenu}
    >
      <div className="line line-1 bg-white transition-transform"></div>
      <div className="line line-2 bg-white"></div>
      <div className="line line-3 bg-white transition-transform"></div>
    </div>
  );
};

export default HamburgerMenu;
