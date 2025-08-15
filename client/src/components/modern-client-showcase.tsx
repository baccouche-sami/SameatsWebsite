import { useLanguage } from "./language-provider";
import poste1 from "@assets/Poste 1_1755215451809.jpg";
import poste2 from "@assets/Poste 2_1755215451814.jpg";
import poste3 from "@assets/Poste 3_1755215451814.jpg";
import poste4 from "@assets/Poste 4_1755215451814.jpg";
import poste5 from "@assets/Poste 5_1755215451815.jpg";

export function ModernClientShowcase() {
  const { t } = useLanguage();

  const clients = [
    {
      name: "T9 Restaurant",
      type: t("Restaurant & Grill", "Restaurant & Grill"),
      revenue: "+45%",
      orders: "2,500+",
      quote: t(
        "Sameats a transformé notre façon de gérer les commandes. Nos ventes ont explosé depuis la mise en place !",
        "Sameats transformed how we manage orders. Our sales have exploded since implementation!"
      ),
      image: poste1,
      logo: "T9",
      growth: "+45%",
      metric: t("de CA en plus", "revenue increase"),
      website: "https://www.t9-restaurant.fr/"
    },
    {
      name: "Campus Food Court",
      type: t("Food Court", "Food Court"),
      revenue: "+60%",
      orders: "4,200+",
      quote: t(
        "Interface intuitive et intégrations parfaites. Le support est exceptionnel, je recommande vivement !",
        "Intuitive interface and perfect integrations. Exceptional support, I highly recommend!"
      ),
      image: poste2,
      logo: "CFC",
      growth: "+60%",
      metric: t("de commandes", "more orders"),
      website: "https://www.campusfoodcourt.fr/"
    },
    {
      name: "First Pizza",
      type: t("Pizzeria", "Pizzeria"),
      revenue: "+38%",
      orders: "1,800+",
      quote: t(
        "La solution complète dont nous avions besoin. Nos clients adorent commander via l'app !",
        "The complete solution we needed. Our customers love ordering through the app!"
      ),
      image: poste3,
      logo: "FP",
      growth: "+38%",
      metric: t("de satisfaction client", "customer satisfaction"),
      website: "https://www.firstpizza60.fr/"
    },
    {
      name: "Patroné Forno",
      type: t("Pizzeria italienne", "Italian pizzeria"),
      revenue: "+52%",
      orders: "3,100+",
      quote: t(
        "Grâce à Sameats, nous avons doublé notre chiffre d'affaires en 6 mois !",
        "Thanks to Sameats, we doubled our revenue in 6 months!"
      ),
      image: poste4,
      logo: "PF",
      growth: "+52%",
      metric: t("de croissance", "growth"),
      website: "https://www.patroneforno.fr/"
    },
    {
      name: "Sidi Bou Le Mans",
      type: t("Restaurant traditionnel", "Traditional restaurant"),
      revenue: "+35%",
      orders: "2,800+",
      quote: t(
        "Une solution moderne qui respecte nos traditions. Parfait pour notre clientèle !",
        "A modern solution that respects our traditions. Perfect for our clientele!"
      ),
      image: poste5,
      logo: "SBLM",
      growth: "+35%",
      metric: t("de fidélisation", "customer retention"),
      website: "https://www.sidibou-lemans.fr/"
    },
    {
      name: "World Food",
      type: t("Restaurant international", "International restaurant"),
      revenue: "+28%",
      orders: "1,900+",
      quote: t(
        "SAMEATS nous a permis d'atteindre une clientèle plus large avec notre cuisine du monde !",
        "SAMEATS allowed us to reach a wider audience with our world cuisine!"
      ),
      image: poste1,
      logo: "WF",
      growth: "+28%",
      metric: t("de nouveaux clients", "new customers"),
      website: "https://www.worldfood-75.fr/"
    }
  ];

  const stats = [
    { value: "15+", label: t("Restaurants", "Restaurants") },
    { value: "3", label: t("Pays", "Countries") },
    { value: "98%", label: t("Satisfaction", "Satisfaction") },
    { value: "€2M+", label: t("CA généré", "Revenue generated") }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--surface)]/30"></div>
      <div className="absolute inset-0 line-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
            <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Nos clients", "Our clients")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Nous travaillons avec", "We work with")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("votre entreprise", "your business")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {t(
              "Optimisez l'efficacité de votre restaurant grâce à des intégrations fluides pour la commande en ligne",
              "Enhance your restaurant's efficiency with seamless integrations for online ordering"
            )}
          </p>
        </div>

        {/* Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="modern-card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Client Header */}
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-[var(--surface-light)] border border-[var(--border)] mr-4 flex-shrink-0">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-[var(--text-primary)] text-sm">
                      {client.name}
                    </h4>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {client.logo}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {client.type}
                  </p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-sm text-[var(--text-primary)] leading-relaxed mb-4 italic min-h-[60px]">
                "{client.quote}"
              </blockquote>
              
              {/* Metrics */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <div className="text-center flex-1">
                  <div className="text-lg font-bold gradient-text-modern">
                    {client.growth}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {client.metric}
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--border)] mx-3"></div>
                <div className="text-center flex-1">
                  <div className="text-lg font-bold text-[var(--primary)]">
                    {client.orders}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {t("commandes/mois", "orders/month")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="modern-card p-6 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 500}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-modern mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)] text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-2xl">
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <i className="fas fa-shield-check text-[var(--success)] mr-2"></i>
              <span>{t("Certifié RGPD", "GDPR Certified")}</span>
            </div>
            <div className="w-px h-4 bg-[var(--border)]"></div>
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <i className="fas fa-award text-[var(--primary)] mr-2"></i>
              <span>{t("15+ clients satisfaits", "15+ satisfied clients")}</span>
            </div>
            <div className="w-px h-4 bg-[var(--border)]"></div>
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <i className="fas fa-globe text-[var(--accent)] mr-2"></i>
              <span>{t("3 pays", "3 countries")}</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}