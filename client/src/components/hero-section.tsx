import { useLanguage } from "./language-provider";
import { ThreeHeroBackground } from "./three-hero-background";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600">
      {/* Three.js Background */}
      <ThreeHeroBackground />
      
      {/* Enhanced Background Elements for fallback */}
      <div className="blob w-96 h-96 bg-primary-500 top-10 -right-20 animate-blob opacity-30"></div>
      <div className="blob w-80 h-80 bg-secondary-500 bottom-10 -left-20 animate-blob opacity-30" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 md:mb-8">
            <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs md:text-sm font-medium text-primary-300 mb-4 md:mb-6 animate-fadeInScale">
              {t("🚀 Solution N°1 en France", "🚀 #1 Solution in France")}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 md:mb-8 leading-tight animate-slideInUp">
            <span className="block mb-2 md:mb-4">
              {t("Votre solution de commande en ligne", "Your fully branded online ordering solution")}
            </span>
            <span className="gradient-text block">
              {t("100% personnalisée", "100% customized")}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            {t("Site web + apps iOS & Android + back-office complet.", "Website + iOS & Android apps + complete back-office.")}
            <br />
            <span className="gradient-text font-semibold">
              {t("Installation 500 € + 1 mois gratuit", "€500 setup + 1 month free")}
            </span>
          </p>
          
          {/* Mobile-first revenue highlight */}
          <div className="mb-8 md:mb-12 animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 md:p-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">+165%</div>
                <div className="text-xs md:text-sm text-gray-300">{t("CA moyen", "Avg revenue")}</div>
              </div>
              <div className="w-px h-8 bg-green-500/30 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400">€8,500</div>
                <div className="text-xs md:text-sm text-gray-300">{t("après 6 mois", "after 6 months")}</div>
              </div>
            </div>
          </div>
          
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
