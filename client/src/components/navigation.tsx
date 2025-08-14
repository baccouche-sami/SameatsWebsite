import { useState } from "react";
import { useLanguage } from "./language-provider";
import faviconImg from "@assets/favicon_1755206801229.png";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-700/50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={faviconImg} 
              alt="SAMEATS Icon" 
              className="w-10 h-10 drop-shadow-lg"
            />
            <span className="text-2xl font-poppins font-bold gradient-text">SAMEATS</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="hover:text-primary-500 transition-colors"
            >
              {t("Fonctionnalités", "Features")}
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="hover:text-primary-500 transition-colors"
            >
              {t("Solutions", "Solutions")}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-primary-500 transition-colors"
            >
              {t("Tarifs", "Pricing")}
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="hover:text-primary-500 transition-colors"
            >
              {t("Clients", "Clients")}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary-500 transition-colors"
            >
              {t("Contact", "Contact")}
            </button>
          </div>
          
          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-dark-600 rounded-lg p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-primary-gradient text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-primary-gradient text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('demo')}
              className="bg-primary-gradient px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all hover-lift"
            >
              {t("Démo gratuite", "Free Demo")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
