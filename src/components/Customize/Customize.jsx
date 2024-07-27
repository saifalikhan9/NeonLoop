import { useState } from "react";

const fonts = [
  { name: "brittany", displayName: "Brittany Signature" },
  { name: "ShadowIL", displayName: "Shadow Into Light" },
  { name: "Neoneon", displayName: "Neoneon" },
  { name: "Moon Time", displayName: "Moon Time" },
  { name: "Twister", displayName: "Twister" },
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
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [photo, setPhoto] = useState(null);

  const handleFontChange = (selectedFont) => {
    setFont(selectedFont);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleTextSizeChange = (size) => {
    setTextSize(size);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmitReview = () => {
    // Handle review submission logic here
    console.log({ review, rating, photo });
  };

  return (
    <div className="w-full h-dvh">
      <div>
        <div className="flex m-10 justify-center">
          <div className="w-1/2 min-h-svh">
            <div className="flex items-center justify-center text-white">
              <div className="container my-5 p-5 w-full px-8">
                <div className="relative w-full h-dvh bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535497_1280.png')]">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center py-40">
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
          </div>
          <div className="flex items-start justify-center w-1/2 min-h-svh">
            <div className="w-full px-4">
              <div className="my-5 mx-8 p-5">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mt-4 p-2 border rounded min-w-full"
                />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {fonts.map((fontItem) => (
                    <button
                      key={fontItem.name}
                      type="button"
                      className="rounded m-1 px-4 py-2 text-xl font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-white text-black"
                      style={{ fontFamily: fontItem.name }}
                      onClick={() => handleFontChange(fontItem.name)}
                    >
                      {fontItem.displayName}
                    </button>
                  ))}
                </div>
                <div className="flex-row mt-20">
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
                    onClick={() => handleTextSizeChange("text-3xl")}
                    className="m-2 p-2 border rounded"
                  >
                    Small
                  </button>
                  <button
                    onClick={() => handleTextSizeChange("text-4xl")}
                    className="m-2 p-2 border rounded"
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => handleTextSizeChange("text-5xl")}
                    className="m-2 p-2 border rounded"
                  >
                    Large
                  </button>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="w-full h-16 m-2 p-2 border rounded-3xl font-extrabold bg-neon"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="mr-2">Rating:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>Select Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="mr-2">Upload a photo:</label>
          <input type="file" onChange={handlePhotoChange} />
        </div>
        <button
          onClick={handleSubmitReview}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Customize;
