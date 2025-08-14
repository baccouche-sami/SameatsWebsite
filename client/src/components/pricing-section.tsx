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
    <section id="pricing" className="py-20 bg-dark-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {t("Tarifs transparents", "Transparent Pricing")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t(
              "0% commission SAMEATS • Frais PSP à votre charge • Installation 500€ + 1 mois gratuit",
              "0% SAMEATS commission • PSP fees on you • €500 setup + 1 month free"
            )}
          </p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`glass-card p-8 rounded-xl hover-lift ${
              plan.popular ? 'border-primary-500 border-2 relative' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-gradient px-4 py-2 rounded-full text-sm font-medium">
                    {t("Populaire", "Popular")}
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-poppins font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  <span className="gradient-text">{plan.price}</span>
                  {plan.price !== t("Sur devis", "On quote") && (
                    <span className="text-lg text-gray-400">
                      {t("/mois", "/month")}
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <i className="fas fa-check text-primary-500"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-primary-gradient hover-lift' 
                    : 'border-2 border-primary-500 hover:bg-primary-500'
                }`}
              >
                {plan.name === "Enterprise" 
                  ? t("Nous contacter", "Contact Us")
                  : t("Commencer", "Get Started")
                }
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
