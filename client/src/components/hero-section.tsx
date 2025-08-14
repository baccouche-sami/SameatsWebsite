import { useLanguage } from "./language-provider";
import { ThreeHeroBackground } from "./three-hero-background";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

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
          {/* Logo showcase */}
          <div className="mb-8 animate-fadeInScale">
            <img 
              src={sameatsLogo} 
              alt="SAMEATS"
              className="h-16 md:h-20 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 md:mb-8 leading-tight animate-slideInUp">
            <span className="block mb-2 md:mb-4">
              {t("Vendez en ligne sans commission", "Sell online without commission")}
            </span>
            <span className="gradient-text block">
              {t("Site web + App mobile inclus", "Website + Mobile app included")}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            {t(
              "Système de commande en ligne complet alimenté par la technologie UpMenu. Lancez votre boutique en ligne en quelques minutes.",
              "Complete online ordering system powered by UpMenu technology. Launch your online store in minutes."
            )}
            <br />
            <span className="gradient-text font-semibold">
              {t("Installation 500 € + 1 mois gratuit", "€500 setup + 1 month free")}
            </span>
          </p>
          
          {/* UpMenu Partnership Badge */}
          <div className="mb-8 animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-3 bg-primary-500/10 border border-primary-500/20 rounded-2xl px-6 py-3">
              <i className="fas fa-handshake text-primary-400"></i>
              <span className="text-sm font-medium text-primary-300">
                {t("Technologie UpMenu - Partenaire officiel France", "UpMenu Technology - Official France Partner")}
              </span>
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
