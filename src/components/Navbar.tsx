import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-azure text-3xl">travel_explore</span>
            <span className="font-serif text-2xl font-bold text-azure">Italia</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-800 hover:text-terracotta transition-colors font-medium">Destinations</a>
            <a href="#experiences" className="text-gray-800 hover:text-terracotta transition-colors font-medium">Experiences</a>
            <a href="#map" className="text-gray-800 hover:text-terracotta transition-colors font-medium">Map</a>
            <button className="bg-terracotta text-white px-6 py-2 rounded-full hover:bg-terracotta/90 transition-colors font-medium shadow-md">
              Plan Trip
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-azure p-2">
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <a href="#destinations" className="block px-3 py-2 text-gray-800 hover:text-terracotta font-medium" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
            <a href="#experiences" className="block px-3 py-2 text-gray-800 hover:text-terracotta font-medium" onClick={() => setIsMobileMenuOpen(false)}>Experiences</a>
            <a href="#map" className="block px-3 py-2 text-gray-800 hover:text-terracotta font-medium" onClick={() => setIsMobileMenuOpen(false)}>Map</a>
            <button className="w-full bg-terracotta text-white px-6 py-3 rounded-full hover:bg-terracotta/90 transition-colors font-medium shadow-md mt-4">
              Plan Trip
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
