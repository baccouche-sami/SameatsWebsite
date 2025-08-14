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
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform"),
      revenueBefore: "€2,800",
      revenueAfter: "€7,200",
      increase: "+157%",
      location: "Paris"
    },
    { 
      name: "Campus Food Court", 
      type: t("Food Court", "Food Court"), 
      image: clientCampus,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform"),
      revenueBefore: "€4,100",
      revenueAfter: "€11,500",
      increase: "+180%",
      location: "Lyon"
    },
    { 
      name: "First Pizza", 
      type: t("Pizzeria", "Pizzeria"), 
      image: clientFirstPizza,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform"),
      revenueBefore: "€2,200",
      revenueAfter: "€5,800",
      increase: "+164%",
      location: "Marseille"
    },
    { 
      name: "Patroné Forno", 
      type: t("Pizzeria", "Pizzeria"), 
      image: clientPatrone,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform"),
      revenueBefore: "€3,500",
      revenueAfter: "€8,900",
      increase: "+154%",
      location: "Nice"
    },
    { 
      name: "Rest Sidi Bou Said", 
      type: t("Restaurant", "Restaurant"), 
      image: clientRestSidi,
      description: t("a officiellement rejoint notre plateforme Sameats", "has officially joined our Sameats platform"),
      revenueBefore: "€3,800",
      revenueAfter: "€9,200",
      increase: "+142%",
      location: "Toulouse"
    },
  ];

  const stats = [
    { value: "500+", label: t("Restaurants partenaires", "Partner restaurants") },
    { value: "50M+", label: t("Commandes traitées", "Orders processed") },
    { value: "15+", label: t("Pays desservis", "Countries served") },
    { value: "99.9%", label: t("Disponibilité", "Uptime") },
  ];

  return (
    <section id="clients" className="py-16 md:py-20 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            {t("Ils nous font confiance", "They trust us")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              "Découvrez quelques-uns des établissements qui utilisent SAMEATS",
              "Discover some of the businesses using SAMEATS"
            )}
          </p>
        </div>
        
        {/* Enhanced Client Showcase - Mobile-first with revenue data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mb-20">
          {clients.map((client, index) => (
            <div key={index} className="neo-card p-4 md:p-6 rounded-2xl hover-lift group cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                {/* Success badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-20">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                
                <div className="w-full h-32 md:h-36 mb-4 rounded-xl overflow-hidden bg-dark-600 border border-gray-700/50">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-2 text-center">
                  <h3 className="font-semibold text-sm md:text-base group-hover:text-primary-300 transition-colors">{client.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">{client.type} • {client.location}</p>
                  
                  {/* Revenue showcase - appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-3">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-gray-400">{t("Avant", "Before")}</span>
                        <span className="text-gray-400">{t("Après", "After")}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-red-400 font-medium">{client.revenueBefore}</span>
                        <span className="text-green-400 font-medium">{client.revenueAfter}</span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-bold">
                          {client.increase}
                        </span>
                      </div>
                    </div>
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
