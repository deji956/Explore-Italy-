interface AttractionCardProps {
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
  icon: string;
}

export default function AttractionCard({ title, location, description, imageUrl, category, icon }: AttractionCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-azure/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-terracotta text-sm">{icon}</span>
          <span className="text-xs font-semibold text-azure uppercase tracking-wider">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-terracotta mb-2">
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span className="text-sm font-medium">{location}</span>
        </div>
        <h3 className="text-2xl font-bold text-azure mb-3 font-serif group-hover:text-terracotta transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{description}</p>
        
        <button className="mt-auto w-full border border-azure text-azure px-4 py-3 rounded-xl font-medium hover:bg-azure hover:text-white transition-colors flex items-center justify-center gap-2 group/btn">
          View Details
          <span className="material-symbols-outlined text-sm transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
