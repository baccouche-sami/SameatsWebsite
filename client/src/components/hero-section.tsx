import { useLanguage } from "./language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="blob w-96 h-96 bg-primary-500 top-10 -right-20 animate-blob"></div>
      <div className="blob w-80 h-80 bg-secondary-500 bottom-10 -left-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            <span className="block">
              {t("Votre solution de commande en ligne", "Your fully branded online ordering solution")}
            </span>
            <span className="gradient-text block">
              {t("100% personnalisée", "100% customized")}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {t("Site web + apps iOS & Android + back-office complet.", "Website + iOS & Android apps + complete back-office.")}
            <br />
            <span className="gradient-text font-semibold">
              {t("Installation 500 € + 1 mois gratuit", "€500 setup + 1 month free")}
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-primary-gradient px-8 py-4 rounded-xl font-semibold text-lg hover-lift"
            >
              {t("Démarrer à 500 €", "Get started for €500")}
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="border-2 border-primary-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-500 transition-all"
            >
              {t("Demander une démo", "Request a demo")}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <i className="fas fa-rocket text-primary-500 text-xl"></i>
              <span className="font-medium">
                {t("Prêt en quelques jours", "Go live in days")}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <i className="fas fa-hand-holding-dollar text-primary-500 text-xl"></i>
              <span className="font-medium">
                {t("Sans commission sur vos ventes", "No commission on your sales")}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <i className="fas fa-headset text-primary-500 text-xl"></i>
              <span className="font-medium">
                {t("Support réactif", "Responsive support")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
