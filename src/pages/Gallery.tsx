// React import is not needed as it's not directly used

const galleryImages = [
  { url: "/gallery/7.jpeg", alt: "Creative nail design" },
  { url: "/gallery/1.jpg", alt: "Elegant manicure" },
  { url: "/gallery/2.jpg", alt: "Nail art design" },
  { url: "/gallery/3.jpeg", alt: "Professional manicure" },
  { url: "/gallery/4.jpeg", alt: "Luxury nail treatment" },
  { url: "/gallery/5.jpeg", alt: "Creative nail design" },
  { url: "/gallery/6.jpeg", alt: "Creative nail design" },
  { url: "/gallery/8.jpeg", alt: "Creative nail design" },
  { url: "/gallery/9.jpeg", alt: "Creative nail design" },
  { url: "/gallery/10.jpeg", alt: "Creative nail design" }
];

const Gallery = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-lg text-gray-600">
            Browse through our collection of nail art designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group aspect-square">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
