import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead, generateProductSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Features() {
  const { t, language } = useLanguage();

  const features = [
    {
      category: t("Commande en ligne", "Online Ordering"),
      features: [
        {
          title: t("Site web de commande", "Ordering Website"),
          description: t("Site responsive optimisé pour la conversion", "Responsive website optimized for conversion"),
          icon: "fas fa-globe",
          image: "/api/placeholder/400/300"
        },
        {
          title: t("Menu temps réel", "Real-time Menu"),
          description: t("Modifiez instantanément vos menus et prix", "Instantly update your menus and prices"),
          icon: "fas fa-utensils",
          image: "/api/placeholder/400/300"
        },
        {
          title: t("Gestion des commandes", "Order Management"),
          description: t("Interface intuitive pour traiter vos commandes", "Intuitive interface to process your orders"),
          icon: "fas fa-clipboard-list",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    {
      category: t("Applications mobiles", "Mobile Applications"),
      features: [
        {
          title: t("Apps iOS & Android", "iOS & Android Apps"),
          description: t("Applications natives avec votre branding", "Native apps with your branding"),
          icon: "fas fa-mobile-alt",
          image: "/api/placeholder/400/300"
        },
        {
          title: t("Notifications push", "Push Notifications"),
          description: t("Engagez vos clients avec des notifications ciblées", "Engage customers with targeted notifications"),
          icon: "fas fa-bell",
          image: "/api/placeholder/400/300"
        },
        {
          title: t("Programme de fidélité", "Loyalty Program"),
          description: t("Fidélisez avec des récompenses automatiques", "Build loyalty with automatic rewards"),
          icon: "fas fa-gift",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    {
      category: t("Back-office", "Back-office"),
      features: [
        {
          title: t("Tableau de bord", "Dashboard"),
          description: t("Analysez vos performances en temps réel", "Analyze your performance in real-time"),
          icon: "fas fa-chart-bar",
          image: "/api/placeholder/400/300"
        },
        {
          title: t("Gestion multi-établissements", "Multi-location Management"),
          description: t("Centralisez la gestion de tous vos restaurants", "Centralize management of all your restaurants"),
          icon: "fas fa-building",
          image: "/api/placeholder/400/300"
        },
        {
          title: t("Rapports détaillés", "Detailed Reports"),
          description: t("Exportez vos données pour une analyse approfondie", "Export your data for in-depth analysis"),
          icon: "fas fa-file-alt",
          image: "/api/placeholder/400/300"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter">
      <SEOHead
        title={t(
          "Fonctionnalités SAMEATS - Toutes les fonctionnalités pour votre restaurant",
          "SAMEATS Features - All features for your restaurant"
        )}
        description={t(
          "Découvrez toutes les fonctionnalités SAMEATS : site web de commande, applications mobiles, back-office, gestion multi-établissements, analytics et plus encore.",
          "Discover all SAMEATS features: ordering website, mobile apps, back-office, multi-location management, analytics and more."
        )}
        keywords={t(
          "fonctionnalités restaurant, menu en ligne, commande mobile, back-office restaurant, analytics restaurant",
          "restaurant features, online menu, mobile ordering, restaurant back-office, restaurant analytics"
        )}
        structuredData={generateProductSchema(language)}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
              {t("🚀 Fonctionnalités Complètes", "🚀 Complete Features")}
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
              {t("Toutes les fonctionnalités", "All the features")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t(
                "Découvrez en détail toutes les fonctionnalités qui feront de votre restaurant une réussite digitale",
                "Discover in detail all the features that will make your restaurant a digital success"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 bg-gradient-to-b from-dark-700 to-dark-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
                {category.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.features.map((feature, index) => (
                <div key={index} className="neo-card p-8 rounded-3xl hover-lift group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Feature Image */}
                    <div className="w-full h-48 bg-dark-600 rounded-2xl mb-6 overflow-hidden border border-gray-700/50">
                      <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                        <i className={`${feature.icon} text-4xl text-primary-400`}></i>
                      </div>
                    </div>

                    <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className={`${feature.icon} text-white text-xl`}></i>
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
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Prêt à découvrir SAMEATS ?", "Ready to discover SAMEATS?")}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t(
                "Demandez une démonstration personnalisée et voyez comment SAMEATS peut transformer votre restaurant",
                "Request a personalized demo and see how SAMEATS can transform your restaurant"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Demander une démo", "Request a demo")}
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Voir les tarifs", "See pricing")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}