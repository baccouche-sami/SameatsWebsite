import { useState } from "react";
import { useLanguage } from "./language-provider";

export function PricingSection() {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Start",
      price: "69€",
      features: [
        t("1 établissement", "1 location"),
        t("Commandes illimitées", "Unlimited orders"),
        t("Site de commande", "Ordering website"),
        t("Click & collect", "Click & collect"),
        t("Support email", "Email support")
      ],
      popular: false
    },
    {
      name: "Grow",
      price: "119€",
      features: [
        t("Jusqu'à 3 établissements", "Up to 3 locations"),
        t("Zones de livraison", "Delivery zones"),
        t("Upsell/cross-sell", "Upsell/cross-sell"),
        t("Impressions cuisine/KDS", "Kitchen printing/KDS"),
        t("Support prioritaire", "Priority support")
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "199€",
      features: [
        t("Apps iOS/Android", "iOS/Android apps"),
        t("Multi-langues/devises", "Multi-language/currency"),
        t("Promos avancées", "Advanced promos"),
        t("SLA 99,9%", "99.9% SLA"),
        t("Support chat", "Chat support")
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: t("Sur devis", "On quote"),
      features: [
        t(">10 établissements", ">10 locations"),
        t("Intégrations", "Integrations"),
        t("SSO", "SSO"),
        t("Formation", "Training"),
        t("Account manager", "Account manager")
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-300 mb-6">
            {t("💰 Prix Transparents", "💰 Transparent Pricing")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Tarifs transparents", "Transparent Pricing")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {t(
                "0% commission SAMEATS • Frais PSP à votre charge • Installation 500€ + 1 mois gratuit",
                "0% SAMEATS commission • PSP fees on you • €500 setup + 1 month free"
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                {t("✓ Sans engagement", "✓ No commitment")}
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">
                {t("✓ Support inclus", "✓ Support included")}
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">
                {t("✓ Mises à jour gratuites", "✓ Free updates")}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-gray-400">
              {t("Mensuel", "Monthly")}
            </span>
            <div className="relative">
              <input 
                type="checkbox" 
                id="annual-toggle" 
                className="sr-only"
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <label htmlFor="annual-toggle" className="block w-14 h-8 bg-gray-600 rounded-full cursor-pointer">
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 mt-1 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}></div>
              </label>
            </div>
            <span className="text-primary-500 font-medium">
              {t("Annuel (-15%)", "Annual (-15%)")}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`neo-card p-8 rounded-2xl hover-lift group relative transition-all duration-500 ${
              plan.popular ? 'border-2 border-primary-500 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-gradient px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <i className="fas fa-crown mr-2"></i>
                    {t("Populaire", "Popular")}
                  </span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className={`${plan.popular ? 'fas fa-crown' : 'fas fa-rocket'} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4 group-hover:text-primary-300 transition-colors">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  <span className="gradient-text">{plan.price}</span>
                  {plan.price !== t("Sur devis", "On quote") && (
                    <span className="text-lg text-gray-400 block text-sm mt-1">
                      {t("/mois", "/month")}
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-left relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <i className="fas fa-check text-green-400 text-xs"></i>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden relative z-10 ${
                  plan.popular 
                    ? 'modern-button text-white shadow-lg' 
                    : 'border-2 border-primary-500 hover:bg-primary-500 hover:shadow-lg bg-primary-500/10'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <i className={`fas ${plan.popular ? 'fa-rocket' : 'fa-arrow-right'}`}></i>
                  {plan.name === "Enterprise" 
                    ? t("Nous contacter", "Contact Us")
                    : t("Commencer", "Get Started")
                  }
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
