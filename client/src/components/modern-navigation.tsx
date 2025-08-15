import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "./language-provider";
import sameatsLogo from "@assets/logo-blanc_1755211740901.png";

export function ModernNavigation() {
  const [location] = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t("Accueil", "Home"), href: "/" },
    { name: t("Fonctionnalités", "Features"), href: "/features" },
    { name: t("Clients", "Clients"), href: "/clients" },
    { name: t("Tarifs", "Pricing"), href: "/pricing" },
    { name: t("À Propos", "About"), href: "/about" },
    { name: t("Contact", "Contact"), href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)]' 
        : 'bg-transparent'
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group">
              <img 
                src={sameatsLogo} 
                alt="SAMEATS" 
                className="h-6 sm:h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                SAMEATS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={`relative py-2 px-1 text-sm font-medium transition-colors cursor-pointer group touch-target ${
                  location === item.href
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}>
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform transition-transform ${
                    location === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switcher */}
            <div className="hidden lg:flex items-center space-x-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all touch-target ${
                  language === 'fr'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all touch-target ${
                  language === 'en'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="hidden sm:flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-xs sm:text-sm font-medium rounded-xl hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 touch-target">
                <span className="hidden sm:inline">{t("Demander une démo", "Get Demo")}</span>
                <span className="sm:hidden">{t("Démo", "Demo")}</span>
                <i className="fas fa-arrow-right ml-1 sm:ml-2 text-xs"></i>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors touch-target"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg sm:text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div 
                  className={`block mx-4 px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer touch-target ${
                    location === item.href
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-light)]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between px-4 py-3 mx-4 bg-[var(--surface-light)] rounded-lg">
              <span className="text-sm text-[var(--text-muted)]">{t("Langue:", "Language:")}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all touch-target ${
                    language === 'fr'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface)]'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all touch-target ${
                    language === 'en'
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface)]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile CTA */}
            <Link href="/contact">
              <div 
                className="mx-4 mt-4 text-center py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-base font-medium rounded-xl cursor-pointer shadow-lg touch-target"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-video mr-2"></i>
                {t("Demander une démo gratuite", "Get Free Demo")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}