import { useState } from "react";
import { FiZap, FiChevronDown } from "react-icons/fi";

function CreateTextToImage(props) {
    const STYLES = props.STYLES || [
        { value: "anime", label: "Anime" },
        { value: "ghibli", label: "Ghibli" }
    ];

    const IMAGE_SIZES = props.IMAGE_SIZES || [
        { value: "1024x1024", label: "1024x1024 (Square)" },
        { value: "1152x896", label: "1152x896 (Landscape)" },
        { value: "1216x832", label: "1216x832 (Landscape)" },
        { value: "1344x768", label: "1344x768 (Landscape)" },
        { value: "1536x640", label: "1536x640 (Wide)" },
        { value: "640x1536", label: "640x1536 (Portrait)" },
        { value: "768x1344", label: "768x1344 (Portrait)" },
        { value: "832x1216", label: "832x1216 (Portrait)" },
        { value: "896x1152", label: "896x1152 (Portrait)" }
    ];

    const [loading, setLoading] = useState(false);
    const [generatedImage, setGeneratedImage] = useState(null);
    const [textPrompt, setTextPrompt] = useState("");
    const [style, setStyle] = useState("anime");
    const [imageSize, setImageSize] = useState("1024x1024");

    const handleTextToImageSubmit = async () => {
        console.log(typeof textPrompt);
        if (textPrompt.trim() === "" || !/[a-zA-Z]/.test(textPrompt)) {
            alert("Please provide a valid prompt (must contain letters)");
            return;
        }

        setLoading(true);

        const payload = {
            "prompt": textPrompt,
            "style": style,
            "size": imageSize
        };

        console.log(payload);

        try {
            const response = await fetch("https://ghibliart-backend.onrender.com/api/v1/generate-from-text", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                let message = "Something went wrong";

                if (response.status === 429) {
                    message = "API limit reached or insufficient balance";
                } else if (response.status === 401) {
                    message = "Invalid or expired API key";
                } else if (response.status === 500) {
                    message = "Server error, please try again later";
                }

                throw new Error(message);
            }

            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);
            setGeneratedImage(imageUrl);

        } catch (error) {
            console.error("Error with response: ", error);
            alert(`Failed to generate image: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!generatedImage) return;

        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `ghibli-art-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT PREVIEW */}
            <div className="relative flex items-center justify-center rounded-xl border border-white/20 bg-white/5 min-h-[420px]">
                {loading ? (
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent mb-4"></div>
                        <p className="text-white/60 text-sm">
                            Generating your Ghibli masterpiece...
                        </p>
                    </div>
                ) : generatedImage ? (
                    <>
                        <img
                            src={generatedImage}
                            alt="Ghibli-art-image"
                            className="w-full h-full object-contain rounded-xl"
                        />
                        <button
                            disabled={loading}
                            onClick={handleDownload}
                            type="button"
                            className="absolute top-4 right-4 px-4 py-2 rounded-lg font-medium text-white bg-rose-500 hover:bg-rose-600 transition-colors shadow-lg"
                        >
                            Download
                        </button>
                    </>
                ) : (
                    <p className="text-white/40 text-sm">
                        Your generated artwork will appear here
                    </p>
                )}
            </div>

            {/* RIGHT FORM */}
            <div className="space-y-6 text-left">
                {/* Prompt */}
                <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                        Describe Your Image
                    </label>

                    <textarea
                        rows="5"
                        value={textPrompt}
                        onChange={(e) => setTextPrompt(e.target.value)}
                        placeholder="A peaceful village on a hillside with windmills, surrounded by green fields under a blue sky..."
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-rose-400 resize-none"
                    />

                    {/* Character count */}
                    <p className="text-xs text-white/40 mt-2">
                        {textPrompt.length} characters
                    </p>
                </div>

                {/* Style */}
                <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                        Art Style
                    </label>

                    <div className="relative">
                        <select
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-gray-900 text-white focus:outline-none focus:border-rose-400 appearance-none cursor-pointer"
                        >
                            {STYLES.map(s => (
                                <option key={s.value} value={s.value} className="bg-gray-900 text-white">
                                    {s.label}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" size={20} />
                    </div>
                </div>

                {/* Image Size */}
                <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                        Image Size
                    </label>

                    <div className="relative">
                        <select
                            value={imageSize}
                            onChange={(e) => setImageSize(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-gray-900 text-white focus:outline-none focus:border-rose-400 appearance-none cursor-pointer"
                        >
                            {IMAGE_SIZES.map(size => (
                                <option key={size.value} value={size.value} className="bg-gray-900 text-white">
                                    {size.label}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" size={20} />
                    </div>
                </div>

                {/* Create Button */}
                <button
                    onClick={handleTextToImageSubmit}
                    disabled={loading || textPrompt.trim() === ""}
                    className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    <FiZap size={20} />
                    {loading ? "Generating..." : "Generate Ghibli Art"}
                </button>
            </div>
        </div>
    );
}

export default CreateTextToImage;