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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600">
      {/* Enhanced Background Elements */}
      <div className="blob w-96 h-96 bg-primary-500 top-10 -right-20 animate-blob"></div>
      <div className="blob w-80 h-80 bg-secondary-500 bottom-10 -left-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="blob w-64 h-64 bg-primary-600 top-1/2 left-1/4 animate-blob" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-500 rounded-full floating-element opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary-500 rotate-45 floating-element opacity-40" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 border-2 border-primary-500 rounded-full floating-element opacity-50" style={{ animationDelay: '5s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-300 mb-6">
              {t("🚀 Solution N°1 en France", "🚀 #1 Solution in France")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-8 leading-tight">
            <span className="block mb-4">
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="modern-button px-10 py-5 rounded-2xl font-semibold text-lg hover-lift text-white shadow-lg"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <i className="fas fa-rocket"></i>
                {t("Démarrer à 500 €", "Get started for €500")}
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="border-2 border-primary-500 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-primary-500 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-play-circle"></i>
                {t("Demander une démo", "Request a demo")}
              </span>
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
