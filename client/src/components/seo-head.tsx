import { useEffect } from 'react';
import { useLanguage } from './language-provider';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: any;
}

export function SEOHead({ 
  title, 
  description, 
  keywords = '',
  ogImage = '',
  canonical = '',
  structuredData = null
}: SEOHeadProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Set page title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) ||
                  document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');
    updateMeta('language', language);

    // Open Graph tags
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:type', 'website');
    updateMeta('og:locale', language === 'fr' ? 'fr_FR' : 'en_US');
    updateMeta('og:site_name', 'SAMEATS');
    
    if (ogImage) {
      updateMeta('og:image', ogImage);
      updateMeta('og:image:alt', title);
    }

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    if (ogImage) updateMeta('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Structured data
    if (structuredData) {
      let script = document.querySelector('#structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', 'structured-data');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Language alternatives
    const setLangAlternate = (lang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const currentPath = window.location.pathname;
    setLangAlternate('fr', `https://sameats.com${currentPath}`);
    setLangAlternate('en', `https://sameats.com/en${currentPath}`);
    setLangAlternate('x-default', `https://sameats.com${currentPath}`);

  }, [title, description, keywords, ogImage, canonical, structuredData, language]);

  return null;
}

// Helper function to generate structured data
export const generateOrganizationSchema = (language: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SAMEATS",
  "description": language === 'fr' 
    ? "Solution complète de commande en ligne pour restaurants sans commission"
    : "Complete online ordering solution for restaurants without commission",
  "url": "https://sameats.com",
  "logo": "https://sameats.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-23-45-67-89",
    "contactType": "customer service",
    "availableLanguage": ["French", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Avenue des Champs-Élysées",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://linkedin.com/company/sameats",
    "https://twitter.com/sameats",
    "https://facebook.com/sameats"
  ]
});

export const generateProductSchema = (language: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SAMEATS",
  "description": language === 'fr'
    ? "Plateforme de commande en ligne complète pour restaurants avec site web, applications mobiles et back-office"
    : "Complete online ordering platform for restaurants with website, mobile apps and back-office",
  "brand": {
    "@type": "Brand",
    "name": "SAMEATS"
  },
  "offers": {
    "@type": "Offer",
    "price": "69",
    "priceCurrency": "EUR",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "SAMEATS"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500"
  }
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});