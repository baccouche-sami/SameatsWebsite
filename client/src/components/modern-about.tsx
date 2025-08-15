import { useLanguage } from "./language-provider";

export function ModernAbout() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[var(--background)] relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-6">
              <i className="fas fa-heart text-[var(--primary)] mr-2"></i>
              <span className="text-sm text-[var(--text-secondary)]">
                {t("Notre histoire", "Our story")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("À propos de", "About")}
              </span>
              <br />
              <span className="gradient-text-modern">
                SAMEATS
              </span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto">
              {t(
                "Née de 6+ années d'expérience dans l'industrie de la restauration et du fast-food, SAMEATS est la solution SaaS créée par Samkode IT Agency pour digitaliser et moderniser votre restaurant.",
                "Born from 6+ years of experience in the restaurant and fast-food industry, SAMEATS is the SaaS solution created by Samkode IT Agency to digitize and modernize your restaurant."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[var(--surface)] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">
                  {t("Notre", "Our")}
                </span>
                <br />
                <span className="gradient-text-modern">
                  {t("mission", "mission")}
                </span>
              </h2>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                {t(
                  "Nous croyons que chaque restaurant, qu'il soit petit ou grand, mérite d'avoir accès aux meilleures technologies pour prospérer dans l'ère numérique.",
                  "We believe that every restaurant, small or large, deserves access to the best technologies to thrive in the digital age."
                )}
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: t("Démocratiser la technologie", "Democratize technology"),
                    description: t("Rendre accessible la digitalisation à tous les restaurants", "Make digitization accessible to all restaurants")
                  },
                  {
                    title: t("Accompagner la croissance", "Support growth"),
                    description: t("Fournir les outils pour développer votre business", "Provide tools to grow your business")
                  },
                  {
                    title: t("Simplifier l'expérience", "Simplify the experience"),
                    description: t("Une solution tout-en-un sans complications", "An all-in-one solution without complications")
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[var(--text-secondary)] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modern-card p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "6+", label: t("Années d'expérience", "Years of experience"), icon: "fas fa-calendar-alt" },
                  { value: "500+", label: t("Restaurants clients", "Restaurant clients"), icon: "fas fa-store" },
                  { value: "25", label: t("Pays", "Countries"), icon: "fas fa-globe" },
                  { value: "98%", label: t("Satisfaction", "Satisfaction"), icon: "fas fa-heart" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className={`${stat.icon} text-white`}></i>
                    </div>
                    <div className="text-2xl font-bold gradient-text-modern mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[var(--text-secondary)] text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--background)] relative">
        <div className="absolute inset-0 line-pattern opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("Nos", "Our")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("valeurs", "values")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-rocket",
                title: t("Innovation", "Innovation"),
                description: t("Nous intégrons constamment les dernières technologies pour offrir des solutions avant-gardistes.", "We constantly integrate the latest technologies to offer cutting-edge solutions.")
              },
              {
                icon: "fas fa-users",
                title: t("Proximité", "Proximity"),
                description: t("Nous comprenons les défis de la restauration car nous venons de cette industrie.", "We understand restaurant challenges because we come from this industry.")
              },
              {
                icon: "fas fa-shield-alt",
                title: t("Fiabilité", "Reliability"),
                description: t("Des systèmes robustes et un support technique réactif pour votre tranquillité d'esprit.", "Robust systems and responsive technical support for your peace of mind.")
              }
            ].map((value, index) => (
              <div
                key={index}
                className="modern-card p-8 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  {value.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">
                {t("L'équipe", "The team")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("Samkode", "Samkode")}
              </span>
            </h2>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {t(
                "Une équipe passionnée d'experts en technologie et en restauration, dédiée à votre succès.",
                "A passionate team of technology and restaurant experts, dedicated to your success."
              )}
            </p>
          </div>

          <div className="modern-card p-8 text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-code text-3xl text-white"></i>
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Samkode IT Agency
            </h3>
            
            <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-2xl mx-auto">
              {t(
                "Fondée par des professionnels ayant plus de 6 ans d'expérience dans l'industrie de la restauration et du fast-food, Samkode IT Agency comprend intimement les défis et opportunités de ce secteur.",
                "Founded by professionals with over 6 years of experience in the restaurant and fast-food industry, Samkode IT Agency intimately understands the challenges and opportunities of this sector."
              )}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                {t("Développement", "Development")}
              </div>
              <div className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                {t("Restauration", "Restaurant")}
              </div>
              <div className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                {t("Innovation", "Innovation")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}