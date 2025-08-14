import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "./language-provider";

export function ModernPricingSection() {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: t("Starter", "Starter"),
      description: t("Parfait pour commencer", "Perfect to get started"),
      monthlyPrice: 69,
      yearlyPrice: 59,
      setupFee: 500,
      features: [
        t("Site web de commande", "Ordering website"),
        t("1 application mobile", "1 mobile app"),
        t("Back-office basique", "Basic back-office"),
        t("Support par email", "Email support"),
        t("Analytics de base", "Basic analytics"),
        t("Jusqu'à 100 commandes/mois", "Up to 100 orders/month")
      ],
      highlighted: false,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      name: t("Professional", "Professional"),
      description: t("Le plus populaire", "Most popular"),
      monthlyPrice: 119,
      yearlyPrice: 99,
      setupFee: 500,
      features: [
        t("Tout du plan Starter", "Everything in Starter"),
        t("2 applications mobiles", "2 mobile apps"),
        t("Back-office avancé", "Advanced back-office"),
        t("Support prioritaire", "Priority support"),
        t("Analytics avancées", "Advanced analytics"),
        t("Programme de fidélité", "Loyalty program"),
        t("Notifications push", "Push notifications"),
        t("Commandes illimitées", "Unlimited orders")
      ],
      highlighted: true,
      gradient: "from-orange-500 to-pink-500"
    },
    {
      name: t("Enterprise", "Enterprise"),
      description: t("Pour les grandes entreprises", "For large businesses"),
      monthlyPrice: 199,
      yearlyPrice: 169,
      setupFee: 500,
      features: [
        t("Tout du plan Professional", "Everything in Professional"),
        t("Applications illimitées", "Unlimited apps"),
        t("Multi-établissements", "Multi-location"),
        t("Support dédié 24/7", "Dedicated 24/7 support"),
        t("API personnalisée", "Custom API"),
        t("Intégrations sur mesure", "Custom integrations"),
        t("Formation personnalisée", "Personal training"),
        t("Manager de compte dédié", "Dedicated account manager")
      ],
      highlighted: false,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const faqs = [
    {
      question: t("Y a-t-il des commissions sur les ventes ?", "Are there any commissions on sales?"),
      answer: t(
        "Non, aucune commission ! Vous gardez 100% de vos revenus. Nous ne prenons que l'abonnement mensuel.",
        "No commission at all! You keep 100% of your revenue. We only charge the monthly subscription."
      )
    },
    {
      question: t("Puis-je changer de plan à tout moment ?", "Can I change plans anytime?"),
      answer: t(
        "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre tableau de bord.",
        "Yes, you can upgrade or downgrade your plan anytime from your dashboard."
      )
    },
    {
      question: t("Qu'est-ce qui est inclus dans les frais d'installation ?", "What's included in the setup fee?"),
      answer: t(
        "L'installation inclut : configuration complète, formation de votre équipe, migration des données et personnalisation de votre marque.",
        "Setup includes: complete configuration, team training, data migration and brand customization."
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-tag text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Tarification transparente", "Transparent pricing")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Des prix", "Pricing")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("sans surprise", "without surprises")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            {t(
              "Choisissez le plan qui correspond à vos besoins. Aucune commission, aucun frais caché.",
              "Choose the plan that fits your needs. No commission, no hidden fees."
            )}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[var(--primary)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {t("Mensuel", "Monthly")}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-[var(--primary)] text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {t("Annuel", "Yearly")}
              <span className="absolute -top-2 -right-2 bg-[var(--success)] text-white text-xs px-2 py-1 rounded-full">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative animate-fade-in-up ${
                plan.highlighted 
                  ? 'md:scale-105 md:-translate-y-4' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {t("Plus populaire", "Most popular")}
                  </div>
                </div>
              )}

              <div className={`modern-card p-8 relative overflow-hidden h-full ${
                plan.highlighted ? 'border-[var(--primary)]' : ''
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Plan Header */}
                <div className="relative mb-8">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="relative mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold gradient-text-modern">
                      €{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-[var(--text-secondary)] ml-2">
                      /{t("mois", "month")}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-[var(--success)]">
                      {t("Économisez", "Save")} €{(plan.monthlyPrice - plan.yearlyPrice) * 12}/an
                    </div>
                  )}
                  <div className="text-sm text-[var(--text-muted)] mt-2">
                    + €{plan.setupFee} {t("frais d'installation unique", "one-time setup fee")}
                  </div>
                </div>

                {/* Features */}
                <div className="relative mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <i className="fas fa-check text-[var(--success)] mr-3 w-4"></i>
                        <span className="text-[var(--text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative">
                  <Link href="/contact">
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'btn-modern-primary'
                        : 'btn-modern-secondary'
                    }`}>
                      {t("Commencer maintenant", "Start now")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text-modern">
              {t("Questions fréquentes", "Frequently asked questions")}
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="modern-card p-6">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                  {faq.question}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {t("Encore des questions ?", "Still have questions?")}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              {t(
                "Notre équipe est là pour vous aider à choisir le meilleur plan",
                "Our team is here to help you choose the best plan"
              )}
            </p>
            <Link href="/contact">
              <button className="btn-modern-primary text-lg">
                <i className="fas fa-comments mr-2"></i>
                {t("Parler à un expert", "Talk to an expert")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}