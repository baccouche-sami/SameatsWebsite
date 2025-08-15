// Utility functions for smooth scrolling to sections
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const scrollToContact = () => scrollToSection('contact');
export const scrollToPricing = () => scrollToSection('pricing');
export const scrollToFeatures = () => scrollToSection('features');
export const scrollToDemo = () => scrollToSection('demo');
export const scrollToAbout = () => scrollToSection('about');