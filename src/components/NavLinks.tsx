interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = ({ isOpen }: NavLinksProps) => {
  return (
    <nav
      className={`nav-list absolute top-20 left-0 w-full flex flex-col items-center bg-black text-white transform ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500`}
    >
      {["Home", "Projects", "Contact"].map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          className="nav-link text-4xl my-4 hover:text-red-700 transition-colors"
        >
          {section}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
