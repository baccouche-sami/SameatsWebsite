import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead, generateOrganizationSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function About() {
  const { t, language } = useLanguage();

  const stats = [
    {
      number: "500+",
      label: t("Restaurants clients", "Restaurant clients"),
      icon: "fas fa-store"
    },
    {
      number: "25+",
      label: t("Pays", "Countries"),
      icon: "fas fa-globe"
    },
    {
      number: "1M+",
      label: t("Commandes traitées", "Orders processed"),
      icon: "fas fa-shopping-cart"
    },
    {
      number: "99.9%",
      label: t("Uptime garanti", "Guaranteed uptime"),
      icon: "fas fa-shield-alt"
    }
  ];

  const team = [
    {
      name: "Marc Dubois",
      role: t("CEO & Fondateur", "CEO & Founder"),
      description: t("15 ans d'expérience dans la tech et la restauration", "15 years experience in tech and restaurants"),
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sophie Martin",
      role: t("CTO", "CTO"),
      description: t("Experte en développement de plateformes scalables", "Expert in scalable platform development"),
      image: "/api/placeholder/300/300"
    },
    {
      name: "Thomas Leroy",
      role: t("Directeur Commercial", "Sales Director"),
      description: t("Spécialiste de l'accompagnement des restaurateurs", "Restaurant owner support specialist"),
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      title: t("Innovation", "Innovation"),
      description: t("Nous développons constamment de nouvelles fonctionnalités", "We constantly develop new features"),
      icon: "fas fa-lightbulb"
    },
    {
      title: t("Simplicité", "Simplicity"),
      description: t("Des outils intuitifs pour tous les restaurateurs", "Intuitive tools for all restaurant owners"),
      icon: "fas fa-heart"
    },
    {
      title: t("Transparence", "Transparency"),
      description: t("Pas de frais cachés, pas de commission sur vos ventes", "No hidden fees, no commission on your sales"),
      icon: "fas fa-handshake"
    },
    {
      title: t("Support", "Support"),
      description: t("Une équipe dédiée pour votre réussite", "A dedicated team for your success"),
      icon: "fas fa-users"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter">
      <SEOHead
        title={t(
          "À Propos SAMEATS - Notre mission et notre équipe",
          "About SAMEATS - Our mission and team"
        )}
        description={t(
          "Découvrez l'histoire de SAMEATS, notre mission de démocratiser la vente en ligne pour restaurants sans commission. Plus de 500 clients dans 25 pays.",
          "Discover SAMEATS story, our mission to democratize online sales for restaurants without commission. Over 500 clients in 25 countries."
        )}
        keywords={t(
          "à propos SAMEATS, équipe SAMEATS, mission restaurant, histoire SAMEATS",
          "about SAMEATS, SAMEATS team, restaurant mission, SAMEATS story"
        )}
        structuredData={generateOrganizationSchema(language)}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
              {t("🚀 À Propos", "🚀 About Us")}
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
              {t("Notre mission", "Our mission")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {t(
                "Démocratiser la vente en ligne pour tous les restaurants, sans commission, avec des outils professionnels et un accompagnement personnalisé.",
                "Democratize online sales for all restaurants, without commission, with professional tools and personalized support."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-dark-700 to-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center neo-card p-6 rounded-2xl hover-lift">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
                {t("Notre histoire", "Our story")}
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  {t(
                    "SAMEATS est né de la frustration de voir trop de restaurateurs perdre leurs marges avec les plateformes de livraison traditionnelles.",
                    "SAMEATS was born from the frustration of seeing too many restaurant owners lose their margins with traditional delivery platforms."
                  )}
                </p>
                <p>
                  {t(
                    "En 2020, notre équipe a décidé de créer une alternative : une solution complète qui permet aux restaurants de vendre directement à leurs clients, sans commission.",
                    "In 2020, our team decided to create an alternative: a complete solution that allows restaurants to sell directly to their customers, without commission."
                  )}
                </p>
                <p>
                  {t(
                    "Aujourd'hui, plus de 500 restaurants nous font confiance dans 25 pays pour développer leur activité en ligne.",
                    "Today, more than 500 restaurants trust us in 25 countries to develop their online business."
                  )}
                </p>
              </div>
            </div>
            <div className="neo-card p-8 rounded-3xl">
              <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                <i className="fas fa-users text-6xl text-primary-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-dark-700 to-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Nos valeurs", "Our values")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t(
                "Les principes qui guident notre approche et notre relation avec nos clients",
                "The principles that guide our approach and our relationship with our clients"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="neo-card p-8 rounded-2xl hover-lift group text-center">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Notre équipe", "Our team")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t(
                "Des experts passionnés qui travaillent chaque jour pour votre réussite",
                "Passionate experts who work every day for your success"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="neo-card p-8 rounded-3xl hover-lift group text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-user text-4xl text-primary-400"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 gradient-text">
              {t("Rejoignez l'aventure", "Join the adventure")}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t(
                "Découvrez comment SAMEATS peut transformer votre restaurant et booster vos ventes en ligne",
                "Discover how SAMEATS can transform your restaurant and boost your online sales"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Demander une démo", "Request a demo")}
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
                {t("Nous contacter", "Contact us")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}