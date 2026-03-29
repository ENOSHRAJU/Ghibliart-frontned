import { ReactComponent as NextIcon } from "../Assets/Icons/next.svg";
import { useNavigate } from "react-router-dom";

function CreateCard() {
  const navigate = useNavigate();

  return (
    <section className="md:px-10 py-24 md:py-32 text-gray-200">
      <div
        className="
          max-w-6xl mx-auto
          px-8 py-20
          rounded-3xl
          text-center
          bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600
          shadow-[0_0_40px_rgba(255,100,150,0.4)]
        "
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Create Your Magical Ghibli Art Today
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Join thousands of Ghibli fans generating beautiful, dreamy artworks
          with our AI-powered Ghibli art generator.
        </p>

        {/* CTA Button */}
        <button
          aria-label="Create Ghibli art"
          className="
            px-8 py-4
            bg-white
            text-rose-600
            font-semibold
            rounded-full
            flex items-center justify-center gap-2
            mx-auto
            transition-all duration-300
            shadow-md hover:shadow-lg
            hover:bg-gray-100 hover:scale-[1.02]
          "
          onClick={() => navigate('/create')}
        >
          Get started
          <NextIcon className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default CreateCard;
