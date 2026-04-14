import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-azure text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-terracotta text-4xl">travel_explore</span>
              <span className="font-serif text-3xl font-bold">Italia</span>
            </div>
            <p className="text-white/70 mb-6 font-light leading-relaxed">
              Curating extraordinary Mediterranean experiences. Discover the art, culture, and culinary masterpieces of Italy with our exclusive guides.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-sand">Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Amalfi Coast</a></li>
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Tuscany</a></li>
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Rome</a></li>
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Venice</a></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-sand">Experiences</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Culinary Tours</a></li>
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Historic Sites</a></li>
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Wine Tasting</a></li>
              <li><a href="#" className="text-white/70 hover:text-terracotta transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Coastal Sailing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-xl font-semibold mb-6 text-sand">Newsletter</h4>
            <p className="text-white/70 mb-4 font-light">Subscribe to receive exclusive travel offers and insider guides to Italy.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/50 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-terracotta text-white px-4 rounded-lg hover:bg-terracotta/90 transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
            {isSubscribed && (
              <p className="text-sand text-sm mt-2 flex items-center gap-1 animate-fade-in">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Italia Travel. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
