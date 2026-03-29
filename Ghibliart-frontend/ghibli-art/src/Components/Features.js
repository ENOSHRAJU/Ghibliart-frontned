import { ReactComponent as BrushIcon } from "../Assets/Icons/brush-solid-full.svg";
import { ReactComponent as RocketIcon } from "../Assets/Icons/rocket-solid-full.svg";
import { ReactComponent as ImageIcon } from "../Assets/Icons/photo-film-solid-full.svg";
import FeaturesCard from "./FeaturesCard";

function Features() {
  const features = [
    {
      icon: BrushIcon,
      title: "Precise Ghibli-Style Transformation",
      description:
        "Our AI carefully converts your photos into authentic Ghibli-inspired artwork, preserving each character's unique essence while capturing the charm of Studio Ghibli’s signature style.",
    },
    {
      icon: RocketIcon,
      title: "Lightning-Fast Rendering",
      description:
        "Transform your images in seconds with our optimized Ghibli AI engine. Enjoy high-quality results quickly, without waiting for long render times.",
    },
    {
      icon: ImageIcon,
      title: "Vibrant, High-Resolution Results",
      description:
        "Every generated artwork is crisp, detailed, and faithful to Studio Ghibli’s enchanting aesthetic, bringing magic and warmth to each image you create.",
    },
  ];

  return (
    <section className="px-6 md:px-10 py-24" id="features">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why GhibliCraft?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to turn your photos and ideas into magical,
            Ghibli-inspired artwork — fast, beautiful, and effortless.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeaturesCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
