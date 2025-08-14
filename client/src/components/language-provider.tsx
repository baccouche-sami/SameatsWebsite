import { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = (fr: string, en: string) => {
    return language === 'fr' ? fr : en;
  };

  useEffect(() => {
    // Update document language
    document.documentElement.lang = language;
    
    // Update page title and meta description
    const title = language === 'fr' 
      ? 'SAMEATS - Solution de commande en ligne pour restaurants'
      : 'SAMEATS - Online ordering solution for restaurants';
    const description = language === 'fr'
      ? 'Solution complète de commande en ligne pour restaurants : site web, apps mobiles, back-office. Installation 500€ + 1 mois gratuit.'
      : 'Complete online ordering solution for restaurants: website, mobile apps, back-office. €500 setup + 1 month free.';
      
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = description;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
