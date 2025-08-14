import { useEffect, useRef, useState } from 'react';
import { useLanguage } from "./language-provider";
import clientT9 from "@assets/Poste 1_1755206844217.jpg";
import clientCampus from "@assets/Poste 2_1755206844219.jpg";
import clientFirstPizza from "@assets/Poste 3_1755206844220.jpg";
import clientPatrone from "@assets/Poste 4_1755206844220.jpg";
import clientRestSidi from "@assets/Poste 5_1755206844221.jpg";

export function ClientsShowcaseSection() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const clients = [
    {
      name: "T9 Foodies & Grill",
      sector: t("Restaurant Gastronomique", "Fine Dining Restaurant"),
      location: "Paris, France",
      image: clientT9,
      testimonial: t(
        "SAMEATS a transformé notre activité. Plus de commandes, moins de stress.",
        "SAMEATS transformed our business. More orders, less stress."
      ),
      badge: t("Client depuis 2023", "Client since 2023"),
      badgeColor: "bg-green-500"
    },
    {
      name: "Campus Food Court",
      sector: t("Restauration Rapide", "Fast Food"),
      location: "Lyon, France",
      image: clientCampus,
      testimonial: t(
        "Interface intuitive et support client exceptionnel. Recommandé !",
        "Intuitive interface and exceptional customer support. Recommended!"
      ),
      badge: t("Réseau multi-établissements", "Multi-location network"),
      badgeColor: "bg-blue-500"
    },
    {
      name: "First Pizza",
      sector: t("Pizzeria", "Pizzeria"),
      location: "Marseille, France",
      image: clientFirstPizza,
      testimonial: t(
        "Nos clients adorent commander via l'app. Les commandes ont doublé !",
        "Our customers love ordering via the app. Orders have doubled!"
      ),
      badge: t("Livraison premium", "Premium delivery"),
      badgeColor: "bg-purple-500"
    },
    {
      name: "Patroné Forno",
      sector: t("Cuisine Italienne", "Italian Cuisine"),
      location: "Nice, France",
      image: clientPatrone,
      testimonial: t(
        "Solution complète et professionnelle. Parfait pour notre croissance.",
        "Complete and professional solution. Perfect for our growth."
      ),
      badge: t("Cuisine du monde", "World cuisine"),
      badgeColor: "bg-orange-500"
    },
    {
      name: "Rest Sidi Bou Said",
      sector: t("Cuisine Méditerranéenne", "Mediterranean Cuisine"),
      location: "Toulouse, France",
      image: clientRestSidi,
      testimonial: t(
        "Design élégant et fonctionnalités avancées. Nos clients sont ravis !",
        "Elegant design and advanced features. Our customers are delighted!"
      ),
      badge: t("Innovation culinaire", "Culinary innovation"),
      badgeColor: "bg-teal-500"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-dark-800 to-dark-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 left-10 w-64 h-64 bg-primary-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-secondary-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
            {t("🏆 Nos Clients", "🏆 Our Clients")}
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
            {t("Ils nous font confiance", "They trust us")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t(
              "Découvrez les restaurants qui ont choisi SAMEATS pour développer leur activité",
              "Discover the restaurants that chose SAMEATS to grow their business"
            )}
          </p>
        </div>

        {/* Client logos grid - Mobile */}
        <div className="block md:hidden mb-16">
          <div className="grid grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="neo-card p-4 rounded-xl hover-lift group cursor-pointer">
                <div className="w-full h-24 rounded-lg overflow-hidden bg-dark-600 border border-gray-700/50 mb-3">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-sm text-center group-hover:text-primary-300 transition-colors">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-400 text-center">{client.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main carousel - Desktop */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="neo-card p-8 md:p-12 rounded-3xl hover-lift group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Client image */}
                      <div className="relative">
                        <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden bg-dark-600 border-2 border-gray-700/50 group-hover:border-primary-500/30 transition-colors duration-500">
                          <img 
                            src={client.image} 
                            alt={client.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        
                        {/* Badge */}
                        <div className={`absolute top-4 left-4 ${client.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg`}>
                          {client.badge}
                        </div>
                      </div>

                      {/* Client info */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-poppins font-bold mb-2 group-hover:text-primary-300 transition-colors">
                            {client.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                            <span className="text-primary-400 font-medium">{client.sector}</span>
                            <span className="hidden sm:block">•</span>
                            <span className="flex items-center gap-1">
                              <i className="fas fa-map-marker-alt text-xs"></i>
                              {client.location}
                            </span>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <blockquote className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-primary-500 pl-6">
                          "{client.testimonial}"
                        </blockquote>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fas fa-star text-sm"></i>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm font-medium">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-dark-600 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors group border border-gray-700 hover:border-primary-500"
            >
              <i className="fas fa-chevron-left text-gray-300 group-hover:text-white"></i>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-dark-600 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors group border border-gray-700 hover:border-primary-500"
            >
              <i className="fas fa-chevron-right text-gray-300 group-hover:text-white"></i>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              {t("Découvrir leurs histoires", "Discover their stories")}
              <i className="fas fa-external-link-alt group-hover:scale-110 transition-transform"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}