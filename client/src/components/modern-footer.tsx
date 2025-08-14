import { Link } from "wouter";
import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

export function ModernFooter() {
  const { t, language, setLanguage } = useLanguage();

  const footerSections = [
    {
      title: t("Produit", "Product"),
      links: [
        { name: t("Fonctionnalités", "Features"), href: "/features" },
        { name: t("Tarifs", "Pricing"), href: "/pricing" },
        { name: t("Démonstration", "Demo"), href: "/contact" },
        { name: t("Intégrations", "Integrations"), href: "/features" }
      ]
    },
    {
      title: t("Entreprise", "Company"),
      links: [
        { name: t("À propos", "About"), href: "/about" },
        { name: t("Contact", "Contact"), href: "/contact" },
        { name: t("Blog", "Blog"), href: "#" },
        { name: t("Carrières", "Careers"), href: "#" }
      ]
    },
    {
      title: t("Support", "Support"),
      links: [
        { name: t("Centre d'aide", "Help Center"), href: "#" },
        { name: t("Documentation", "Documentation"), href: "#" },
        { name: t("Formation", "Training"), href: "#" },
        { name: t("Statut", "Status"), href: "#" }
      ]
    },
    {
      title: t("Légal", "Legal"),
      links: [
        { name: t("Confidentialité", "Privacy"), href: "#" },
        { name: t("Conditions", "Terms"), href: "#" },
        { name: t("Cookies", "Cookies"), href: "#" },
        { name: t("RGPD", "GDPR"), href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#", name: "Twitter" },
    { icon: "fab fa-linkedin", href: "#", name: "LinkedIn" },
    { icon: "fab fa-facebook", href: "#", name: "Facebook" },
    { icon: "fab fa-instagram", href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/">
                <div className="flex items-center space-x-3 mb-6 cursor-pointer group">
                  <img 
                    src={sameatsLogo} 
                    alt="SAMEATS" 
                    className="h-10 w-auto transition-transform group-hover:scale-105"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    SAMEATS
                  </span>
                </div>
              </Link>
              
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-md">
                {t(
                  "La solution complète pour digitaliser votre restaurant sans commission. Plus de 500 restaurants nous font confiance.",
                  "The complete solution to digitize your restaurant without commission. Over 500 restaurants trust us."
                )}
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                  {t("Restez informé", "Stay updated")}
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder={t("Votre email", "Your email")}
                    className="flex-1 px-4 py-2.5 bg-[var(--surface-light)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  />
                  <button className="px-6 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[var(--surface-light)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href}>
                            <span className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer text-sm">
                              {link.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-[var(--text-muted)] text-sm">
              © {new Date().getFullYear()} SAMEATS. {t("Tous droits réservés.", "All rights reserved.")}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-4">
              <span className="text-[var(--text-muted)] text-sm">
                {t("Langue:", "Language:")}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    language === 'fr'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    language === 'en'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                  }`}
                >
                  🇺🇸 EN
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-[var(--primary)]"></i>
                <span>contact@sameats.com</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-[var(--primary)]"></i>
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/contact">
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-4 rounded-xl shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="font-semibold mb-1">
                  {t("Prêt à commencer ?", "Ready to get started?")}
                </div>
                <div className="text-sm opacity-90">
                  {t("Contactez-nous dès maintenant", "Contact us now")}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}