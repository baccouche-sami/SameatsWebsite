import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-poppins font-bold">SAMEATS</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t(
                "Solution complète de commande en ligne pour restaurants. Augmentez vos revenus sans commission.",
                "Complete online ordering solution for restaurants. Increase your revenue without commission."
              )}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-facebook text-xl"></i>
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
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} SAMEATS. {t("Tous droits réservés.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
