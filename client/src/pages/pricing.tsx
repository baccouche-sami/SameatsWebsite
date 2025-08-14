import { ModernNavigation } from "@/components/modern-navigation";
import { ModernPricingSection } from "@/components/modern-pricing-section";
import { ModernFooter } from "@/components/modern-footer";
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-inter">
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
      <ModernNavigation />
      <div className="pt-20">
        <ModernPricingSection />
      </div>
      <ModernFooter />
    </div>
  );
}