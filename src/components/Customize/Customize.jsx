import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const bgImage =
  "https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535497_1280.png";
const fonts = [
  { name: "brittany", displayName: "Brittany Signature" },
  { name: "ShadowIL", displayName: "Shadow Into Light" },
  { name: "Neoneon", displayName: "Neoneon" },
  { name: "Moon Time", displayName: "Moon Time" },
  { name: "twister", displayName: "Twister" },
  { name: "Meow Script", displayName: "Meow Script" },
];

const colors = [
  { name: "red", color: "white" },
  { name: "blue", color: "#e4097f" },
  { name: "yellow", color: "#029746" },
  { name: "purple", color: "#0000fe" },
  { name: "warm-white", color: "#834e98" },
  { name: "ice-blue", color: "#ee7b1b" },
  { name: "orange", color: "#62bed3" },
  { name: "green", color: "#eedfc9" },
  { name: "pink", color: "#e31e25" },
  { name: "white", color: "#feec00" },
];

const Customize = () => {
  const [text, setText] = useState("Type your text here!");
  const [font, setFont] = useState("brittany");
  const [color, setColor] = useState(colors[0]);
  const [textSize, setTextSize] = useState("text-3xl");
  const [price, setPrice] = useState("00");
  const [order, setOrder] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const divRef = useRef(null);

  const handleFontChange = (selectedFont) => {
    setFont(selectedFont);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleTextSizeChange = (size, price) => {
    setTextSize(size);
    setPrice(price);
  };

  const handleAddToCart = async () => {
    const orderDetails = {
      text,
      font,
      color,
      textSize,
      price,
    };
    try {
      const token = localStorage.getItem("accessToken", "refreshToken"); // Assuming the token is stored in localStorage
      const response = await fetch("http://localhost:8000/api/v1/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Order saved:", data);
      // Optionally, handle the saved order data (e.g., update state or redirect)
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const handleCaptureClick = () => {
    if (divRef.current) {
      html2canvas(divRef.current, { useCORS: true, logging: true }).then(
        (canvas) => {
          const imgData = canvas.toDataURL("image/png");
          setCapturedImage(imgData);
        }
      );
    }
  };

  return (
    <div className="w-full auto">
      <div className="grid grid-cols-1 md:grid-cols-2 m-10 justify-center">
        {/* First div */}
        <div className="w-full min-h-svh">
          <div
            ref={divRef}
            className="flex items-center justify-center text-white"
          >
            <div
              className="relative w-full h-dvh bg-cover bg-center "
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-start justify-center py-40">
                <p
                  className={`${textSize} text-glow font-bold`}
                  style={{ fontFamily: font, color: color }} // change the size of this element's text
                >
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second div */}
        <div className="flex items-start justify-center w-full min-h-svh">
          <div className="w-full px-4">
            <div className="my-5 mx-8 p-5">
              <div className="w-full m-auto text-white text-glow">
                <h1 className="font-bold text-4xl">Customize your Neon</h1>
                <p className="my-3 fonboldt- text-xl">Pricing: {price} ₹</p>
              </div>
              <input
                type="text"
                placeholder={text}
                onChange={(e) => setText(e.target.value)}
                className="mt-4 p-2 border rounded min-w-full"
              />
              <div className="  grid grid-cols-3 gap-2 mt-4">
                {fonts.map((fontItem) => (
                  <button
                    key={fontItem.name}
                    type="button"
                    className="  rounded m-1 px-4 py-2 text-xl font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-white text-black"
                    style={{ fontFamily: fontItem.name }}
                    onClick={() => handleFontChange(fontItem.name)}
                  >
                    {fontItem.displayName}
                  </button>
                ))}
              </div>
              <div className="flex-row mt-20">
                <p className="py-5 font-bold text-xl text-glow text-white">
                  SELECT YOUR COLOR
                </p>
                {colors.map((ColorItem) => (
                  <button
                    key={ColorItem.name}
                    type="button"
                    className="p-2 border-2 rounded-full h-8 w-8"
                    style={{ background: ColorItem.color }}
                    onClick={() => handleColorChange(ColorItem.color)}
                  ></button>
                ))}
              </div>
              <div className="flex-row mt-5 border-gray-400 rounded text-white">
                <button
                  onClick={() => handleTextSizeChange("text-3xl", "2400")}
                  className="m-2 p-2 border rounded"
                >
                  Small <br />
                  Size 22” x 11”
                </button>
                <button
                  onClick={() => handleTextSizeChange("text-5xl", "3699")}
                  className="m-2 p-2 border rounded"
                >
                  Medium
                  <br />
                  Size 28” x 12”
                </button>
                <button
                  onClick={() => handleTextSizeChange("text-6xl", "4799")}
                  className="m-2 p-2 border rounded"
                >
                  Large
                  <br />
                  Size 35” x 15”
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full h-16 m-2 p-2 border rounded-3xl font-extrabold bg-neon"
                >
                  Add to Cart
                </button>
                {/* <button
                  type="button"
                  onClick={handleCaptureClick}
                  className="w-full h-16 m-2 p-2 border rounded-3xl font-extrabold bg-neon"
                >
                  Capture Screenshot
                </button> */}
              </div>
              <div className=" ">
                  <Popover >
                    <PopoverTrigger className=" my-5 w-24 h-auto text-white hover:box-shadow-neon-blue rounded-full font-bold text-xl" onClick={handleCaptureClick} >Preview</PopoverTrigger>
                    <PopoverContent>
                    
                  <img
                    src={capturedImage}
                    alt="Screenshot"
                    className="mt-2 border rounded"
                  />
                    </PopoverContent>
                  </Popover>

                 
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
