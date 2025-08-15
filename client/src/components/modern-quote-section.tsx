import { useState } from "react";
import { useLanguage } from "./language-provider";

export function ModernQuoteSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    restaurantType: '',
    currentOrderVolume: '',
    message: '',
    urgency: 'normal',
    budget: '',
    acceptTerms: false,
    acceptNewsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pourrez ajouter l'envoi vers votre API
  };

  return (
    <div className="py-24 bg-[var(--surface)] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border)] rounded-full mb-6">
            <i className="fas fa-comments text-[var(--primary)] mr-2"></i>
            <span className="text-sm text-[var(--text-secondary)]">
              {t("Parlons de votre projet", "Let's talk about your project")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--text-primary)]">
              {t("Prêt à digitaliser", "Ready to digitize")}
            </span>
            <br />
            <span className="gradient-text-modern">
              {t("votre restaurant ?", "your restaurant?")}
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            {t(
              "Contactez-nous pour une consultation gratuite ou demandez un devis personnalisé",
              "Contact us for a free consultation or request a personalized quote"
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex mb-8 bg-[var(--background)] rounded-2xl p-2 border border-[var(--border)]">
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'contact'
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <i className="fas fa-envelope mr-2"></i>
              {t("Contact simple", "Simple contact")}
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'quote'
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <i className="fas fa-calculator mr-2"></i>
              {t("Demande de devis", "Quote request")}
            </button>
          </div>

          {/* Form Content */}
          <div className="modern-card p-8 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Common Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    {t("Nom complet *", "Full name *")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t("Votre nom", "Your name")}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    {t("Email professionnel *", "Professional email *")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t("votre@email.com", "your@email.com")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    {t("Téléphone", "Phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t("+33 1 23 45 67 89", "+1 234 567 8900")}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    {t("Nom du restaurant *", "Restaurant name *")}
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t("Nom de votre restaurant", "Your restaurant name")}
                  />
                </div>
              </div>

              {/* Quote-specific fields */}
              {activeTab === 'quote' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        {t("Type de restaurant", "Restaurant type")}
                      </label>
                      <select
                        name="restaurantType"
                        value={formData.restaurantType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      >
                        <option value="">{t("Sélectionnez", "Select")}</option>
                        <option value="fast-food">{t("Fast Food", "Fast Food")}</option>
                        <option value="pizzeria">{t("Pizzeria", "Pizzeria")}</option>
                        <option value="restaurant-traditionnel">{t("Restaurant traditionnel", "Traditional restaurant")}</option>
                        <option value="food-court">{t("Food Court", "Food Court")}</option>
                        <option value="boulangerie">{t("Boulangerie", "Bakery")}</option>
                        <option value="autre">{t("Autre", "Other")}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        {t("Volume de commandes actuel", "Current order volume")}
                      </label>
                      <select
                        name="currentOrderVolume"
                        value={formData.currentOrderVolume}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      >
                        <option value="">{t("Sélectionnez", "Select")}</option>
                        <option value="0-50">{t("0-50 commandes/jour", "0-50 orders/day")}</option>
                        <option value="50-100">{t("50-100 commandes/jour", "50-100 orders/day")}</option>
                        <option value="100-200">{t("100-200 commandes/jour", "100-200 orders/day")}</option>
                        <option value="200+">{t("200+ commandes/jour", "200+ orders/day")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        {t("Budget mensuel estimé", "Estimated monthly budget")}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      >
                        <option value="">{t("Sélectionnez", "Select")}</option>
                        <option value="69-99">€69 - €99</option>
                        <option value="99-149">€99 - €149</option>
                        <option value="149-199">€149 - €199</option>
                        <option value="199+">€199+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        {t("Urgence du projet", "Project urgency")}
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      >
                        <option value="normal">{t("Normal (2-4 semaines)", "Normal (2-4 weeks)")}</option>
                        <option value="urgent">{t("Urgent (1-2 semaines)", "Urgent (1-2 weeks)")}</option>
                        <option value="immediate">{t("Immédiat (cette semaine)", "Immediate (this week)")}</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  {t("Message", "Message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                  placeholder={t(
                    "Décrivez votre projet et vos besoins spécifiques...",
                    "Describe your project and specific needs..."
                  )}
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 mr-3 text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--border)] rounded"
                  />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {t(
                      "J'accepte les conditions d'utilisation et la politique de confidentialité (RGPD) *",
                      "I accept the terms of use and privacy policy (GDPR) *"
                    )}
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptNewsletter"
                    checked={formData.acceptNewsletter}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--border)] rounded"
                  />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {t(
                      "Je souhaite recevoir des conseils et actualités sur la digitalisation des restaurants",
                      "I want to receive tips and news about restaurant digitization"
                    )}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <i className={`${activeTab === 'contact' ? 'fas fa-paper-plane' : 'fas fa-calculator'} mr-2`}></i>
                  {activeTab === 'contact' 
                    ? t("Envoyer le message", "Send message")
                    : t("Demander un devis", "Request quote")
                  }
                </button>
                
                <p className="text-xs text-[var(--text-muted)] mt-4">
                  {t(
                    "Réponse garantie sous 24h • Consultation gratuite • Sans engagement",
                    "Guaranteed response within 24h • Free consultation • No commitment"
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}