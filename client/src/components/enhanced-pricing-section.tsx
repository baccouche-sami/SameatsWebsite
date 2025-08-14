import { useLanguage } from "./language-provider";

export function EnhancedPricingSection() {
  const { t } = useLanguage();

  const plans = [
    {
      name: "Start",
      price: "69",
      description: t("Parfait pour débuter", "Perfect to get started"),
      features: [
        t("Site web de commande", "Ordering website"),
        t("Applications mobiles", "Mobile apps"),
        t("Back-office de base", "Basic back-office"),
        t("Paiements sécurisés", "Secure payments"),
        t("Support email", "Email support")
      ],
      highlight: false,
      ctaText: t("Commencer", "Get started")
    },
    {
      name: "Grow",
      price: "119",
      description: t("Idéal pour développer", "Ideal for growth"),
      features: [
        t("Tout de Start", "Everything in Start"),
        t("Programmes de fidélité", "Loyalty programs"),
        t("Marketing automatisé", "Automated marketing"),
        t("Analytics avancées", "Advanced analytics"),
        t("Support prioritaire", "Priority support"),
        t("Intégrations tierces", "Third-party integrations")
      ],
      highlight: true,
      ctaText: t("Le plus populaire", "Most popular")
    },
    {
      name: "Pro",
      price: "199",
      description: t("Pour les restaurants établis", "For established restaurants"),
      features: [
        t("Tout de Grow", "Everything in Grow"),
        t("Multi-établissements", "Multi-location"),
        t("API personnalisée", "Custom API"),
        t("Formation dédiée", "Dedicated training"),
        t("Support téléphonique", "Phone support"),
        t("Rapports personnalisés", "Custom reports")
      ],
      highlight: false,
      ctaText: t("Choisir Pro", "Choose Pro")
    },
    {
      name: "Enterprise",
      price: t("Sur devis", "Custom"),
      description: t("Solution sur mesure", "Tailored solution"),
      features: [
        t("Tout de Pro", "Everything in Pro"),
        t("Développement sur mesure", "Custom development"),
        t("Intégration complète", "Full integration"),
        t("Account manager dédié", "Dedicated account manager"),
        t("SLA garanti", "Guaranteed SLA"),
        t("Formation équipe complète", "Full team training")
      ],
      highlight: false,
      ctaText: t("Nous contacter", "Contact us")
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-700 to-dark-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("💰 Tarifs Transparents", "💰 Transparent Pricing")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Choisissez votre plan", "Choose your plan")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {t(
              "Des tarifs clairs et transparents adaptés à votre taille d'entreprise",
              "Clear and transparent pricing adapted to your business size"
            )}
          </p>

          {/* Pricing banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-gradient-to-r from-green-500/10 to-primary-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-center gap-2 text-green-400">
              <i className="fas fa-check-circle"></i>
              <span className="font-medium">{t("Installation 500 €", "€500 setup")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-primary-400">
              <i className="fas fa-gift"></i>
              <span className="font-medium">{t("1 mois gratuit", "1 month free")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-secondary-400">
              <i className="fas fa-handshake"></i>
              <span className="font-medium">{t("Sans engagement", "No commitment")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-yellow-400">
              <i className="fas fa-percentage"></i>
              <span className="font-medium">{t("-15% en annuel", "-15% yearly")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 text-green-300">
              <i className="fas fa-star"></i>
              <span className="font-medium">{t("0% commission SAMEATS", "0% SAMEATS commission")}</span>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative neo-card p-8 rounded-3xl hover-lift group ${
                plan.highlight 
                  ? 'border-2 border-primary-500 bg-gradient-to-b from-primary-500/10 to-primary-600/5' 
                  : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {t("RECOMMANDÉ", "RECOMMENDED")}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-poppins font-bold mb-2 group-hover:text-primary-300 transition-colors">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {typeof plan.price === 'string' && plan.price.includes('devis') || plan.price.includes('Custom') 
                      ? plan.price 
                      : `€${plan.price}`
                    }
                  </span>
                  {!plan.price.includes('devis') && !plan.price.includes('Custom') && (
                    <span className="text-gray-400 text-sm">/{t("mois", "month")}</span>
                  )}
                </div>

                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all hover-lift ${
                    plan.highlight
                      ? 'btn-primary'
                      : 'bg-dark-600 text-white hover:bg-primary-500 border border-gray-700 hover:border-primary-500'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 text-sm mt-1 flex-shrink-0"></i>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="text-center">
          <div className="neo-card p-8 rounded-2xl bg-gradient-to-r from-dark-600/50 to-dark-700/50 border border-gray-700/50">
            <h3 className="text-2xl font-poppins font-bold mb-4 gradient-text">
              {t("Des questions ?", "Questions?")}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t(
                "Notre équipe est là pour vous accompagner dans le choix de la solution qui correspond à vos besoins.",
                "Our team is here to help you choose the solution that fits your needs."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-primary px-6 py-3 rounded-xl font-medium hover-lift"
              >
                {t("Parler à un expert", "Talk to an expert")}
              </button>
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary px-6 py-3 rounded-xl font-medium hover-lift"
              >
                {t("Voir une démo", "See a demo")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}