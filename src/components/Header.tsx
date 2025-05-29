
import { Phone, MapPin } from 'lucide-react';

const Header = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg shadow-2xl border-b border-orange-500/20">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5321ca35-2247-4575-84dd-00c2611444fc.png" 
              alt="Guinchos Bogotá"
              className="h-10 w-auto filter brightness-110"
            />
          </div>
          
          {/* Call button */}
          <button
            onClick={handleCall}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 border border-orange-400/30"
          >
            <Phone size={18} className="animate-pulse" />
            <span className="hidden sm:inline text-sm">LIGAR AGORA</span>
          </button>
        </div>
        
        {/* Location info - mobile */}
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-300 bg-black/30 rounded-lg px-3 py-2 backdrop-blur-sm">
          <MapPin size={14} className="text-orange-400 animate-pulse" />
          <span className="font-medium">Av. Fernando Osório, 245 - Centro, Pelotas</span>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </header>
  );
};

export default Header;
