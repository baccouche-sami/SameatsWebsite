import { useState } from 'react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead, generateOrganizationSchema } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Contact() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');
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
    rgpdConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: t("Siège social", "Headquarters"),
      details: [
        "123 Avenue des Champs-Élysées",
        "75008 Paris, France"
      ],
      icon: "fas fa-map-marker-alt"
    },
    {
      title: t("Email", "Email"),
      details: [
        "contact@sameats.com",
        "support@sameats.com"
      ],
      icon: "fas fa-envelope"
    },
    {
      title: t("Téléphone", "Phone"),
      details: [
        "+33 1 23 45 67 89",
        t("Lun-Ven 9h-18h", "Mon-Fri 9am-6pm")
      ],
      icon: "fas fa-phone"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-800 text-white font-inter">
      <SEOHead
        title={t(
          "Contact SAMEATS - Demandez votre devis gratuit",
          "Contact SAMEATS - Request your free quote"
        )}
        description={t(
          "Contactez SAMEATS pour une démonstration gratuite. Formulaire de contact et devis personnalisé. Support technique disponible 24/7.",
          "Contact SAMEATS for a free demo. Contact form and personalized quote. Technical support available 24/7."
        )}
        keywords={t(
          "contact SAMEATS, devis restaurant, démonstration SAMEATS, support technique",
          "contact SAMEATS, restaurant quote, SAMEATS demo, technical support"
        )}
        structuredData={generateOrganizationSchema(language)}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-6">
              {t("📞 Contact", "📞 Contact")}
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 gradient-text">
              {t("Contactez-nous", "Contact us")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t(
                "Notre équipe d'experts est là pour répondre à toutes vos questions et vous accompagner dans votre projet",
                "Our team of experts is here to answer all your questions and support you in your project"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-b from-dark-700 to-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="neo-card p-8 rounded-2xl hover-lift text-center">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${info.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-300">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tab selector */}
            <div className="flex justify-center mb-8">
              <div className="neo-card p-2 rounded-2xl bg-dark-700/50">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activeTab === 'contact'
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t("Contact rapide", "Quick contact")}
                  </button>
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activeTab === 'quote'
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t("Demande de devis", "Quote request")}
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="neo-card p-8 md:p-12 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Common fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t("Nom complet", "Full name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      placeholder={t("Jean Dupont", "John Doe")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t("Email", "Email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      placeholder="contact@restaurant.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t("Téléphone", "Phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t("Nom du restaurant", "Restaurant name")} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      placeholder={t("Le Bon Goût", "Good Taste")}
                    />
                  </div>
                </div>

                {/* Quote specific fields */}
                {activeTab === 'quote' && (
                  <div className="space-y-6 pt-6 border-t border-gray-700">
                    <h3 className="text-xl font-semibold text-primary-300 mb-4">
                      {t("Informations spécifiques", "Specific information")}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t("Type de restaurant", "Restaurant type")}
                        </label>
                        <select
                          name="restaurantType"
                          value={formData.restaurantType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        >
                          <option value="">{t("Sélectionner", "Select")}</option>
                          <option value="restaurant">{t("Restaurant", "Restaurant")}</option>
                          <option value="pizzeria">{t("Pizzeria", "Pizzeria")}</option>
                          <option value="fastfood">{t("Fast Food", "Fast Food")}</option>
                          <option value="cafe">{t("Café / Boulangerie", "Café / Bakery")}</option>
                          <option value="foodtruck">{t("Food Truck", "Food Truck")}</option>
                          <option value="other">{t("Autre", "Other")}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t("Nombre d'établissements", "Number of locations")}
                        </label>
                        <select
                          name="locations"
                          value={formData.locations}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        >
                          <option value="1">1</option>
                          <option value="2-5">2-5</option>
                          <option value="6-10">6-10</option>
                          <option value="10+">10+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="needsApp"
                          checked={formData.needsApp}
                          onChange={handleInputChange}
                          className="w-5 h-5 bg-dark-600 border border-gray-700 rounded text-primary-500 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-gray-300">
                          {t("J'ai besoin d'applications mobiles (iOS/Android)", "I need mobile apps (iOS/Android)")}
                        </span>
                      </label>

                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="needsDelivery"
                          checked={formData.needsDelivery}
                          onChange={handleInputChange}
                          className="w-5 h-5 bg-dark-600 border border-gray-700 rounded text-primary-500 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-gray-300">
                          {t("J'ai besoin de gestion de livraison", "I need delivery management")}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("Message", "Message")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-600 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                    placeholder={t(
                      "Décrivez vos besoins et nous vous recontacterons rapidement...",
                      "Describe your needs and we will contact you quickly..."
                    )}
                  />
                </div>

                {/* RGPD Consent */}
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="rgpdConsent"
                    checked={formData.rgpdConsent}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 bg-dark-600 border border-gray-700 rounded text-primary-500 focus:ring-primary-500 focus:ring-2 mt-1"
                  />
                  <span className="text-sm text-gray-300 leading-relaxed">
                    {t(
                      "J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression.",
                      "I accept that my personal data be used to contact me regarding my request. In accordance with GDPR, you can exercise your rights of access, rectification and deletion."
                    )}
                  </span>
                </label>

                {/* Submit button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="btn-primary text-lg px-12 py-4 rounded-2xl font-semibold hover-lift group"
                  >
                    <span className="flex items-center gap-3">
                      <i className="fas fa-paper-plane"></i>
                      {activeTab === 'contact' 
                        ? t("Envoyer le message", "Send message")
                        : t("Demander un devis", "Request quote")
                      }
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}