import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFeaturesGrid } from "@/components/modern-features-grid";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function ModernFeatures() {
  const { t } = useLanguage();

  const advancedFeatures = [
    {
      category: t("Site Web", "Website"),
      features: [
        {
          icon: "fas fa-palette",
          title: t("Design Personnalisé", "Custom Design"),
          description: t("Interface adaptée à votre marque et vos couleurs", "Interface adapted to your brand and colors")
        },
        {
          icon: "fas fa-mobile-alt",
          title: t("Mobile First", "Mobile First"),
          description: t("Optimisé pour tous les appareils mobiles et tablettes", "Optimized for all mobile devices and tablets")
        },
        {
          icon: "fas fa-search",
          title: t("SEO Optimisé", "SEO Optimized"),
          description: t("Référencement naturel pour être trouvé facilement", "Natural SEO to be found easily")
        }
      ]
    },
    {
      category: t("Applications", "Applications"),
      features: [
        {
          icon: "fab fa-apple",
          title: t("iOS Natif", "Native iOS"),
          description: t("Application native pour iPhone et iPad", "Native app for iPhone and iPad")
        },
        {
          icon: "fab fa-android",
          title: t("Android Natif", "Native Android"),
          description: t("Application native pour tous les appareils Android", "Native app for all Android devices")
        },
        {
          icon: "fas fa-bell",
          title: t("Notifications Push", "Push Notifications"),
          description: t("Notifications automatiques pour fidéliser vos clients", "Automatic notifications to retain your customers")
        }
      ]
    },
    {
      category: t("Gestion", "Management"),
      features: [
        {
          icon: "fas fa-chart-line",
          title: t("Analytics Avancés", "Advanced Analytics"),
          description: t("Suivi détaillé des ventes et du comportement client", "Detailed tracking of sales and customer behavior")
        },
        {
          icon: "fas fa-users",
          title: t("Gestion d'Équipe", "Team Management"),
          description: t("Comptes multiples avec niveaux d'accès personnalisés", "Multiple accounts with custom access levels")
        },
        {
          icon: "fas fa-cog",
          title: t("Automatisation", "Automation"),
          description: t("Processus automatisés pour gagner du temps", "Automated processes to save time")
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-inter">
      <SEOHead
        title={t(
          "Fonctionnalités SAMEATS - Solution complète restaurant",
          "SAMEATS Features - Complete restaurant solution"
        )}
        description={t(
          "Découvrez toutes les fonctionnalités SAMEATS : site web, apps mobiles, back-office, analytics, gestion livraison. Solution complète 0% commission.",
          "Discover all SAMEATS features: website, mobile apps, back-office, analytics, delivery management. Complete 0% commission solution."
        )}
        keywords={t(
          "fonctionnalités restaurant, site web restaurant, app mobile restaurant, back-office restaurant, analytics restaurant",
          "restaurant features, restaurant website, restaurant mobile app, restaurant back-office, restaurant analytics"
        )}
      />
      
      <ModernNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-full mb-6">
              <i className="fas fa-rocket text-[var(--primary)] mr-2"></i>
              <span className="text-sm text-[var(--text-secondary)]">
                {t("Fonctionnalités avancées", "Advanced features")}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("Toutes les fonctionnalités", "All the features")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("pour réussir", "you need to succeed")}
              </span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              {t(
                "Une solution complète qui inclut tout ce dont votre restaurant a besoin pour prospérer dans le digital",
                "A complete solution that includes everything your restaurant needs to thrive in digital"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <ModernFeaturesGrid />

      {/* Advanced Features by Category */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[var(--surface)]/30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text-modern">
                {t("Fonctionnalités détaillées", "Detailed features")}
              </span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {t(
                "Découvrez en détail toutes les capacités de la plateforme SAMEATS",
                "Discover in detail all the capabilities of the SAMEATS platform"
              )}
            </p>
          </div>

          <div className="space-y-20">
            {advancedFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="modern-card p-6 text-center group"
                      style={{ animationDelay: `${(categoryIndex * 3 + featureIndex) * 100}ms` }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${feature.icon} text-2xl text-white`}></i>
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="modern-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text-modern">
                  {t("Prêt à découvrir SAMEATS ?", "Ready to discover SAMEATS?")}
                </span>
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                {t(
                  "Demandez une démonstration personnalisée et voyez comment SAMEATS peut transformer votre restaurant",
                  "Request a personalized demo and see how SAMEATS can transform your restaurant"
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-modern-primary text-lg">
                  <i className="fas fa-play mr-2"></i>
                  {t("Voir la démonstration", "Watch demo")}
                </button>
                <button className="btn-modern-secondary text-lg">
                  <i className="fas fa-calendar mr-2"></i>
                  {t("Programmer un appel", "Schedule a call")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}