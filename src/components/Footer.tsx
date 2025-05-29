
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/5321ca35-2247-4575-84dd-00c2611444fc.png" 
              alt="Guinchos Bogotá"
              className="h-12 w-auto mx-auto mb-4"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Guincho 24 horas</li>
                <li>Socorro automotivo</li>
                <li>Reboque de veículos</li>
                <li>Pane seca</li>
                <li>Troca de pneu</li>
                <li>Bateria descarregada</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Telefone: (53) 99130-1916</li>
                <li>Endereço: Av. Fernando Osório, 245</li>
                <li>Centro, Pelotas - RS</li>
                <li>CEP: 96020-151</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Área de Atendimento</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Pelotas - RS</li>
                <li>Capão do Leão</li>
                <li>São Lourenço do Sul</li>
                <li>Rio Grande</li>
                <li>Região Sul do RS</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-400">
              © 2024 Guinchos Bogotá. Todos os direitos reservados. | 
              Guincho 24 horas em Pelotas - RS | Socorro automotivo confiável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
