import { useState } from "react";
import { useLanguage } from "./language-provider";

export function ModernTestimonials() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Ben Salem",
      position: t("Gérant", "Manager"),
      restaurant: "T9 Foodies & Grill",
      avatar: "AB",
      quote: t(
        "SAMEATS a complètement transformé notre façon de gérer les commandes. Nos ventes ont augmenté de 45% en seulement 3 mois. L'interface est intuitive et nos clients adorent l'application mobile.",
        "SAMEATS completely transformed how we manage orders. Our sales increased by 45% in just 3 months. The interface is intuitive and our customers love the mobile app."
      ),
      rating: 5,
      metrics: {
        growth: "+45%",
        metric: t("de ventes", "sales increase"),
        orders: "2,500+",
        period: t("commandes/mois", "orders/month")
      }
    },
    {
      name: "Fatima Khelifi",
      position: t("Directrice", "Director"),
      restaurant: "Campus Food Court", 
      avatar: "FK",
      quote: t(
        "La solution SAMEATS nous a permis de centraliser tous nos points de vente en un seul système. Le support client est exceptionnel et l'équipe est toujours disponible pour nous aider.",
        "The SAMEATS solution allowed us to centralize all our points of sale in one system. Customer support is exceptional and the team is always available to help us."
      ),
      rating: 5,
      metrics: {
        growth: "+60%",
        metric: t("d'efficacité", "efficiency"),
        orders: "4,200+",
        period: t("commandes/mois", "orders/month")
      }
    },
    {
      name: "Marco Rossi",
      position: t("Propriétaire", "Owner"),
      restaurant: "Patroné Forno",
      avatar: "MR",
      quote: t(
        "En tant que pizzeria traditionnelle, nous avions besoin d'une solution moderne qui respecte notre authenticité. SAMEATS a parfaitement répondu à nos attentes avec un design élégant.",
        "As a traditional pizzeria, we needed a modern solution that respects our authenticity. SAMEATS perfectly met our expectations with an elegant design."
      ),
      rating: 5,
      metrics: {
        growth: "+52%",
        metric: t("de croissance", "growth"),
        orders: "3,100+",
        period: t("commandes/mois", "orders/month")
      }
    },
    {
      name: "Mohamed Trabelsi",
      position: t("Chef propriétaire", "Chef Owner"),
      restaurant: "Rest Sidi Bou Said",
      avatar: "MT",
      quote: t(
        "SAMEATS nous a aidés à préserver nos traditions tout en nous modernisant. Nos clients peuvent maintenant commander facilement tout en gardant l'essence de notre restaurant traditionnel.",
        "SAMEATS helped us preserve our traditions while modernizing. Our customers can now order easily while keeping the essence of our traditional restaurant."
      ),
      rating: 5,
      metrics: {
        growth: "+35%",
        metric: t("de fidélisation", "customer retention"),
        orders: "2,800+",
        period: t("commandes/mois", "orders/month")
      }
    }
  ];

  return (
    <section className="py-24 bg-[var(--surface)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 line-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-quote-left text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Témoignages clients", "Client testimonials")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Ce que disent", "What our")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("nos clients", "clients say")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            {t(
              "Découvrez les retours authentiques de nos restaurateurs partenaires sur leur expérience avec SAMEATS",
              "Discover authentic feedback from our restaurant partners about their experience with SAMEATS"
            )}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="modern-card p-8 md:p-12 text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="text-6xl text-[var(--primary)]/20 mb-6 font-serif">"</div>
              <blockquote className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed italic mb-8">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-[var(--accent)] text-xl mx-1"></i>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[var(--text-secondary)]">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-[var(--primary)] font-medium text-sm">
                    {testimonials[currentTestimonial].restaurant}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text-modern">
                    {testimonials[currentTestimonial].metrics.growth}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {testimonials[currentTestimonial].metrics.metric}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    {testimonials[currentTestimonial].metrics.orders}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {testimonials[currentTestimonial].metrics.period}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[var(--primary)] scale-125'
                      : 'bg-[var(--border)] hover:bg-[var(--primary)]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`modern-card p-6 cursor-pointer transition-all duration-300 animate-fade-in-up ${
                index === currentTestimonial
                  ? 'ring-2 ring-[var(--primary)] scale-105'
                  : 'hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[var(--text-primary)] text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-[var(--primary)] font-medium">
                    {testimonial.restaurant}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-[var(--accent)] text-xs"></i>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-sm text-[var(--text-primary)] italic leading-relaxed mb-4 line-clamp-3">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex justify-between pt-4 border-t border-[var(--border)]">
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text-modern">
                    {testimonial.metrics.growth}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {testimonial.metrics.metric}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[var(--primary)]">
                    {testimonial.metrics.orders}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {testimonial.metrics.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-4 bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border)] rounded-2xl">
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <i className="fas fa-shield-check text-[var(--success)] mr-2"></i>
              <span>{t("Témoignages vérifiés", "Verified testimonials")}</span>
            </div>
            <div className="w-px h-4 bg-[var(--border)]"></div>
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <i className="fas fa-users text-[var(--primary)] mr-2"></i>
              <span>{t("500+ restaurants satisfaits", "500+ satisfied restaurants")}</span>
            </div>
            <div className="w-px h-4 bg-[var(--border)]"></div>
            <div className="flex items-center text-sm text-[var(--text-secondary)]">
              <i className="fas fa-star text-[var(--accent)] mr-2"></i>
              <span>{t("4.9/5 satisfaction moyenne", "4.9/5 average satisfaction")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}