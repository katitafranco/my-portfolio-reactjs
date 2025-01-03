import { useState } from "react";

const Logo = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`logo cursor-pointer hover:scale-110 transition-transform ${
        clicked ? "text-gray-300" : ""
      }`}
    >
      <h1>Katita Franco</h1>
    </div>
  );
};

export default Logo;
