import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "./language-provider";

export function ModernFeaturesGrid() {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: "fas fa-globe",
      title: t("Site Web Professionnel", "Professional Website"),
      description: t(
        "Site de commande en ligne responsive et optimisé pour tous les appareils",
        "Responsive online ordering website optimized for all devices"
      ),
      gradient: "from-blue-500 to-cyan-400",
      delay: "0ms"
    },
    {
      icon: "fas fa-mobile-alt",
      title: t("Applications Mobiles", "Mobile Applications"),
      description: t(
        "Applications iOS et Android natives avec votre marque et vos couleurs",
        "Native iOS and Android apps with your brand and colors"
      ),
      gradient: "from-purple-500 to-pink-400",
      delay: "100ms"
    },
    {
      icon: "fas fa-chart-line",
      title: t("Back-Office Complet", "Complete Back-Office"),
      description: t(
        "Tableau de bord avancé pour gérer commandes, menu et analytics",
        "Advanced dashboard to manage orders, menu and analytics"
      ),
      gradient: "from-green-500 to-emerald-400",
      delay: "200ms"
    },
    {
      icon: "fas fa-truck",
      title: t("Gestion Livraison", "Delivery Management"),
      description: t(
        "Système de livraison avec suivi en temps réel et optimisation des trajets",
        "Delivery system with real-time tracking and route optimization"
      ),
      gradient: "from-orange-500 to-red-400",
      delay: "300ms"
    },
    {
      icon: "fas fa-credit-card",
      title: t("Paiements Sécurisés", "Secure Payments"),
      description: t(
        "Intégration de tous les moyens de paiement avec sécurité bancaire",
        "Integration of all payment methods with banking security"
      ),
      gradient: "from-indigo-500 to-blue-400",
      delay: "400ms"
    },
    {
      icon: "fas fa-users",
      title: t("Fidélisation Client", "Customer Loyalty"),
      description: t(
        "Programme de fidélité et notifications push pour retenir vos clients",
        "Loyalty program and push notifications to retain your customers"
      ),
      gradient: "from-pink-500 to-rose-400",
      delay: "500ms"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-rocket text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Solution complète", "Complete solution")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-modern">
              {t("Tout ce dont vous avez besoin", "Everything you need")}
            </span>
            <br />
            <span className="text-[var(--text-primary)]">
              {t("pour digitaliser votre restaurant", "to digitize your restaurant")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {t(
              "Une plateforme complète qui remplace tous vos outils actuels. Site web, applications, back-office et bien plus encore.",
              "A complete platform that replaces all your current tools. Website, applications, back-office and much more."
            )}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group modern-card p-8 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: feature.delay }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient Effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="max-w-2xl mx-auto bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              {t("Prêt à transformer votre restaurant ?", "Ready to transform your restaurant?")}
            </h3>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              {t(
                "Rejoignez plus de 500 restaurants qui nous font confiance",
                "Join over 500 restaurants who trust us"
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-modern-primary text-lg">
                  {t("Commencer maintenant", "Start now")}
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </Link>
              
              <Link href="/features">
                <button className="btn-modern-secondary text-lg">
                  <i className="fas fa-play mr-2"></i>
                  {t("Voir toutes les fonctionnalités", "See all features")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}