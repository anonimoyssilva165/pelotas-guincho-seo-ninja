
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/5321ca35-2247-4575-84dd-00c2611444fc.png" 
            alt="Guinchos Bogotá"
            className="h-12 w-auto mx-auto mb-4"
          />
        </div>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-500">Nossos Serviços</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <div>• Guincho 24h</div>
              <div>• Socorro automotivo</div>
              <div>• Pane seca</div>
              <div>• Troca de pneu</div>
              <div>• Bateria</div>
              <div>• Destravamento</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3 text-orange-500">Atendimento</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <div>📞 (53) 99130-1916</div>
              <div>📍 Av. Fernando Osório, 245</div>
              <div>🕒 24 horas • 7 dias</div>
              <div>📌 Pelotas e região</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-400">
            © 2024 Guinchos Bogotá. Todos os direitos reservados.<br />
            Guincho 24 horas em Pelotas - RS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
