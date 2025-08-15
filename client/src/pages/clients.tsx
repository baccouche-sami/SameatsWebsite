import { ModernNavigation } from "@/components/modern-navigation";
import { ModernClientGallery } from "@/components/modern-client-gallery";
import { ModernTestimonials } from "@/components/modern-testimonials";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export function ClientsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <SEOHead
        title={t(
          "Nos Clients SAMEATS - Restaurants Partenaires & Témoignages",
          "Our SAMEATS Clients - Partner Restaurants & Testimonials"
        )}
        description={t(
          "Découvrez nos restaurants partenaires qui font confiance à SAMEATS et leurs témoignages authentiques sur notre solution de digitalisation.",
          "Discover our partner restaurants who trust SAMEATS and their authentic testimonials about our digitization solution."
        )}
      />
      
      <ModernNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--surface)]/30 to-[var(--background)]"></div>
        <div className="absolute inset-0 line-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
              <i className="fas fa-users text-[var(--primary)] mr-2"></i>
              <span className="text-sm text-[var(--text-secondary)]">
                {t("Nos clients partenaires", "Our partner clients")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("Ils nous font", "They trust")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("confiance", "us")}
              </span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-8">
              {t(
                "Plus de 500 restaurants dans 25 pays font confiance à SAMEATS pour digitaliser leur business. Découvrez leurs histoires de succès et leurs retours d'expérience.",
                "More than 500 restaurants in 25 countries trust SAMEATS to digitize their business. Discover their success stories and feedback."
              )}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: "500+", label: t("Restaurants clients", "Restaurant clients"), icon: "fas fa-store" },
                { value: "25", label: t("Pays", "Countries"), icon: "fas fa-globe" },
                { value: "98%", label: t("Satisfaction", "Satisfaction"), icon: "fas fa-heart" }
              ].map((stat, index) => (
                <div key={index} className="modern-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <i className={`${stat.icon} text-white`}></i>
                  </div>
                  <div className="text-3xl font-bold gradient-text-modern mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModernClientGallery />
      <ModernTestimonials />
      
      {/* Success Stories Section */}
      <section className="py-24 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("Histoires de", "Success")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("succès", "stories")}
              </span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {t(
                "Découvrez comment SAMEATS a transformé le business de nos clients",
                "Discover how SAMEATS transformed our clients' business"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("T9 Foodies & Grill", "T9 Foodies & Grill"),
                subtitle: t("Augmentation de 45% des ventes", "45% sales increase"),
                description: t(
                  "Grâce à l'application mobile SAMEATS, T9 Foodies & Grill a vu ses commandes en ligne exploser.",
                  "Thanks to the SAMEATS mobile app, T9 Foodies & Grill saw their online orders explode."
                ),
                metrics: [
                  { label: t("Ventes", "Sales"), value: "+45%" },
                  { label: t("Commandes", "Orders"), value: "2,500/mois" }
                ]
              },
              {
                title: t("Campus Food Court", "Campus Food Court"),
                subtitle: t("Gestion centralisée de 8 points de vente", "Centralized management of 8 outlets"),
                description: t(
                  "Une seule plateforme pour gérer tous les points de vente du food court universitaire.",
                  "One platform to manage all university food court outlets."
                ),
                metrics: [
                  { label: t("Efficacité", "Efficiency"), value: "+60%" },
                  { label: t("Points de vente", "Outlets"), value: "8" }
                ]
              },
              {
                title: t("Patroné Forno", "Patroné Forno"),
                subtitle: t("Digitalisation d'une pizzeria traditionnelle", "Traditional pizzeria digitization"),
                description: t(
                  "Modernisation réussie tout en préservant l'authenticité italienne.",
                  "Successful modernization while preserving Italian authenticity."
                ),
                metrics: [
                  { label: t("Croissance", "Growth"), value: "+52%" },
                  { label: t("Fidélité", "Loyalty"), value: "85%" }
                ]
              }
            ].map((story, index) => (
              <div
                key={index}
                className="modern-card p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-[var(--primary)] font-medium text-sm">
                    {story.subtitle}
                  </p>
                </div>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {story.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold gradient-text-modern">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}