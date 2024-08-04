import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import CardCustom from '../ui/CardCustom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const bgImage =
  "https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535497_1280.png";



  const sizes = [
    { fontSize: '30px', price: "2499", actualSize: 'Small' },
    { fontSize: '48px', price: "3699",  actualSize: 'Medium' },
    { fontSize: '60px', price: "4799", actualSize: 'Large' }
  ];
const fonts = [
  { name: "brittany", displayName: "Brittany Signature" },
  { name: "ShadowIL", displayName: "Shadow Into Light" },
  { name: "Neoneon", displayName: "Neoneon" },
  { name: "Moon Time", displayName: "Moon Time" },
  { name: "twister", displayName: "Twister" },
  { name: "Meow Script", displayName: "Meow Script" },
];

const colors = [
  { name: "White", color: "white" },
  { name: "Pink", color: "#e4097f" },
  { name: "Green", color: "#029746" },
  { name: "Blue", color: "#0000fe" },
  { name: "Purple", color: "#834e98" },
  { name: "Orange", color: "#ee7b1b" },
  { name: "Ice-Blue", color: "#62bed3" },
  { name: "Warm-White", color: "#eedfc9" },
  { name: "Red", color: "#e31e25" },
  { name: "Yellow", color: "#feec00" },
];

const Customize = () => {
  const [text, setText] = useState("Type your text here!");
  const [font, setFont] = useState("brittany");
  const [color, setColor] = useState();
  const [textSize, setTextSize] = useState("text-3xl");
  const [price, setPrice] = useState("00");
  const [order, setOrder] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const divRef = useRef(null);

  const orderDetails = {
    text,
    font,
    color,
    textSize,
    price,
    capturedImage,
  };

  const handleFontChange = (selectedFont) => {
    setFont(selectedFont);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleTextSizeChange = (size, price) => {
   
    setTextSize(size);
    setPrice(price)
  };

 

  const handleAddToCart = async () => {
    if (!capturedImage) {
      console.error("No image captured");
      return;
    }

    const blob = await (await fetch(capturedImage)).blob();
    const file = new File([blob], "neon-sign.png", { type: "image/png" });

    const formData = new FormData();
    formData.append("text", text);
    formData.append("font", font);
    formData.append("color", color);
    formData.append("textSize", textSize);
    formData.append("price", price);
    formData.append("imageUrl", file);

    try {
      const token = localStorage.getItem("accessToken"); // Assuming the token is stored in localStorage
      const response = await fetch("http://localhost:8000/api/v1/order", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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

  useEffect(() => {
    if (divRef.current) {
      html2canvas(divRef.current, {
        useCORS: true,
        logging: true,
        width: 700,
        height: 300,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        setCapturedImage(imgData);
      });
    }
  }, [text, font, textSize, color]);


  

  return (
    <div className="w-full  ">
      <div className=" grid grid-cols-1 md:grid-cols-2  m-10 justify-center">
        {/* First div */}
        <div className="w-full ">
          <div
            ref={divRef}
            className="flex items-center justify-center text-white"
          >
            <div
              className="relative w-full lg:h-dvh h-96  "
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-start justify-center py-40">
                <p
                  className={`text-glow font-bold`}
                  style={{ fontFamily: font, color: color, fontSize: textSize }} // change the size of this element's text
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
                <h1 className="font-bold  lg:text-4xl text-2xl ">Customize your Neon</h1>
                <p className="my-3 fonboldt- lg:text-xl text-lg ">Pricing: {price} ₹</p>
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
                    className="  rounded m-1 lg:px-4 lg:py-2 py-3 lg:text-xl font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-white text-black"
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
                    className="p-2 mx-1 border-2 rounded-full h-8 w-8"
                    style={{ background: ColorItem.color }}
                    onClick={() => handleColorChange(ColorItem.color)}
                  ></button>
                ))}
              </div>
              <div className="flex-row my-5 border-gray-400 rounded text-white">
                <div className="flex" ><h1 className="text-2xl text-glow font-bold" >Select your Size</h1>
                <Popover >
                <PopoverTrigger className=" mx-5 w-6 h-6 pb-4  font-Vibes border-2 text-white hover:box-shadow-neon-blue rounded-full font-bold text-xl">
                    i
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-center border-b-2 border-black " >In Inches</p>
                    <p>Small size = 22” x 11” </p>
                    <p>Medium size = 28” x 12” </p>
                    <p>Large size = 35” x 15” </p>
                  </PopoverContent>
                </Popover></div>
                
                {sizes.map((SizeItem) => (
                  <button
                    key={SizeItem.fontSize}
                    type="button"
                    className="my-2 mr-2 p-2 border rounded"
                    // style={{ fontSize: SizeItem.fontSize }}
                    onClick={() => handleTextSizeChange(SizeItem.fontSize,SizeItem.price)}
                  >
                    {SizeItem.actualSize}
                  </button>
                ))}
                
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full h-16 m-2 p-2 border rounded-3xl font-extrabold bg-neon"
                >
                  Add to Cart
                </button>
               
                
              </div>
              <div className=" ">
                <Popover>
                  <PopoverTrigger className=" my-5 w-24 h-auto text-white hover:box-shadow-neon-blue rounded-full font-bold text-xl">
                    Preview
                  </PopoverTrigger>
                  <PopoverContent>
                    <img
                      src={capturedImage}
                      alt="Screenshot"
                      className="mt-2 w-50 border rounded"
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
