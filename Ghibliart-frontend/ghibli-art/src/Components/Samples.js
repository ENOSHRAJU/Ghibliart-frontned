import galleryIcon1 from "../Assets/images/Gallery/gallery1.png"
import galleryIcon2 from "../Assets/images/Gallery/gallery2.png"
import galleryIcon3 from "../Assets/images/Gallery/gallery3.png"
import galleryIcon4 from "../Assets/images/Gallery/gallery4.png"
import galleryIcon5 from "../Assets/images/Gallery/gallery5.png"
import galleryIcon7 from "../Assets/images/Gallery/gallery7.png"
import galleryIcon8 from "../Assets/images/Gallery/gallery8.png"
import galleryIcon9 from "../Assets/images/Gallery/gallery9.png"
import galleryIcon10 from "../Assets/images/Gallery/gallery10.png"
import galleryIcon12 from "../Assets/images/Gallery/gallery12.png"
import galleryIcon13 from "../Assets/images/Gallery/gallery13.png"
import galleryIcon14 from "../Assets/images/Gallery/gallery14.png"
import galleryIcon15 from "../Assets/images/Gallery/gallery15.png"
import galleryIcon16 from "../Assets/images/Gallery/gallery16.png"
import galleryIcon17 from "../Assets/images/Gallery/gallery17.png"
function Gallery(props) {
    const images = [
        galleryIcon1,
        galleryIcon2,
        galleryIcon3,
        galleryIcon4,
        galleryIcon5,
        galleryIcon7,
        galleryIcon8,
        galleryIcon9,
        galleryIcon12,
        galleryIcon10,
        galleryIcon13,
        galleryIcon14,
        galleryIcon15,
        galleryIcon16,
        galleryIcon17
    ];
    
    return (
        <section className="md:px-10 py-40 flex flex-col items-center justify-center" id="samples">
            <div className="flex flex-col items-center justify-center gap-16 max-w-6xl">
                <h2 className="text-3xl font-bold text-white">Samples</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`galleryIcon${index+1}`}
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery;