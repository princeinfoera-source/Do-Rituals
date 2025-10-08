import React, { useState, useRef } from "react";

const TiltImage = ({ src, alt, width = "100%" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to container
    const y = e.clientY - rect.top;  // Mouse Y relative to container

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // max tilt 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "600px",
        width: width,
      }}
      className="h-80 rounded-2xl shadow-2xl overflow-hidden bg-transparent"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-fit rounded-2xl transition-transform duration-150 ease-out bg-transparent"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
};

export default TiltImage;
