
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Placeholder images - você pode substituir por fotos reais do seu guincho
  const images = [
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      alt: "Guincho moderno em ação",
      title: "Equipamento Moderno"
    },
    {
      src: "https://images.unsplash.com/photo-1609146179553-c49c16b05b39?w=800&h=600&fit=crop",
      alt: "Equipe especializada trabalhando",
      title: "Equipe Especializada"
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      alt: "Socorro 24 horas",
      title: "Atendimento 24h"
    },
    {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      alt: "Transporte seguro de veículos",
      title: "Transporte Seguro"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Camera size={16} className="text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm">Nossa Frota</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Equipamentos <span className="text-orange-500">Modernos</span>
          </h2>
          <p className="text-gray-600">
            Conheça nossa frota e estrutura profissional
          </p>
        </div>

        {/* Main image display */}
        <div className="relative mb-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-64 object-cover"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Image title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-lg">{images[currentImage].title}</h3>
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex gap-2 justify-center mb-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
            <div className="text-gray-600 text-sm">Anos de Experiência</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">24h</div>
            <div className="text-gray-600 text-sm">Atendimento</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
            <div className="text-gray-600 text-sm">Segurança</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">30min</div>
            <div className="text-gray-600 text-sm">Tempo Chegada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
