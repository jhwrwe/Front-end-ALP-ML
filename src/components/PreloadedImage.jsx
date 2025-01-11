import React, { useState, useEffect } from "react";
import background from "../assets/background.png";
import Doctor1 from "../assets/Doctor-1.png";

function PreloadedImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <div className="loading-indicator">Loading...</div> // Replace with your loading spinner
  );
}

export default PreloadedImage;
