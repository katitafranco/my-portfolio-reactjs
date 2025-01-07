// components/NavLinks.tsx
interface NavLinksProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const NavLinks = ({ isOpen, closeMenu }: NavLinksProps) => {
  return (
    <nav
      className={`nav-list absolute top-16 left-0 w-full flex flex-col items-center bg-black text-white transform ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 z-40`}
      style={{ height: isOpen ? "calc(100vh - 64px)" : "0" }} // Ajuste para el alto del menú
    >
      {["Inicio", "Proyectos", "Contacto"].map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          className="nav-link text-4xl my-4 hover:text-amber-400 transition-colors"
          onClick={() => closeMenu()}
        >
          {section}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
