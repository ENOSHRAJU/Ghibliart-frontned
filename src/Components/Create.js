import { useState } from "react";
import CreateTextToImage from "./CreateTextToImage";
import CreateImageToImage from "./CreateImageToImage";

function CreateSection() {

  const [activeTab, setActiveTab] = useState("imageToImage");

  const IMAGE_SIZES = [
    { value: "1024x1024", label: "1024 × 1024 (Square)" },
    { value: "1152x896", label: "1152 × 896 (Landscape)" },
    { value: "1216x832", label: "1216 × 832 (Landscape)" },
    { value: "1344x768", label: "1344 × 768 (Wide)" },
    { value: "1536x640", label: "1536 × 640 (Ultra Wide)" },
    { value: "640x1536", label: "640 × 1536 (Portrait)" },
    { value: "768x1344", label: "768 × 1344 (Portrait)" },
    { value: "832x1216", label: "832 × 1216 (Portrait)" },
    { value: "896x1152", label: "896 × 1152 (Portrait)" },
  ];

  const STYLES = [
  { value: "anime", label: "Anime" },
  { value: "fantasy-art", label: "Fantasy Art" },
  { value: "cinematic", label: "Cinematic" },
  { value: "digital-art", label: "Digital Art" },
  { value: "analog-film", label: "Analog Film" },
  { value: "comic-book", label: "Comic Book" },
  { value: "pixel-art", label: "Pixel Art" },
  { value: "neon-punk", label: "Neon Punk" },
  ];


  return (
    <section className="px-4 sm:px-6 lg:px-10 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
          Create Your Ghibli Art
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 mb-14 text-lg sm:text-xl">
          Choose your preferred method and bring your imagination to life
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-10 border-b border-white/20 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab("imageToImage")}
            className={`flex-1 py-4 font-semibold transition-all ${
              activeTab === "imageToImage"
                ? "text-rose-400 border-b-4 border-rose-400 -mb-px"
                : "text-white/60 hover:text-white"
            }`}
          >
            Image to Image
          </button>

          <button
            onClick={() => setActiveTab("textToImage")}
            className={`flex-1 py-4 font-semibold transition-all ${
              activeTab === "textToImage"
                ? "text-rose-400 border-b-4 border-rose-400 -mb-px"
                : "text-white/60 hover:text-white"
            }`}
          >
            Text to Image
          </button>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">

          {/* IMAGE TO IMAGE */}
          {activeTab === "imageToImage" ? ( 
            <CreateImageToImage 
                STYLES={STYLES}
            /> 
          ) : (
            <CreateTextToImage
                STYLES={STYLES}
                IMAGE_SIZES={IMAGE_SIZES}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default CreateSection;