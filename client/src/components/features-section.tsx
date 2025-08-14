import { useLanguage } from "./language-provider";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "fas fa-shopping-cart",
      title: t("Commande en Ligne", "Online Ordering"),
      description: t(
        "Système de commande directe sans commission. Vos clients commandent depuis votre site.",
        "Direct ordering system without commission. Customers order from your website."
      )
    },
    {
      icon: "fas fa-mobile-alt",
      title: t("App Mobile Personnalisée", "Branded Mobile App"),
      description: t(
        "Application iOS et Android avec votre marque. Notifications push pour fidéliser vos clients.",
        "iOS and Android app with your branding. Push notifications to retain customers."
      )
    },
    {
      icon: "fas fa-palette",
      title: t("Site Web sur Mesure", "Custom Website"),
      description: t(
        "Plus de 40 thèmes disponibles. Personnalisation complète sans codage.",
        "Over 40 themes available. Complete customization without coding."
      )
    },
    {
      icon: "fas fa-truck",
      title: t("Gestion Livraisons", "Delivery Management"),
      description: t(
        "Intégration avec des flottes tierces. Gestion simplifiée depuis une seule app.",
        "Integration with third-party fleets. Simplified management from a single app."
      )
    },
    {
      icon: "fas fa-percentage",
      title: t("Zéro Commission", "Zero Commission"),
      description: t(
        "Vendez directement à vos clients. Gardez 100% de vos revenus sans frais cachés.",
        "Sell directly to your customers. Keep 100% of your revenue without hidden fees."
      )
    },
    {
      icon: "fas fa-rocket",
      title: t("Installation Rapide", "Quick Setup"),
      description: t(
        "Lancez votre boutique en ligne en quelques minutes. Service d'installation gratuit inclus.",
        "Launch your online store in minutes. Free setup service included."
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark-700 to-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("🎯 Fonctionnalités Avancées", "🎯 Advanced Features")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Fonctionnalités clés", "Key Features")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t(
              "Une solution complète pour digitaliser votre restaurant et augmenter vos revenus avec les dernières technologies",
              "A complete solution to digitize your restaurant and increase your revenue with the latest technology"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="neo-card p-6 md:p-8 rounded-2xl hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-poppins font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
