import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead, generateFAQSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Pricing() {
  const { t, language } = useLanguage();

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
        t("Support email", "Email support"),
        t("Jusqu'à 100 commandes/mois", "Up to 100 orders/month")
      ],
      highlight: false,
      ctaText: t("Commencer", "Get started"),
      popular: false
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
        t("Intégrations tierces", "Third-party integrations"),
        t("Jusqu'à 500 commandes/mois", "Up to 500 orders/month"),
        t("Notifications push illimitées", "Unlimited push notifications")
      ],
      highlight: true,
      ctaText: t("Le plus populaire", "Most popular"),
      popular: true
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
        t("Rapports personnalisés", "Custom reports"),
        t("Commandes illimitées", "Unlimited orders"),
        t("Domaine personnalisé", "Custom domain"),
        t("White-label complet", "Complete white-label")
      ],
      highlight: false,
      ctaText: t("Choisir Pro", "Choose Pro"),
      popular: false
    }
  ];

  const faqs = [
    {
      question: t("Qu'est-ce qui est inclus dans l'installation ?", "What is included in the setup?"),
      answer: t(
        "L'installation inclut la création de votre site web, la configuration de vos applications mobiles, l'importation de votre menu, la formation de votre équipe et la mise en ligne complète.",
        "The setup includes creating your website, configuring your mobile apps, importing your menu, training your team, and complete go-live."
      )
    },
    {
      question: t("Puis-je changer de plan à tout moment ?", "Can I change plans at any time?"),
      answer: t(
        "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet le mois suivant.",
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect the following month."
      )
    },
    {
      question: t("Y a-t-il des frais de commission ?", "Are there commission fees?"),
      answer: t(
        "Non, SAMEATS ne prend aucune commission sur vos ventes. Vous gardez 100% de vos revenus.",
        "No, SAMEATS takes no commission on your sales. You keep 100% of your revenue."
      )
    },
    {
      question: t("Combien de temps prend l'installation ?", "How long does setup take?"),
      answer: t(
        "L'installation complète prend généralement 5-7 jours ouvrés. Nous nous occupons de tout pour que vous puissiez vous concentrer sur votre restaurant.",
        "Complete setup typically takes 5-7 business days. We handle everything so you can focus on your restaurant."
      )
    }
  ];

  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter">
      <SEOHead
        title={t(
          "Tarifs SAMEATS - Plans transparents sans commission",
          "SAMEATS Pricing - Transparent plans without commission"
        )}
        description={t(
          "Découvrez nos tarifs transparents : Start 69€, Grow 119€, Pro 199€. Installation 500€, 1 mois gratuit, 0% commission. Support 24/7 inclus.",
          "Discover our transparent pricing: Start €69, Grow €119, Pro €199. €500 setup, 1 month free, 0% commission. 24/7 support included."
        )}
        keywords={t(
          "tarifs restaurant, prix solution restaurant, abonnement restaurant, sans commission",
          "restaurant pricing, restaurant solution price, restaurant subscription, no commission"
        )}
        structuredData={generateFAQSchema(faqs)}
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
              {t("💰 Tarifs Transparents", "💰 Transparent Pricing")}
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
              {t("Choisissez votre plan", "Choose your plan")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {t(
                "Des tarifs clairs et transparents, sans commission sur vos ventes",
                "Clear and transparent pricing, no commission on your sales"
              )}
            </p>

            {/* Value proposition */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-gradient-to-r from-green-500/10 to-primary-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8">
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
              <div className="flex items-center gap-2 text-green-300">
                <i className="fas fa-percentage"></i>
                <span className="font-medium">{t("0% commission", "0% commission")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-b from-dark-700 to-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative neo-card p-8 rounded-3xl hover-lift group transition-all duration-300 ${
                  plan.highlight 
                    ? 'border-2 border-primary-500 bg-gradient-to-b from-primary-500/10 to-primary-600/5 transform scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
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
                    <span className="text-5xl font-bold gradient-text">€{plan.price}</span>
                    <span className="text-gray-400 text-sm">/{t("mois", "month")}</span>
                  </div>

                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all hover-lift ${
                    plan.highlight
                      ? 'btn-primary'
                      : 'bg-dark-600 text-white hover:bg-primary-500 border border-gray-700 hover:border-primary-500'
                  }`}>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Questions fréquentes", "Frequently asked questions")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t(
                "Trouvez les réponses aux questions les plus courantes sur nos tarifs",
                "Find answers to the most common questions about our pricing"
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="neo-card p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-primary-300">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Prêt à commencer ?", "Ready to get started?")}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t(
                "Contactez notre équipe pour une démonstration personnalisée et un devis sur mesure",
                "Contact our team for a personalized demo and custom quote"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Demander une démo", "Request a demo")}
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Nous contacter", "Contact us")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}