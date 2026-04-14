/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttractionCard from './components/AttractionCard';
import MapView from './components/MapView';
import Footer from './components/Footer';

const ATTRACTIONS = [
  {
    id: 1,
    title: "The Colosseum",
    location: "Rome, Lazio",
    description: "Step back in time at the iconic symbol of Imperial Rome. Experience the grandeur of ancient gladiatorial arenas and architectural mastery.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1996&q=80",
    category: "Architecture",
    icon: "history_edu"
  },
  {
    id: 2,
    title: "Grand Canal",
    location: "Venice, Veneto",
    description: "Glide through the romantic waterways of Venice. Admire Renaissance palaces and experience the unique charm of the floating city.",
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Coastal",
    icon: "sailing"
  },
  {
    id: 3,
    title: "Positano Cliffs",
    location: "Amalfi Coast, Campania",
    description: "Discover the breathtaking vertical town of Positano. Pastel-colored houses cascade down to the sparkling Mediterranean sea.",
    imageUrl: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Coastal",
    icon: "beach_access"
  },
  {
    id: 4,
    title: "Chianti Vineyards",
    location: "Tuscany",
    description: "Indulge in world-class wine tasting amidst rolling hills, cypress trees, and rustic farmhouses in the heart of Tuscany.",
    imageUrl: "https://images.unsplash.com/photo-1464322472093-601956102604?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
    category: "Culinary",
    icon: "restaurant"
  },
  {
    id: 5,
    title: "Duomo di Firenze",
    location: "Florence, Tuscany",
    description: "Marvel at Brunelleschi's magnificent dome. A masterpiece of Renaissance art and architecture that dominates the Florentine skyline.",
    imageUrl: "https://images.unsplash.com/photo-1543429257-466f50c0f86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
    category: "Architecture",
    icon: "account_balance"
  },
  {
    id: 6,
    title: "Cinque Terre",
    location: "Liguria",
    description: "Hike the rugged coastline connecting five vibrant fishing villages. Enjoy spectacular ocean views and authentic local seafood.",
    imageUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Coastal",
    icon: "landscape"
  }
];

const CATEGORIES = ["All", "Architecture", "Coastal", "Culinary"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAttractions = ATTRACTIONS.filter(attraction => 
    activeCategory === "All" || attraction.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-sand font-sans">
      <Navbar />
      <Hero />

      {/* Destinations Section */}
      <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-azure mb-4 font-serif">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our handpicked selection of Italy's most captivating locations, from ancient ruins to sun-drenched coastlines.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-terracotta text-white shadow-md' 
                  : 'bg-white text-azure hover:bg-azure/5 border border-azure/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map(attraction => (
            <AttractionCard key={attraction.id} {...attraction} />
          ))}
        </div>
        
        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found for this category.</p>
          </div>
        )}
      </section>

      <MapView />
      <Footer />
    </div>
  );
}
