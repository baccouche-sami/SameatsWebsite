import { useLanguage } from "./language-provider";
import poste1 from "@assets/Poste 1_1755215451809.jpg";
import poste2 from "@assets/Poste 2_1755215451814.jpg";
import poste3 from "@assets/Poste 3_1755215451814.jpg";
import poste4 from "@assets/Poste 4_1755215451814.jpg";
import poste5 from "@assets/Poste 5_1755215451815.jpg";

export function ModernClientGallery() {
  const { t } = useLanguage();

  const clients = [
    {
      name: "T9 Restaurant",
      type: t("Restaurant & Grill", "Restaurant & Grill"),
      location: t("Vitry-sur-Seine, France", "Vitry-sur-Seine, France"),
      image: poste1,
      description: t(
        "Restaurant moderne spécialisé dans les grillades et la cuisine internationale",
        "Modern restaurant specializing in grills and international cuisine"
      ),
      website: "https://www.t9-restaurant.fr/"
    },
    {
      name: "Campus Food Court",
      type: t("Food Court", "Food Court"),
      location: t("Champs-sur-Marne, France", "Champs-sur-Marne, France"),
      image: poste2,
      description: t(
        "Espace de restauration universitaire avec plusieurs concepts culinaires",
        "University dining space with multiple culinary concepts"
      ),
      website: "https://www.campusfoodcourt.fr/"
    },
    {
      name: "First Pizza",
      type: t("Pizzeria", "Pizzeria"),
      location: t("Noyon, France", "Noyon, France"),
      image: poste3,
      description: t(
        "Pizzeria artisanale proposant des pizzas fraîches et authentiques",
        "Artisanal pizzeria offering fresh and authentic pizzas"
      ),
      website: "https://www.firstpizza60.fr/"
    },
    {
      name: "Patroné Forno",
      type: t("Pizzeria italienne", "Italian Pizzeria"),
      location: t("Viry-Châtillon, France", "Viry-Châtillon, France"),
      image: poste4,
      description: t(
        "Authentique pizzeria italienne avec four à bois traditionnel",
        "Authentic Italian pizzeria with traditional wood-fired oven"
      ),
      website: "https://www.patroneforno.fr/"
    },
    {
      name: "Sidi Bou Le Mans",
      type: t("Restaurant traditionnel", "Traditional Restaurant"),
      location: t("Le Mans, France", "Le Mans, France"),
      image: poste5,
      description: t(
        "Restaurant traditionnel proposant une cuisine authentique dans un cadre moderne",
        "Traditional restaurant offering authentic cuisine in a modern setting"
      ),
      website: "https://www.sidibou-lemans.fr/"
    },
    {
      name: "World Food",
      type: t("Restaurant international", "International Restaurant"),
      location: t("Paris, France", "Paris, France"),
      image: poste1,
      description: t(
        "Restaurant international proposant une cuisine du monde variée",
        "International restaurant offering diverse world cuisine"
      ),
      website: "https://www.worldfood-75.fr/"
    }
  ];

  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-store text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Nos clients partenaires", "Our partner clients")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Ils nous font", "They trust")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("confiance", "us")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {t(
              "Découvrez les restaurants qui ont choisi SAMEATS pour digitaliser leur business et booster leurs ventes",
              "Discover the restaurants that chose SAMEATS to digitize their business and boost their sales"
            )}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="modern-card overflow-hidden h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={client.image}
                    alt={client.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                      <i className="fas fa-map-marker-alt mr-1 text-[var(--primary)]"></i>
                      {client.location}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                        {client.name}
                      </h3>
                      <p className="text-sm text-[var(--primary)] font-medium">
                        {client.type}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {client.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center text-xs text-[var(--text-muted)]">
                      <i className="fas fa-star text-[var(--accent)] mr-1"></i>
                      <span>{t("Client SAMEATS", "SAMEATS Client")}</span>
                    </div>
                    <div className="flex items-center text-xs text-[var(--success)]">
                      <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></div>
                      <span>{t("Actif", "Active")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "15+", label: t("Restaurants clients", "Restaurant clients"), icon: "fas fa-store" },
            { value: "3", label: t("Pays actifs", "Active countries"), icon: "fas fa-globe" },
            { value: "50K+", label: t("Commandes traitées", "Orders processed"), icon: "fas fa-shopping-cart" },
            { value: "98%", label: t("Satisfaction client", "Client satisfaction"), icon: "fas fa-heart" }
          ].map((stat, index) => (
            <div
              key={index}
              className="modern-card p-6 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 750}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className={`${stat.icon} text-white`}></i>
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text-modern mb-1">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)] text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
          <div className="modern-card p-8 bg-gradient-to-r from-[var(--surface)] to-[var(--surface-light)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {t("Rejoignez nos clients satisfaits", "Join our satisfied clients")}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              {t(
                "Vous aussi, digitalisez votre restaurant et augmentez vos ventes avec SAMEATS",
                "You too, digitize your restaurant and increase your sales with SAMEATS"
              )}
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-rocket mr-2"></i>
              <span>{t("Commencer maintenant", "Start now")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}