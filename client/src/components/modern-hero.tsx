import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "./language-provider";

export function ModernHero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: "fas fa-globe", text: t("Site web professionnel", "Professional website") },
    { icon: "fas fa-mobile-alt", text: t("Applications mobiles", "Mobile apps") },
    { icon: "fas fa-chart-line", text: t("Back-office complet", "Complete back-office") },
    { icon: "fas fa-percent", text: t("0% commission", "0% commission") }
  ];

  const stats = [
    { number: "500+", label: t("Restaurants", "Restaurants") },
    { number: "25", label: t("Pays", "Countries") },
    { number: "98%", label: t("Satisfaction", "Satisfaction") },
    { number: "24/7", label: t("Support", "Support") }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]">
        {/* Gradient Orbs - Hidden on mobile for performance */}
        <div 
          className="hidden sm:block absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full opacity-10 sm:opacity-15 lg:opacity-20 blur-2xl sm:blur-3xl transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            left: '5%',
            top: '10%',
          }}
        />
        <div 
          className="hidden sm:block absolute w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full opacity-8 sm:opacity-12 lg:opacity-15 blur-2xl sm:blur-3xl transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px)`,
            right: '5%',
            bottom: '10%',
          }}
        />
        
        {/* Grid Pattern - Simplified on mobile */}
        <div 
          className="absolute inset-0 opacity-3 sm:opacity-5"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '30px 30px sm:40px sm:40px lg:50px lg:50px',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
      </div>

      <div className="relative container-responsive pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-full mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {t("Solution complète sans commission", "Complete solution without commission")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-4 sm:px-0">
              <span className="block text-[var(--text-primary)]">
                {t("Digitalisez", "Digitize")}
              </span>
              <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {t("votre restaurant", "your restaurant")}
              </span>
              <span className="block text-[var(--text-primary)]">
                {t("sans commission", "without commission")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {t(
                "La solution complète pour créer votre site de commande, vos applications mobiles et gérer votre business en ligne",
                "The complete solution to create your ordering website, mobile apps and manage your business online"
              )}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4 sm:px-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center px-3 sm:px-4 py-2 bg-[var(--surface)]/30 backdrop-blur-sm border border-[var(--border)] rounded-full text-xs sm:text-sm text-[var(--text-secondary)] hover:border-[var(--primary)]/50 transition-all duration-300 mobile-no-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <i className={`${feature.icon} text-[var(--primary)] mr-1 sm:mr-2 text-xs sm:text-sm`}></i>
                  <span className="whitespace-nowrap">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Link href="/contact">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 text-base sm:text-lg touch-target">
                  <span>{t("Commencer gratuitement", "Start for free")}</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </Link>
              
              <Link href="/features">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] text-[var(--text-primary)] font-semibold rounded-xl hover:border-[var(--primary)]/50 hover:bg-[var(--surface)]/70 transition-all duration-300 text-base sm:text-lg touch-target mobile-no-hover">
                  <i className="fas fa-play mr-2"></i>
                  {t("Voir la démo", "Watch demo")}
                </button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up p-4 sm:p-0"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[var(--text-secondary)] text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="hidden sm:block absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-[var(--border)] rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-[var(--primary)] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}