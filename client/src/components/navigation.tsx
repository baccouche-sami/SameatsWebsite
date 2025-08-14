import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: t("Accueil", "Home"), href: "/", id: "home" },
    { name: t("Fonctionnalités", "Features"), href: "/features", id: "features" },
    { name: t("Tarifs", "Pricing"), href: "/pricing", id: "pricing" },
    { name: t("À Propos", "About"), href: "/about", id: "about" },
    { name: t("Contact", "Contact"), href: "/contact", id: "contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-700/50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={sameatsLogo} 
                alt="SAMEATS" 
                className="h-8 md:h-10 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.id} href={item.href}>
                <span className={`hover:text-primary-500 transition-colors cursor-pointer font-medium ${
                  isActive(item.href) ? 'text-primary-400' : 'text-white'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-dark-600 rounded-lg p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-primary-gradient text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-primary-gradient text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <Link href="/contact">
              <button className="bg-primary-gradient px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all hover-lift">
                {t("Démo gratuite", "Free Demo")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
