import { useLanguage } from "./language-provider";
import { useState, useEffect } from "react";

export function RevenueStats() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('revenue-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: t("Chiffre d'affaires moyen AVANT", "Average revenue BEFORE"),
      value: "€3,200",
      period: t("/mois", "/month"),
      icon: "fas fa-chart-line-down",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      label: t("Chiffre d'affaires moyen APRÈS", "Average revenue AFTER"), 
      value: "€8,500",
      period: t("/mois", "/month"),
      icon: "fas fa-rocket",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      label: t("Augmentation moyenne", "Average increase"),
      value: "+165%",
      period: t("en 6 mois", "in 6 months"),
      icon: "fas fa-trending-up",
      color: "text-primary-400",
      bgColor: "bg-primary-500/10"
    },
    {
      label: t("Retour sur investissement", "Return on investment"),
      value: "420%",
      period: t("première année", "first year"),
      icon: "fas fa-coins",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    }
  ];

  const CountUpNumber = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
    const [count, setCount] = useState("0");
    
    useEffect(() => {
      if (!isVisible) return;
      
      // Extract number from string like "€8,500" or "+165%"
      const numMatch = target.match(/[\d,]+/);
      if (!numMatch) {
        setCount(target);
        return;
      }
      
      const targetNum = parseInt(numMatch[0].replace(',', ''));
      const prefix = target.split(numMatch[0])[0];
      const suffix = target.split(numMatch[0])[1];
      
      let currentNum = 0;
      const increment = targetNum / (duration / 50);
      
      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          currentNum = targetNum;
          clearInterval(timer);
        }
        
        const formattedNum = Math.floor(currentNum).toLocaleString();
        setCount(`${prefix}${formattedNum}${suffix}`);
      }, 50);
      
      return () => clearInterval(timer);
    }, [isVisible, target, duration]);
    
    return <span>{count}</span>;
  };

  return (
    <section id="revenue-stats" className="py-20 bg-gradient-to-br from-dark-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-300 mb-6">
            {t("📈 Résultats Prouvés", "📈 Proven Results")}
          </div>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
            {t("Impact sur le chiffre d'affaires", "Revenue Impact")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Découvrez l'impact réel de SAMEATS sur les revenus de nos clients restaurateurs",
              "Discover the real impact of SAMEATS on our restaurant clients' revenue"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`neo-card p-6 md:p-8 rounded-2xl text-center group hover-lift ${
                isVisible ? 'animate-fadeInScale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${stat.icon} ${stat.color} text-2xl`}></i>
              </div>
              
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                <CountUpNumber target={stat.value} />
              </div>
              
              <p className="text-gray-400 text-sm mb-3">{stat.period}</p>
              
              <h3 className="text-gray-300 font-medium text-sm leading-tight">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="neo-card p-8 rounded-2xl inline-block max-w-2xl">
            <h3 className="text-xl md:text-2xl font-poppins font-bold mb-4 text-primary-300">
              {t("Étude basée sur 50+ restaurants", "Study based on 50+ restaurants")}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {t(
                "Résultats moyens observés sur une période de 12 mois après l'implémentation de SAMEATS. Les résultats peuvent varier selon le type d'établissement et la localisation.",
                "Average results observed over a 12-month period after SAMEATS implementation. Results may vary depending on establishment type and location."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}