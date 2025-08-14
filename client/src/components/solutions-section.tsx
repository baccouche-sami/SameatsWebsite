import { useLanguage } from "./language-provider";

export function SolutionsSection() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: "fas fa-utensils",
      title: t("Restaurateurs indépendants", "Independent Restaurants"),
      description: t(
        "Solution clé en main pour développer vos ventes en ligne rapidement",
        "Turnkey solution to develop your online sales quickly"
      ),
      features: [
        t("Configuration rapide", "Quick setup"),
        t("Prix accessible", "Affordable pricing"),
        t("Support dédié", "Dedicated support")
      ]
    },
    {
      icon: "fas fa-building",
      title: t("Groupes & franchises", "Groups & Franchises"),
      description: t(
        "Gestion centralisée de plusieurs établissements avec branding unifié",
        "Centralized management of multiple locations with unified branding"
      ),
      features: [
        t("Multi-établissements", "Multi-location"),
        t("Rapports consolidés", "Consolidated reports"),
        t("Gestion centralisée", "Centralized management")
      ]
    },
    {
      icon: "fas fa-cloud-meatball",
      title: t("Dark kitchens", "Dark Kitchens"),
      description: t(
        "Solution optimisée pour la livraison et le click & collect",
        "Solution optimized for delivery and click & collect"
      ),
      features: [
        t("100% digital", "100% digital"),
        t("Zones de livraison", "Delivery zones"),
        t("KDS intégré", "Integrated KDS")
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {t("Solutions adaptées", "Tailored Solutions")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              "Nous accompagnons tous types d'établissements dans leur transformation digitale",
              "We support all types of establishments in their digital transformation"
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="glass-card p-8 rounded-xl text-center hover-lift">
              <div className="w-24 h-24 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${solution.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-poppins font-semibold mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {solution.description}
              </p>
              <ul className="text-left space-y-2 text-gray-300">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <i className="fas fa-check text-primary-500"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
