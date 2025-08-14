import { useLanguage } from "./language-provider";

export function SolutionsOverviewSection() {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t("Vendre en ligne", "Sell Food Online"),
      description: t(
        "Système de commande en ligne gratuit prêt à l'emploi. Notre système est conçu pour augmenter vos revenus tout en les protégeant des applications tierces et de leurs frais de commission élevés.",
        "Commission-free direct online ordering right out of the box. Our system is designed to grow your revenue while protecting it from third-party apps and their high commission fees."
      ),
      icon: "fas fa-shopping-cart",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: t("Site Web Attractif", "Attract more clients directly from your branded website"),
      description: t(
        "Démarquez-vous des autres restaurants avec une présence web unique et personnalisée. Choisissez parmi une variété de modèles de sites web personnalisables qui correspondent à l'image de marque de votre restaurant.",
        "Stand out from other restaurants with a unique and personalized web presence. Choose from a variety of customizable website templates that match your restaurant's branding."
      ),
      icon: "fas fa-globe",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: t("App Mobile Personnalisée", "Improve customer loyalty with your own mobile app"),
      description: t(
        "Rester en contact avec vos clients est la clé ! Avec SAMEATS, lancez facilement des messages marketing via votre application personnalisée avec notifications push et programmes de fidélité.",
        "Staying in touch with your customers is the key! With SAMEATS, effortlessly launch marketing messages through your branded app with push notifications and loyalty programs."
      ),
      icon: "fas fa-mobile-alt",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 right-20 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("🚀 Solutions Complètes", "🚀 Complete Solutions")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Commencez à vendre en quelques minutes", "Start selling in minutes")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t(
              "SAMEATS vous permet de lancer la commande en ligne directe sans commission dès la sortie de la boîte.",
              "SAMEATS lets you launch commission-free direct online ordering right out of the box."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="neo-card p-8 rounded-2xl hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${solution.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-poppins font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group-hover:translate-x-1 transition-transform duration-300">
                  {t("En savoir plus", "Find out more")}
                  <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
            {t("Commencer maintenant", "Start now")}
          </button>
        </div>
      </div>
    </section>
  );
}