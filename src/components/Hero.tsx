import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516483638261-f40af5edca87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-azure/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-sand/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg font-serif">
          Discover Mediterranean Luxury
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 font-light drop-shadow-md max-w-2xl mx-auto">
          Experience the timeless beauty, exquisite flavors, and rich heritage of Italy. Your unforgettable journey begins here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-terracotta text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">explore</span>
            Explore Destinations
          </button>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="bg-white/20 backdrop-blur-md text-white border border-white/50 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">play_circle</span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsVideoOpen(false)}
          ></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-terracotta transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed?listType=search&list=italy+travel+4k+cinematic&autoplay=1" 
              title="Italy Travel Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
