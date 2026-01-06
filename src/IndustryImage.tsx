import React, { useState } from "react";

import "./styles/IndustryImage.css";

interface IndustryImageProps {
  src: string;          // your local image import
  alt: string;          // alt text
  description: string;  // text shown on hover
}

const IndustryImage: React.FC<IndustryImageProps> = ({ src, alt, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`industry-image-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="industry-image" />

      <div className={`industry-description ${isHovered ? "show" : ""}`}>
        {description}
      </div>
    </div>
  );
};

export default IndustryImage;
