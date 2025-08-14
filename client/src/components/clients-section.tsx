import { useLanguage } from "./language-provider";

export function ClientsSection() {
  const { t } = useLanguage();

  const clients = [
    { name: "T9 Foodies & Grill", type: t("Restaurant", "Restaurant"), icon: "T9" },
    { name: "Campus Food Court", type: t("Food Court", "Food Court"), icon: "fas fa-utensils" },
    { name: "First Pizza", type: t("Pizzeria", "Pizzeria"), icon: "fas fa-pizza-slice" },
    { name: "Patroné Forno", type: t("Pizzeria", "Pizzeria"), icon: "PF" },
    { name: "Rest Sidi Bou Said", type: t("Restaurant", "Restaurant"), icon: "fas fa-star" },
  ];

  const stats = [
    { value: "500+", label: t("Restaurants partenaires", "Partner restaurants") },
    { value: "50M+", label: t("Commandes traitées", "Orders processed") },
    { value: "15+", label: t("Pays desservis", "Countries served") },
    { value: "99.9%", label: t("Disponibilité", "Uptime") },
  ];

  return (
    <section id="clients" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {t("Ils nous font confiance", "They trust us")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              "Découvrez quelques-uns des établissements qui utilisent SAMEATS",
              "Discover some of the businesses using SAMEATS"
            )}
          </p>
        </div>
        
        {/* Responsive Client Grid - 2 to 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mb-16">
          {clients.map((client, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-lift group cursor-pointer text-center">
              <div className="w-16 h-16 bg-dark-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-gradient transition-all">
                {client.icon.startsWith('fas') ? (
                  <i className={`${client.icon} text-primary-500 group-hover:text-white text-xl`}></i>
                ) : (
                  <span className="text-lg font-bold text-primary-500 group-hover:text-white">
                    {client.icon}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-sm mb-1">{client.name}</h3>
              <p className="text-xs text-gray-400">{client.type}</p>
            </div>
          ))}
        </div>
        
        {/* Client Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
