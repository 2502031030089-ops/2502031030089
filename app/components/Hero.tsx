interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <div className="relative h-[600px] bg-gray-100">
      <img
        src={imageUrl}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Spring Collection 2026</h2>
          <p className="text-xl md:text-2xl mb-8">Discover the latest trends</p>
          <button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
