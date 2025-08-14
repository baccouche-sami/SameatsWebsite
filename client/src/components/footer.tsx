import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";
import favicon from "@assets/favicon_1755206801229.png";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-dark-800 via-dark-900 to-black border-t border-gray-700/50 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={sameatsLogo} 
                alt="SAMEATS" 
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-lg text-lg leading-relaxed">
              {t(
                "Solution complète de commande en ligne pour restaurants. Augmentez vos revenus sans commission avec notre plateforme moderne et intuitive.",
                "Complete online ordering solution for restaurants. Increase your revenue without commission with our modern and intuitive platform."
              )}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-primary-500/20 transition-all duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-primary-500/20 transition-all duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-primary-500/20 transition-all duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-primary-500/20 transition-all duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("Légal", "Legal")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                  {t("Conditions générales", "Terms of Service")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                  {t("Politique de confidentialité", "Privacy Policy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-500 transition-colors">
                  {t("Mentions légales", "Legal Notice")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary-500"></i>
                <span>+33 7 58 23 19 96</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary-500"></i>
                <span>contact@sameats.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-globe text-primary-500"></i>
                <span>www.sameats.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SAMEATS. {t("Tous droits réservés.", "All rights reserved.")}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-500">
                {t("Fait avec ❤️ en France", "Made with ❤️ in France")}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">
                  {t("Service actif", "Service active")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
