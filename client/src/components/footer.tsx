import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.title')}</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('team')} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.team')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('history')} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.history')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('context')} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.context')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('challenges')} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.challenges')}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Manuales y Guías</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Manual CDIO</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Guía de Proyectos</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Recursos Técnicos</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Manual de Colaboración</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300 mb-2">Universidad EIA</p>
            <p className="text-gray-300 mb-2">Departamento de Mecatrónica</p>
            <p className="text-gray-300">mecatronica@universidad.edu</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Mecatrónica Team. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
