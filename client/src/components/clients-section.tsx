import { useLanguage } from "./language-provider";
import clientT9 from "@assets/Poste 1_1755206844217.jpg";
import clientCampus from "@assets/Poste 2_1755206844219.jpg";
import clientFirstPizza from "@assets/Poste 3_1755206844220.jpg";
import clientPatrone from "@assets/Poste 4_1755206844220.jpg";
import clientRestSidi from "@assets/Poste 5_1755206844221.jpg";

export function ClientsSection() {
  const { t } = useLanguage();

  const clients = [
    { 
      name: "T9 Foodies & Grill", 
      type: t("Restaurant", "Restaurant"), 
      image: clientT9,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform")
    },
    { 
      name: "Campus Food Court", 
      type: t("Food Court", "Food Court"), 
      image: clientCampus,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform")
    },
    { 
      name: "First Pizza", 
      type: t("Pizzeria", "Pizzeria"), 
      image: clientFirstPizza,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform")
    },
    { 
      name: "Patroné Forno", 
      type: t("Pizzeria", "Pizzeria"), 
      image: clientPatrone,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform")
    },
    { 
      name: "Rest Sidi Bou Said", 
      type: t("Restaurant", "Restaurant"), 
      image: clientRestSidi,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform")
    },
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
        
        {/* Modern Client Grid - 2 to 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mb-20">
          {clients.map((client, index) => (
            <div key={index} className="neo-card p-6 rounded-2xl hover-lift group cursor-pointer text-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-full h-36 mb-4 rounded-xl overflow-hidden bg-dark-600 border border-gray-700/50">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm group-hover:text-primary-300 transition-colors">{client.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">{client.type}</p>
                  <div className="h-8">
                    <p className="text-xs text-primary-400 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">{client.description}</p>
                  </div>
                </div>
              </div>
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
