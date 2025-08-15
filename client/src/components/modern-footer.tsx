import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

export function ModernFooter() {
  const { t, language, setLanguage } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

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
        { name: t("Blog", "Blog"), href: "/blog" },
        { name: t("Carrières", "Careers"), href: "/careers" }
      ]
    },
    {
      title: t("Support", "Support"),
      links: [
        { name: t("Centre d'aide", "Help Center"), href: "/help" },
        { name: t("Documentation", "Documentation"), href: "/docs" },
        { name: t("Formation", "Training"), href: "/training" },
        { name: t("Statut", "Status"), href: "/status" }
      ]
    },
    {
      title: t("Légal", "Legal"),
      links: [
        { name: t("Confidentialité", "Privacy"), href: "/privacy" },
        { name: t("Conditions", "Terms"), href: "/terms" },
        { name: t("Cookies", "Cookies"), href: "/cookies" },
        { name: t("RGPD", "GDPR"), href: "/gdpr" }
      ]
    }
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "https://twitter.com/sameats_fr", name: "Twitter" },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/company/sameats", name: "LinkedIn" },
    { icon: "fab fa-facebook", href: "https://facebook.com/sameats.fr", name: "Facebook" },
    { icon: "fab fa-instagram", href: "https://instagram.com/sameats_fr", name: "Instagram" }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubscribing(true);
    setSubscriptionMessage("");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (data.success) {
        setSubscriptionMessage(t("Inscription réussie !", "Subscription successful!"));
        setNewsletterEmail("");
      } else {
        setSubscriptionMessage(t("Erreur lors de l'inscription", "Subscription failed"));
      }
    } catch (error) {
      setSubscriptionMessage(t("Erreur réseau", "Network error"));
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscriptionMessage(""), 5000);
    }
  };

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="container-responsive relative">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 cursor-pointer group">
                  <img 
                    src={sameatsLogo} 
                    alt="SAMEATS" 
                    className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105"
                  />
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    SAMEATS
                  </span>
                </div>
              </Link>
              
              <p className="text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                {t(
                  "La solution complète pour digitaliser votre restaurant sans commission. Plus de 500 restaurants nous font confiance.",
                  "The complete solution to digitize your restaurant without commission. Over 500 restaurants trust us."
                )}
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6 sm:mb-8">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3 text-sm sm:text-base">
                  {t("Restez informé", "Stay updated")}
                </h4>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t("Votre email", "Your email")}
                    className="flex-1 px-3 sm:px-4 py-2.5 bg-[var(--surface-light)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors text-sm sm:text-base touch-target"
                    required
                    disabled={isSubscribing}
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing || !newsletterEmail.trim()}
                    className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 touch-target mobile-no-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      <i className="fas fa-arrow-right"></i>
                    )}
                  </button>
                </form>
                {subscriptionMessage && (
                  <div className={`mt-2 text-xs sm:text-sm ${subscriptionMessage.includes('réussie') || subscriptionMessage.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                    {subscriptionMessage}
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[var(--surface-light)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 hover:scale-110 touch-target mobile-no-hover"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="sm:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3 sm:mb-4 text-sm sm:text-base">
                      {section.title}
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href}>
                            <span className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer text-xs sm:text-sm touch-target">
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
        <div className="py-6 sm:py-8 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-[var(--text-muted)] text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} SAMEATS. {t("Tous droits réservés.", "All rights reserved.")}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-[var(--text-muted)] text-xs sm:text-sm">
                {t("Langue:", "Language:")}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all touch-target ${
                    language === 'fr'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all touch-target ${
                    language === 'en'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                  }`}
                >
                  🇺🇸 EN
                </button>
              </div>
            </div>

            {/* Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs sm:text-sm text-[var(--text-muted)]">
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

        {/* Call to Action - Hidden on mobile footer */}
        <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/contact">
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 cursor-pointer mobile-no-hover">
              <div className="text-center">
                <div className="font-semibold mb-1 text-sm sm:text-base">
                  {t("Prêt à commencer ?", "Ready to get started?")}
                </div>
                <div className="text-xs sm:text-sm opacity-90">
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