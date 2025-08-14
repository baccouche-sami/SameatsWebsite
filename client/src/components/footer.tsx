import { Link } from "wouter";
import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

export function Footer() {
  const { t } = useLanguage();

  const navigation = [
    {
      title: t("Navigation", "Navigation"),
      links: [
        { name: t("Accueil", "Home"), href: "/" },
        { name: t("Fonctionnalités", "Features"), href: "/features" },
        { name: t("Tarifs", "Pricing"), href: "/pricing" },
        { name: t("À Propos", "About"), href: "/about" },
        { name: t("Contact", "Contact"), href: "/contact" }
      ]
    },
    {
      title: t("Solutions", "Solutions"),
      links: [
        { name: t("Restaurant traditionnel", "Traditional restaurant"), href: "/features" },
        { name: t("Fast Food", "Fast Food"), href: "/features" },
        { name: t("Pizzeria", "Pizzeria"), href: "/features" },
        { name: t("Multi-établissements", "Multi-location"), href: "/features" },
        { name: t("Dark Kitchen", "Dark Kitchen"), href: "/features" }
      ]
    },
    {
      title: t("Support", "Support"),
      links: [
        { name: t("Centre d'aide", "Help Center"), href: "/contact" },
        { name: t("Documentation", "Documentation"), href: "/contact" },
        { name: t("Tutoriels", "Tutorials"), href: "/contact" },
        { name: t("Support technique", "Technical Support"), href: "/contact" },
        { name: t("Formation", "Training"), href: "/contact" }
      ]
    },
    {
      title: t("Légal", "Legal"),
      links: [
        { name: t("Mentions légales", "Legal Notice"), href: "/contact" },
        { name: t("Politique de confidentialité", "Privacy Policy"), href: "/contact" },
        { name: t("CGU", "Terms of Service"), href: "/contact" },
        { name: t("RGPD", "GDPR"), href: "/contact" },
        { name: t("Cookies", "Cookies"), href: "/contact" }
      ]
    }
  ];

  const contact = {
    address: [
      "123 Avenue des Champs-Élysées",
      "75008 Paris, France"
    ],
    phone: "+33 1 23 45 67 89",
    email: "contact@sameats.com"
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "fab fa-linkedin", href: "#" },
    { name: "Twitter", icon: "fab fa-twitter", href: "#" },
    { name: "Facebook", icon: "fab fa-facebook", href: "#" },
    { name: "Instagram", icon: "fab fa-instagram", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-800 to-dark-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={sameatsLogo} 
                alt="SAMEATS" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed mb-6">
                {t(
                  "La solution complète pour digitaliser votre restaurant sans commission. Site web, applications mobiles et back-office professionnel.",
                  "The complete solution to digitize your restaurant without commission. Website, mobile apps and professional back-office."
                )}
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-map-marker-alt text-primary-400 w-4"></i>
                <div>
                  {contact.address.map((line, index) => (
                    <div key={index} className="text-sm">{line}</div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-phone text-primary-400 w-4"></i>
                <span className="text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-envelope text-primary-400 w-4"></i>
                <span className="text-sm">{contact.email}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-dark-600 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          {navigation.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <span className="text-gray-400 hover:text-primary-400 transition-colors text-sm cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value proposition banner */}
        <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              {t("Prêt à commencer ?", "Ready to get started?")}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t(
                "Rejoignez plus de 500 restaurants qui nous font confiance pour développer leurs ventes en ligne",
                "Join over 500 restaurants who trust us to grow their online sales"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary px-8 py-3 rounded-xl font-semibold hover-lift">
                  {t("Demander une démo", "Request a demo")}
                </button>
              </Link>
              <Link href="/pricing">
                <button className="btn-secondary px-8 py-3 rounded-xl font-semibold hover-lift">
                  {t("Voir les tarifs", "See pricing")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 SAMEATS. {t("Tous droits réservés.", "All rights reserved.")}
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-green-400"></i>
                {t("100% sécurisé", "100% secure")}
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-percent text-primary-400"></i>
                {t("0% commission", "0% commission")}
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock text-secondary-400"></i>
                {t("Support 24/7", "24/7 Support")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}