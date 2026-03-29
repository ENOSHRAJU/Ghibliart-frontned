import TextToImage from '../Assets/images/text-image.png'
import ImageToImage from '../Assets/images/test.png'
import {ReactComponent as TeminalIcon} from '../Assets/Icons/terminal-solid-full.svg'

function About() {
    return (
        <section className="px-6 md:px-10 py-28 text-gray-200" id='about'>
            <div className="max-w-6xl mx-auto flex flex-col gap-16">

                <h2 className="text-4xl font-bold tracking-wide text-white text-center">About</h2>

                <p className="text-justify leading-relaxed text-gray-300 text-lg">
                    Whether you're an artist seeking inspiration, a fan wanting to see your photos in Ghibli style, 
                    or simply someone who appreciates beautiful art, our tool makes it incredibly easy to create 
                    stunning, professional-quality artwork in minutes. Join thousands of artists, designers, and 
                    Ghibli enthusiasts who use our platform daily to create breathtaking artwork.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    <div className="flex flex-col gap-4">
                        <h5 className="text-xl font-semibold text-white">Image Generator</h5>
                        <h5 className="text-2xl font-bold text-rose-400">Generate Studio Ghibli images from text</h5>
                        <p className="text-gray-300 text-justify leading-relaxed">
                            Bring your ideas to life with our Text to Image feature. Just type your vision, and our AI crafts a beautifully detailed scene infused with Studio Ghibli’s signature warmth and atmosphere. Whether you’re building a story, shaping concepts, or simply exploring creativity, this tool helps you visualize the worlds in your mind. 
                            From spirited landscapes to playful characters, your imagination sets the limit.
                        </p>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 backdrop-blur rounded-xl shadow-lg shadow-black/40">
                        <img 
                            src={TextToImage}
                            alt="text-to-image"
                            className="w-full max-h-[350px] object-contain rounded-lg"
                        />
                        <div className='flex justify-center items-center gap-2'>
                            <TeminalIcon className="size-5 text-gray-400"/>
                            <p className="text-sm text-gray-400 mt-2 italic">A cheerful Ghibli-style student reading by a window in a bright classroom, soft shadows and a warm afternoon glow.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="p-4 bg-white/5 border border-white/10 backdrop-blur rounded-xl shadow-lg shadow-black/40">
                        <img 
                            src={ImageToImage}
                            alt="image-to-image"
                            className="w-full max-h-[350px] object-contain rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h5 className="text-xl font-semibold text-white">Image Transformer</h5>
                        <h5 className="text-2xl font-bold text-rose-400">Convert your photos into Ghibli art</h5>
                        <p className="text-gray-300 text-justify leading-relaxed">
                            Give your photos a new life with our AI Restyler feature. Just upload your picture, choose the Studio Ghibli-inspired look, and watch it gain a dreamy, hand-painted charm. 
                            It’s perfect for rediscovering familiar scenes, adding artistic flair to your images, and creating distinctive content that stands out online.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
