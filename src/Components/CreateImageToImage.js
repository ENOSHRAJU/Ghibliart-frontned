import { useState } from "react";
import { FiImage, FiZap, FiX, FiAlertCircle, FiChevronDown } from "react-icons/fi";

function CreateImageToImage(props) {
    const STYLES = props.STYLES || [
        { value: "anime", label: "Anime" },
        { value: "ghibli", label: "Ghibli" }
    ];

    const ALLOWED_DIMENSIONS = [
        [1024, 1024], [1152, 896], [1216, 832], [1344, 768],
        [1536, 640], [640, 1536], [768, 1344], [832, 1216], [896, 1152]
    ];
    const MAX_SIZE_MB = 5;

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageError, setImageError] = useState("");
    const [textPrompt, setTextPrompt] = useState("");
    const [style, setStyle] = useState("anime");
    const [generatedImage, setGeneratedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const validateImageDimensions = (width, height) => {
        return ALLOWED_DIMENSIONS.some(([w, h]) => w === width && h === height);
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImageError("");

        // Check file size
        const fileSizeMB = file.size / 1024 / 1024;
        if (fileSizeMB > MAX_SIZE_MB) {
            setImageError(`Image size must be below ${MAX_SIZE_MB}MB. Current size: ${fileSizeMB.toFixed(2)}MB`);
            setImage(null);
            setImagePreview(null);
            return;
        }

        // Check dimensions
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);

        img.onload = () => {
            const { width, height } = img;
            
            if (!validateImageDimensions(width, height)) {
                setImageError(
                    `Invalid dimensions: ${width}x${height}. Allowed dimensions are: 1024x1024, 1152x896, 1216x832, 1344x768, 1536x640, 640x1536, 768x1344, 832x1216, 896x1152`
                );
                setImage(null);
                setImagePreview(null);
                URL.revokeObjectURL(objectUrl);
            } else {
                setImage(file);
                setImagePreview(objectUrl);
                setImageError("");
            }
        };

        img.onerror = () => {
            setImageError("Failed to load image. Please try another file.");
            setImage(null);
            setImagePreview(null);
            URL.revokeObjectURL(objectUrl);
        };

        img.src = objectUrl;
    };

    const handleRemoveImage = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }
        setImage(null);
        setImagePreview(null);
        setImageError("");
    };

    const handleImageToImageSubmit = async () => {
        try {
            if (image === null) {
                alert("Please upload a photo to generate");
                return;
            }
            setLoading(true);

            const formdata = new FormData();
            formdata.append("image", image);
            formdata.append("style", style);
            formdata.append("prompt", textPrompt);

            console.log(image.size / 1024 / 1024, "MB");

            const response = await fetch("https://ghibliart-backend.onrender.com/api/v1/generate-from-image", {
                method: "POST",
                body: formdata
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! status ${response.status}`);
            }

            const imageBlob = await response.blob();
            const imageURL = URL.createObjectURL(imageBlob);
            setGeneratedImage(imageURL);

        } catch (error) {
            console.error("Error with response: ", error);
            alert("Failed to generate image. Please try again.");
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
                {/* Upload */}
                <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                        Upload Your Image
                    </label>

                    {!imagePreview ? (
                        <div className="relative">
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                            />

                            <div className="border-2 border-dashed border-white/30 rounded-xl p-12 text-center hover:border-rose-400 transition-colors bg-white/5">
                                <FiImage size={48} className="mx-auto mb-4 text-rose-400" />
                                <p className="text-white/80 mb-1">
                                    Click to upload or drag and drop
                                </p>
                                <p className="text-sm text-white/50">
                                    PNG, JPG up to 5MB
                                </p>
                                <p className="text-xs text-white/40 mt-2">
                                    Allowed sizes: 1024x1024, 1152x896, 1216x832, etc.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="relative rounded-xl overflow-hidden border border-white/20 bg-white/5">
                            <img
                                src={imagePreview}
                                alt="Uploaded preview"
                                className="w-full h-64 object-cover"
                            />
                            <button
                                onClick={handleRemoveImage}
                                className="absolute top-2 right-2 p-2 rounded-full bg-gray-900/80 hover:bg-red-500 transition-colors"
                                title="Remove image"
                            >
                                <FiX size={20} className="text-white" />
                            </button>
                            <div className="p-3 bg-gray-900/50 backdrop-blur-sm">
                                <p className="text-white/80 text-sm truncate">
                                    {image?.name}
                                </p>
                                <p className="text-white/50 text-xs">
                                    {(image?.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {imageError && (
                        <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-2">
                            <FiAlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
                            <p className="text-red-300 text-sm">{imageError}</p>
                        </div>
                    )}
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

                {/* Additional Prompt */}
                <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                        Additional Prompt (Optional)
                    </label>
                    <textarea
                        rows="3"
                        value={textPrompt}
                        onChange={(e) => setTextPrompt(e.target.value)}
                        placeholder="Add specific details or modifications..."
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-rose-400 resize-none"
                    />
                </div>

                {/* Generate Button */}
                <button
                    onClick={handleImageToImageSubmit}
                    disabled={loading || !image || imageError}
                    className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    <FiZap size={20} />
                    {loading ? "Generating..." : "Generate Ghibli Art"}
                </button>
            </div>
        </div>
    );
}

export default CreateImageToImage;