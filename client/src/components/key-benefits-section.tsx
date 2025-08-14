import { useLanguage } from "./language-provider";

export function KeyBenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "fas fa-chart-line",
      title: t("Augmentation des commandes", "Increase orders"),
      description: t("Boostez vos ventes avec un système optimisé", "Boost sales with an optimized system"),
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: "fas fa-heart",
      title: t("Fidélisation client", "Customer loyalty"),
      description: t("Programme de fidélité et notifications push", "Loyalty program and push notifications"),
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: "fas fa-cogs",
      title: t("Gestion simplifiée", "Simple management"),
      description: t("Back-office intuitif pour tout gérer", "Intuitive back-office to manage everything"),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "fas fa-hand-paper",
      title: t("Click & Collect", "Click & Collect"),
      description: t("Commandes à emporter sans attente", "Takeaway orders without waiting"),
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: "fas fa-shipping-fast",
      title: t("Livraison intégrée", "Integrated delivery"),
      description: t("Gestion complète de vos livraisons", "Complete delivery management"),
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: "fas fa-mobile-alt",
      title: t("Applications mobiles", "Mobile apps"),
      description: t("iOS & Android avec votre marque", "iOS & Android with your branding"),
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-700 to-dark-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("✨ Bénéfices clés", "✨ Key Benefits")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Pourquoi choisir SAMEATS", "Why choose SAMEATS")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t(
              "Découvrez les avantages qui font la différence pour votre restaurant",
              "Discover the advantages that make the difference for your restaurant"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="neo-card p-8 rounded-2xl hover-lift group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${benefit.icon} text-white text-xl`}></i>
                </div>
                
                <h3 className="text-xl font-poppins font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift group"
            onClick={() => document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              {t("Voir nos clients satisfaits", "See our satisfied clients")}
              <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}