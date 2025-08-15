import { useState } from 'react';
import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead, generateOrganizationSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";
import { submitContactForm, type ContactFormData } from "@/lib/api";

export default function Contact() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    restaurantType: '',
    needsApp: false,
    needsDelivery: false,
    locations: '1',
    currentSolution: '',
    urgency: 'medium',
    rgpdConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rgpdConsent) {
      setSubmitMessage(t("Veuillez accepter les conditions RGPD", "Please accept GDPR conditions"));
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        type: activeTab,
        restaurantName: formData.company, // Use company as restaurant name for quotes
        restaurantType: formData.restaurantType,
        services: [
          ...(formData.needsApp ? ['Applications mobiles'] : []),
          ...(formData.needsDelivery ? ['Système de livraison'] : [])
        ],
        timeline: formData.urgency,
        budget: formData.urgency === 'urgent' ? 'Premium' : 'Standard'
      };

      const result = await submitContactForm(contactData);
      
      if (result.success) {
        setSubmitMessage(
          t(
            `Merci ! Votre ${activeTab === 'quote' ? 'demande de devis' : 'message'} a été envoyé avec succès. Nous vous recontacterons rapidement.`,
            `Thank you! Your ${activeTab === 'quote' ? 'quote request' : 'message'} has been sent successfully. We'll contact you soon.`
          )
        );
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          restaurantType: '',
          needsApp: false,
          needsDelivery: false,
          locations: '1',
          currentSolution: '',
          urgency: 'medium',
          rgpdConsent: false
        });
      } else {
        setSubmitMessage(
          t("Erreur lors de l'envoi. Veuillez réessayer.", "Error sending. Please try again.")
        );
      }
    } catch (error) {
      setSubmitMessage(
        t("Erreur réseau. Veuillez vérifier votre connexion.", "Network error. Please check your connection.")
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 8000);
    }
  };

  const contactMethods = [
    {
      title: t("Discussion directe", "Direct chat"),
      description: t("Échangez en temps réel avec nos experts", "Chat in real-time with our experts"),
      icon: "fas fa-comments",
      action: t("Démarrer le chat", "Start chat"),
      color: "from-blue-500 to-cyan-500",
      available: true
    },
    {
      title: t("Appel téléphonique", "Phone call"),
      description: t("Programmez un appel avec notre équipe", "Schedule a call with our team"),
      icon: "fas fa-phone",
      action: t("Réserver un créneau", "Book a slot"),
      color: "from-green-500 to-emerald-500",
      available: true
    },
    {
      title: t("Démonstration live", "Live demo"),
      description: t("Découvrez SAMEATS en action", "Discover SAMEATS in action"),
      icon: "fas fa-video",
      action: t("Programmer une démo", "Schedule demo"),
      color: "from-purple-500 to-violet-500",
      available: true
    }
  ];

  const contactInfo = [
    {
      title: t("Support technique", "Technical support"),
      subtitle: t("Disponible 24/7", "Available 24/7"),
      details: ["support@sameats.com", "+33 1 23 45 67 89"],
      icon: "fas fa-headset",
      color: "text-blue-400"
    },
    {
      title: t("Ventes & Partenariats", "Sales & Partnerships"),
      subtitle: t("Lun-Ven 9h-18h", "Mon-Fri 9am-6pm"),
      details: ["sales@sameats.com", "+33 1 23 45 67 90"],
      icon: "fas fa-handshake",
      color: "text-green-400"
    },
    {
      title: t("Siège social", "Headquarters"),
      subtitle: t("Paris, France", "Paris, France"),
      details: ["123 Avenue des Champs-Élysées", "75008 Paris"],
      icon: "fas fa-building",
      color: "text-purple-400"
    }
  ];

  const restaurantTypes = [
    { value: 'restaurant', label: t('Restaurant traditionnel', 'Traditional restaurant') },
    { value: 'fast-food', label: t('Fast-food', 'Fast-food') },
    { value: 'cafe', label: t('Café / Bar', 'Café / Bar') },
    { value: 'bakery', label: t('Boulangerie', 'Bakery') },
    { value: 'pizza', label: t('Pizzeria', 'Pizzeria') },
    { value: 'dark-kitchen', label: t('Dark Kitchen', 'Dark Kitchen') },
    { value: 'food-truck', label: t('Food Truck', 'Food Truck') },
    { value: 'chain', label: t('Chaîne / Franchise', 'Chain / Franchise') }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={t(
          "Contact SAMEATS - Demandez votre devis gratuit",
          "Contact SAMEATS - Request your free quote"
        )}
        description={t(
          "Contactez SAMEATS pour une démonstration gratuite. Support technique 24/7, consultation personnalisée et devis sur mesure pour votre restaurant.",
          "Contact SAMEATS for a free demo. 24/7 technical support, personalized consultation and custom quote for your restaurant."
        )}
        keywords={t(
          "contact SAMEATS, devis restaurant, démonstration SAMEATS, support technique, consultation gratuite",
          "contact SAMEATS, restaurant quote, SAMEATS demo, technical support, free consultation"
        )}
        structuredData={generateOrganizationSchema(language)}
      />
      <ModernNavigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-[var(--background)] relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        
        <div className="container-responsive relative">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-4 sm:mb-6">
              <i className="fas fa-headset text-[var(--primary)] mr-2"></i>
              <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {t("Support 24/7 disponible", "24/7 support available")}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-[var(--text-primary)]">
                {t("Parlons de votre", "Let's talk about your")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("projet", "project")}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              {t(
                "Notre équipe d'experts est prête à vous accompagner dans la transformation digitale de votre restaurant. Obtenez une consultation gratuite et un devis personnalisé.",
                "Our team of experts is ready to support you in the digital transformation of your restaurant. Get a free consultation and personalized quote."
              )}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { value: '<2h', label: t('Temps de réponse', 'Response time') },
                { value: '500+', label: t('Restaurants clients', 'Client restaurants') },
                { value: '24/7', label: t('Support technique', 'Technical support') },
                { value: '98%', label: t('Satisfaction', 'Satisfaction') }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text-modern mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-secondary)] text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 bg-[var(--surface)] relative">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-[var(--text-primary)]">
                {t("Choisissez votre", "Choose your")}
              </span>
              <br />
              <span className="gradient-text-modern">
                {t("mode de contact", "contact method")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="modern-card p-6 sm:p-8 text-center group hover:shadow-xl transition-all duration-300 animate-fade-in-up mobile-no-hover"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${method.icon} text-lg sm:text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2">
                  {method.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {method.description}
                </p>

                <button className="btn-primary w-full touch-target text-sm sm:text-base">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[var(--background)] relative">
        <div className="absolute inset-0 line-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="modern-card p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center">
                  <i className={`${info.icon} text-3xl ${info.color} mb-4`}></i>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                    {info.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {info.subtitle}
                  </p>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-[var(--text-secondary)] text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[var(--surface)] relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Tab selector */}
            <div className="flex justify-center mb-12 animate-fade-in-up">
              <div className="modern-card p-2 rounded-2xl">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'contact'
                        ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    {t("Contact rapide", "Quick contact")}
                  </button>
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === 'quote'
                        ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <i className="fas fa-calculator mr-2"></i>
                    {t("Demande de devis", "Quote request")}
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="modern-card p-8 md:p-12 rounded-3xl animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                    {activeTab === 'contact' 
                      ? t("Contactez-nous", "Contact us")
                      : t("Demande de devis personnalisé", "Custom quote request")
                    }
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {activeTab === 'contact' 
                      ? t("Nous vous répondrons dans les 2 heures", "We'll respond within 2 hours")
                      : t("Recevez votre devis détaillé sous 24h", "Receive your detailed quote within 24h")
                    }
                  </p>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                      {t("Nom complet", "Full name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                      placeholder={t("Jean Dupont", "John Doe")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                      {t("Email professionnel", "Business email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                      placeholder={t("jean@restaurant.com", "john@restaurant.com")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                      {t("Téléphone", "Phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                      placeholder={t("+33 1 23 45 67 89", "+1 234 567 890")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                      {t("Nom du restaurant", "Restaurant name")} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                      placeholder={t("Chez Marcel", "Marcel's Restaurant")}
                    />
                  </div>
                </div>

                {/* Quote-specific fields */}
                {activeTab === 'quote' && (
                  <div className="space-y-6 p-6 bg-[var(--background)]/50 rounded-2xl border border-[var(--border)]">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] flex items-center">
                      <i className="fas fa-restaurant text-[var(--primary)] mr-2"></i>
                      {t("Informations sur votre restaurant", "About your restaurant")}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                          {t("Type de restaurant", "Restaurant type")} *
                        </label>
                        <select
                          name="restaurantType"
                          value={formData.restaurantType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                        >
                          <option value="">{t("Sélectionnez un type", "Select a type")}</option>
                          {restaurantTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                          {t("Nombre d'emplacements", "Number of locations")}
                        </label>
                        <select
                          name="locations"
                          value={formData.locations}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                        >
                          <option value="1">1 {t("restaurant", "restaurant")}</option>
                          <option value="2-5">2-5 {t("restaurants", "restaurants")}</option>
                          <option value="6-15">6-15 {t("restaurants", "restaurants")}</option>
                          <option value="16+">16+ {t("restaurants", "restaurants")}</option>
                        </select>
                      </div>
                    </div>

                    {/* Services needed */}
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-[var(--text-primary)]">
                        {t("Services souhaités", "Desired services")}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex items-center space-x-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl cursor-pointer hover:border-[var(--primary)]/50 transition-colors">
                          <input
                            type="checkbox"
                            name="needsApp"
                            checked={formData.needsApp}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[var(--primary)] border-[var(--border)] rounded focus:ring-[var(--primary)]"
                          />
                          <span className="text-[var(--text-primary)] font-medium">
                            {t("Applications mobiles", "Mobile apps")}
                          </span>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl cursor-pointer hover:border-[var(--primary)]/50 transition-colors">
                          <input
                            type="checkbox"
                            name="needsDelivery"
                            checked={formData.needsDelivery}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-[var(--primary)] border-[var(--border)] rounded focus:ring-[var(--primary)]"
                          />
                          <span className="text-[var(--text-primary)] font-medium">
                            {t("Système de livraison", "Delivery system")}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                        {t("Solution actuelle", "Current solution")}
                      </label>
                      <input
                        type="text"
                        name="currentSolution"
                        value={formData.currentSolution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                        placeholder={t("Ex: Aucune, UberEats uniquement, autre solution...", "Ex: None, UberEats only, other solution...")}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                        {t("Urgence du projet", "Project urgency")}
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors"
                      >
                        <option value="low">{t("Pas d'urgence", "No urgency")}</option>
                        <option value="medium">{t("Dans le mois", "Within a month")}</option>
                        <option value="high">{t("Dans la semaine", "Within a week")}</option>
                        <option value="urgent">{t("Immédiat", "Immediate")}</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-3">
                    {activeTab === 'contact' 
                      ? t("Votre message", "Your message")
                      : t("Décrivez vos besoins spécifiques", "Describe your specific needs")
                    } *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors resize-none"
                    placeholder={activeTab === 'contact' 
                      ? t("Bonjour, j'aimerais en savoir plus sur SAMEATS...", "Hello, I would like to know more about SAMEATS...")
                      : t("Décrivez votre situation actuelle, vos objectifs, défis particuliers...", "Describe your current situation, objectives, specific challenges...")
                    }
                  />
                </div>

                {/* RGPD Consent */}
                <div className="p-6 bg-[var(--background)]/50 rounded-2xl border border-[var(--border)]">
                  <label className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      name="rgpdConsent"
                      checked={formData.rgpdConsent}
                      onChange={handleInputChange}
                      required
                      className="w-6 h-6 text-[var(--primary)] border-[var(--border)] rounded focus:ring-[var(--primary)] mt-1 flex-shrink-0"
                    />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {t(
                        "J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en nous contactant à privacy@sameats.com.",
                        "I accept that my personal data be used to contact me regarding my request. In accordance with GDPR, you can exercise your rights of access, rectification and deletion by contacting us at privacy@sameats.com."
                      )}
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.rgpdConsent}
                    className="btn-primary text-lg px-12 py-4 rounded-2xl font-semibold group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center space-x-3 relative z-10">
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          <span>{t("Envoi en cours...", "Sending...")}</span>
                        </>
                      ) : (
                        <>
                          <i className={activeTab === 'contact' ? "fas fa-paper-plane" : "fas fa-calculator"}></i>
                          <span>
                            {activeTab === 'contact' 
                              ? t("Envoyer le message", "Send message")
                              : t("Recevoir mon devis", "Get my quote")
                            }
                          </span>
                          <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </>
                      )}
                    </span>
                  </button>
                  
                  {/* Submit message */}
                  {submitMessage && (
                    <div className={`mt-6 p-4 rounded-xl text-center font-medium ${
                      submitMessage.includes('Merci') || submitMessage.includes('Thank') 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                  
                  <p className="text-[var(--text-muted)] text-sm mt-4">
                    {activeTab === 'contact' 
                      ? t("Réponse garantie sous 2 heures", "Response guaranteed within 2 hours")
                      : t("Devis détaillé envoyé sous 24 heures", "Detailed quote sent within 24 hours")
                    }
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-16 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              {t("Questions fréquentes", "Frequently asked questions")}
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              {t("Trouvez rapidement des réponses à vos questions", "Quickly find answers to your questions")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: t("Quel est le délai de mise en service ?", "What is the setup time?"),
                answer: t("En moyenne 2-3 semaines", "Average 2-3 weeks"),
                icon: "fas fa-clock"
              },
              {
                question: t("Y a-t-il des frais cachés ?", "Are there hidden fees?"),
                answer: t("Tarification 100% transparente", "100% transparent pricing"),
                icon: "fas fa-euro-sign"
              },
              {
                question: t("Le support est-il inclus ?", "Is support included?"),
                answer: t("Support 24/7 inclus", "24/7 support included"),
                icon: "fas fa-headset"
              },
              {
                question: t("Puis-je essayer avant d'acheter ?", "Can I try before buying?"),
                answer: t("Démo gratuite disponible", "Free demo available"),
                icon: "fas fa-play-circle"
              },
              {
                question: t("Que se passe-t-il si je change d'avis ?", "What if I change my mind?"),
                answer: t("Garantie satisfait ou remboursé 30j", "30-day money-back guarantee"),
                icon: "fas fa-shield-alt"
              },
              {
                question: t("Mes données sont-elles sécurisées ?", "Is my data secure?"),
                answer: t("Conformité RGPD et sécurité bancaire", "GDPR compliance and banking security"),
                icon: "fas fa-lock"
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="modern-card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${faq.icon} text-white`}></i>
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                  {faq.question}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              {t("Voir toutes les FAQ", "View all FAQs")}
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
}