import { useState, useEffect } from "react";
import { useLanguage } from "./language-provider";

export function ModernClientShowcase() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: "Pizza Paradise",
      type: t("Pizzeria", "Pizzeria"),
      revenue: "+45%",
      orders: "2,500+",
      quote: t(
        "SAMEATS a révolutionné notre business. Nos ventes ont explosé !",
        "SAMEATS revolutionized our business. Our sales have exploded!"
      ),
      avatar: "🍕",
      growth: "+45%",
      metric: t("de CA en plus", "revenue increase")
    },
    {
      name: "Burger Street",
      type: t("Fast Food", "Fast Food"),
      revenue: "+60%",
      orders: "4,200+",
      quote: t(
        "Interface intuitive et support exceptionnel. Je recommande vivement !",
        "Intuitive interface and exceptional support. I highly recommend!"
      ),
      avatar: "🍔",
      growth: "+60%",
      metric: t("de commandes", "more orders")
    },
    {
      name: "Sushi Zen",
      type: t("Restaurant japonais", "Japanese restaurant"),
      revenue: "+38%",
      orders: "1,800+",
      quote: t(
        "La solution parfaite pour notre restaurant. Clients ravis !",
        "The perfect solution for our restaurant. Delighted customers!"
      ),
      avatar: "🍣",
      growth: "+38%",
      metric: t("de satisfaction", "satisfaction rate")
    },
    {
      name: "Taco Fiesta",
      type: t("Cuisine mexicaine", "Mexican cuisine"),
      revenue: "+52%",
      orders: "3,100+",
      quote: t(
        "Grâce à SAMEATS, nous avons doublé notre chiffre d'affaires !",
        "Thanks to SAMEATS, we doubled our revenue!"
      ),
      avatar: "🌮",
      growth: "+52%",
      metric: t("de croissance", "growth")
    }
  ];

  const stats = [
    { value: "500+", label: t("Restaurants", "Restaurants") },
    { value: "25", label: t("Pays", "Countries") },
    { value: "98%", label: t("Satisfaction", "Satisfaction") },
    { value: "€2M+", label: t("CA généré", "Revenue generated") }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--surface)]/30"></div>
      <div className="absolute inset-0 line-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
            <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Témoignages clients", "Client testimonials")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Ils nous font", "They trust")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("confiance", "us")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {t(
              "Découvrez comment nos clients transforment leur business avec SAMEATS",
              "Discover how our clients transform their business with SAMEATS"
            )}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Testimonial Carousel */}
          <div className="animate-slide-in-left">
            <div className="relative">
              {/* Background Card */}
              <div className="modern-card p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>
                
                {/* Quote Icon */}
                <div className="text-6xl text-[var(--primary)]/20 mb-6 font-serif">"</div>
                
                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-2xl mr-4">
                    {clients[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--text-primary)]">
                      {clients[currentIndex].name}
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      {clients[currentIndex].type}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-6 italic">
                  {clients[currentIndex].quote}
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[var(--surface-light)] rounded-xl">
                    <div className="text-2xl font-bold gradient-text-modern">
                      {clients[currentIndex].growth}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {clients[currentIndex].metric}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[var(--surface-light)] rounded-xl">
                    <div className="text-2xl font-bold gradient-text-modern">
                      {clients[currentIndex].orders}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {t("commandes/mois", "orders/month")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[var(--primary)] scale-125'
                        : 'bg-[var(--border)] hover:bg-[var(--border-light)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="modern-card p-6 text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text-modern mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4 text-center">
                {t("Certifications et partenaires", "Certifications and partners")}
              </h4>
              <div className="flex items-center justify-center space-x-6 opacity-60">
                <div className="w-12 h-12 bg-[var(--surface)] rounded-lg flex items-center justify-center">
                  <i className="fas fa-shield-alt text-[var(--success)] text-xl"></i>
                </div>
                <div className="w-12 h-12 bg-[var(--surface)] rounded-lg flex items-center justify-center">
                  <i className="fas fa-credit-card text-[var(--primary)] text-xl"></i>
                </div>
                <div className="w-12 h-12 bg-[var(--surface)] rounded-lg flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-[var(--accent)] text-xl"></i>
                </div>
                <div className="w-12 h-12 bg-[var(--surface)] rounded-lg flex items-center justify-center">
                  <i className="fas fa-cloud text-blue-400 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="inline-flex items-center px-6 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-full">
            <span className="text-[var(--text-secondary)] mr-3">
              {t("Vous aussi, rejoignez-les", "You too, join them")}
            </span>
            <button className="px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-sm font-medium rounded-lg hover:scale-105 transition-transform">
              {t("Commencer", "Get started")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}