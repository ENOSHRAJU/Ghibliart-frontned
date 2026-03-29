import { ReactComponent as Logo } from '../Assets/Icons/next.svg';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section id='home' className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-10 text-center text-gray-500">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
          Transform your photos into Ghibli Art with GhibliCraft
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Experience the magic of Studio Ghibli's artistic style with our AI-powered image generator
        </p>

        {/* CTA Button */}
        <button className="
                mt-8 px-6 py-3 
                bg-gradient-to-r from-rose-600 to-orange-500 
                text-white font-semibold 
                rounded-full hover:opacity-90 
                transition-all inline-flex 
                items-center gap-2 shadow-lg
        " 
        onClick={() => navigate('/create')}>
            Try it now <Logo className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
