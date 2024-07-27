import React from 'react';

// URL for the background image
const imageUrl = "https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535497_1280.png";

// Styles for background container
const containerStyle = {
  backgroundImage: `url(${imageUrl})`,
};


const BackgroundWithText = ({ text, font, colorClass }) => {
console.log(colorClass);
  return (
    <div
      className="relative w-full h-dvh bg-cover bg-center"
      style={containerStyle}>
      <div className="absolute inset-0  bg-black bg-opacity-50 flex items-start justify-center py-40">
        <p className={` text-glow text-4xl font-${font}  text-${colorClass} `}   >
          {text}
        </p>
      </div>
    </div>
  );
};

export default BackgroundWithText;
