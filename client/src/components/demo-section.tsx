import { useLanguage } from "./language-provider";

export function DemoSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: "fas fa-video", text: t("Démo en direct", "Live demo") },
    { icon: "fas fa-clock", text: t("30 minutes", "30 minutes") },
    { icon: "fas fa-user-tie", text: t("Expert dédié", "Dedicated expert") },
    { icon: "fas fa-gift", text: t("Sans engagement", "No commitment") },
  ];

  return (
    <section id="demo" className="py-20 bg-dark-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {t("Réservez votre démo personnalisée", "Book your personalized demo")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t(
              "Découvrez comment SAMEATS peut transformer votre restaurant en 30 minutes",
              "Discover how SAMEATS can transform your restaurant in 30 minutes"
            )}
          </p>
          
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className={`${feature.icon} text-primary-500 text-xl`}></i>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={scrollToContact}
              className="bg-primary-gradient px-8 py-4 rounded-xl font-semibold text-lg hover-lift"
            >
              {t("Réserver ma démo gratuite", "Book my free demo")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
