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
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            right: '10%',
            bottom: '20%',
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] rounded-full mb-8">
              <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-[var(--text-secondary)]">
                {t("Solution complète sans commission", "Complete solution without commission")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
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
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
              {t(
                "La solution complète pour créer votre site de commande, vos applications mobiles et gérer votre business en ligne",
                "The complete solution to create your ordering website, mobile apps and manage your business online"
              )}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-2 bg-[var(--surface)]/30 backdrop-blur-sm border border-[var(--border)] rounded-full text-sm text-[var(--text-secondary)] hover:border-[var(--primary)]/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <i className={`${feature.icon} text-[var(--primary)] mr-2`}></i>
                  {feature.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 text-lg">
                  <span>{t("Commencer gratuitement", "Start for free")}</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </Link>
              
              <Link href="/features">
                <button className="px-8 py-4 bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)] text-[var(--text-primary)] font-semibold rounded-xl hover:border-[var(--primary)]/50 hover:bg-[var(--surface)]/70 transition-all duration-300 text-lg">
                  <i className="fas fa-play mr-2"></i>
                  {t("Voir la démo", "Watch demo")}
                </button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[var(--text-secondary)] text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}