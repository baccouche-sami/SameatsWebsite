import { useLanguage } from "./language-provider";

export function WebsiteExamplesSection() {
  const { t } = useLanguage();

  // Using placeholder images that would represent different restaurant types
  const examples = [
    { id: 1, type: "Pizza", color: "from-red-500 to-orange-500" },
    { id: 2, type: "Sushi", color: "from-green-500 to-teal-500" },
    { id: 3, type: "Burger", color: "from-yellow-500 to-orange-500" },
    { id: 4, type: "Coffee", color: "from-amber-600 to-brown-500" },
    { id: 5, type: "Asian", color: "from-red-600 to-pink-500" },
    { id: 6, type: "Dessert", color: "from-pink-500 to-purple-500" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-700 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("🎨 Exemples de Sites", "🎨 Website Examples")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Voici comment votre site peut ressembler", "This is how your website can look")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {t(
              "Rencontrez des restaurants qui utilisent déjà SAMEATS 👋",
              "Meet restaurants that are already using SAMEATS 👋"
            )}
          </p>
        </div>

        {/* Website Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example) => (
            <div key={example.id} className="neo-card p-4 rounded-2xl hover-lift group cursor-pointer overflow-hidden">
              <div className="relative">
                {/* Mock website preview */}
                <div className="aspect-[4/5] bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="bg-gray-800 p-3 border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="flex-1 bg-gray-700 h-2 rounded-full mx-4"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-4 space-y-3">
                      <div className={`w-full h-20 bg-gradient-to-r ${example.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{example.type}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="w-3/4 h-3 bg-gray-700 rounded"></div>
                        <div className="w-1/2 h-3 bg-gray-700 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-gray-700 rounded"></div>
                        <div className="h-16 bg-gray-700 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-gray-700 rounded"></div>
                        <div className="w-2/3 h-2 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold bg-primary-500 px-4 py-2 rounded-lg">
                    {t("Voir l'exemple", "View Example")}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg group-hover:text-primary-300 transition-colors">
                  {t(`Restaurant ${example.type}`, `${example.type} Restaurant`)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t("Site personnalisé", "Custom website")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
            {t("Créer ma boutique en ligne", "Create Online Store")}
          </button>
        </div>
      </div>
    </section>
  );
}