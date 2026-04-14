export default function MapView() {
  return (
    <section id="map" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-azure mb-4 font-serif">Explore the Map</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Navigate through our curated selection of Italy's most breathtaking destinations and plan your perfect itinerary.
          </p>
        </div>
        
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-sand bg-sand/30 group">
          {/* Placeholder Map Image */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Map of Italy" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Map Overlay UI */}
          <div className="absolute inset-0 bg-azure/10 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-sm transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-terracotta text-3xl">map</span>
              </div>
              <h3 className="text-2xl font-bold text-azure mb-2 font-serif">Interactive Map</h3>
              <p className="text-gray-600 mb-6">Google Maps integration ready. Discover routes, distances, and nearby attractions.</p>
              <button className="bg-azure text-white px-6 py-3 rounded-full font-medium hover:bg-azure/90 transition-colors w-full flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                Open Full Map
              </button>
            </div>
          </div>

          {/* Decorative Map Pins */}
          <div className="absolute top-1/4 left-1/3 animate-bounce" style={{ animationDelay: '0s' }}>
            <span className="material-symbols-outlined text-terracotta text-4xl drop-shadow-md">location_on</span>
          </div>
          <div className="absolute top-1/2 right-1/3 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <span className="material-symbols-outlined text-terracotta text-4xl drop-shadow-md">location_on</span>
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: '0.4s' }}>
            <span className="material-symbols-outlined text-terracotta text-4xl drop-shadow-md">location_on</span>
          </div>
        </div>
      </div>
    </section>
  );
}
