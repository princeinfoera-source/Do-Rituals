import React, { useState } from "react";

const Button = ({ children, onClick, href, className, type = "button" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [originX, setOriginX] = useState("center");
  const [originY, setOriginY] = useState("center");

  const baseClasses =
    "relative inline-block px-8 py-4 rounded-full text-lg font-semibold shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1";
  const textClasses = "relative z-10";

  const bhagwaStartColor = "#FF8C00"; // Darker orange
  const bhagwaEndColor = "#FFD700"; // Golden
  const initialBgColor = "white";

  const handleMouseEnter = (e) => {
    setIsHovered(true);

    const buttonRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - buttonRect.left;
    const mouseY = e.clientY - buttonRect.top;

    setOriginX(`${(mouseX / buttonRect.width) * 100}%`);
    setOriginY(`${(mouseY / buttonRect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const content = <span className={textClasses}>{children}</span>;

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to right, ${bhagwaStartColor}, ${bhagwaEndColor})`,
    borderRadius: "inherit",
    transform: isHovered ? "scale(1)" : "scale(0)",
    transformOrigin: `${originX} ${originY}`,
    transition: "transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)",
    zIndex: 0,
  };

  const textColorStyle = {
    color: isHovered ? "white" : "orange",
    transition: "color 0.3s ease-in-out",
  };

  const commonProps = {
    className: `${baseClasses} ${className}`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      backgroundColor: initialBgColor,
      ...textColorStyle,
    },
  };

  if (href) {
    return (
      <a {...commonProps} href={href}>
        <div style={overlayStyle}></div>
        {content}
      </a>
    );
  }

  return (
    <button {...commonProps} type={type} onClick={onClick}>
      <div style={overlayStyle}></div>
      {content}
    </button>
  );
};

export default Button;
