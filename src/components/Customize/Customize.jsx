import React, { useState, useCallback } from "react";
import BackgroundWithText from "../BgImage/BgImage";

// Tailwind class for button styles
const buttonStyle = "rounded m-1 px-4 py-2 text-lg font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-white text-black";

const fonts = [
  { name: "brittany", text: "Brittany Signature" },
  { name: "shadows", text: "Shadows Light" },
  { name: "neoneon", text: "Neoneon" },
  { name: "moontime", text: "Moon Time" },
  { name: "twister", text: "Twister" },
  { name: "meow", text: "Meow Script" },
];

const Customize = () => {
  const [text, setText] = useState("Type your text here!");
  const [font, setFont] = useState("");

  const handleFontChange = useCallback((fontName) => {
    setFont(fontName);
  }, []);

  const Button = ({ fontName, buttonText }) => (
    <button
      type="button"
      className={`${buttonStyle} font-${fontName}`}
      onClick={() => handleFontChange(fontName)}
    >
      {buttonText}
    </button>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center text-white">
          <div className="container my-5 p-5 w-full px-8">
            <BackgroundWithText text={text} font={font} />
          </div>
        </div>
        <div className="flex items-start justify-center text-black">
          <div className="w-full px-4">
            <div className="my-5 mx-8 p-5">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="mt-4 p-2 border rounded min-w-full"
              />
              <div className="grid grid-cols-3 gap-2 mt-4">
                {fonts.map(({ name, text }) => (
                  <Button key={name} fontName={name} buttonText={text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
