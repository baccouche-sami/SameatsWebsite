import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Cookies() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={t(
          "Politique sur les Cookies - SAMEATS",
          "Cookie Policy - SAMEATS"
        )}
        description={t(
          "Politique sur les cookies de SAMEATS. Découvrez comment nous utilisons les cookies pour améliorer votre expérience sur notre site.",
          "SAMEATS cookie policy. Learn how we use cookies to improve your experience on our site."
        )}
        keywords={t(
          "politique cookies, cookies, traceurs, navigation",
          "cookie policy, cookies, trackers, browsing"
        )}
      />
      <ModernNavigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
            {t("Politique sur les Cookies", "Cookie Policy")}
          </h1>
          
          <div className="space-y-8 text-[var(--foreground)]">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("1. Qu'est-ce qu'un cookie ?", "1. What is a Cookie?")}
              </h2>
              <p className="mb-4">
                {t(
                  "Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences (telles que la connexion, la langue, la taille de police et d'autres préférences d'affichage) sur une période donnée.",
                  "A cookie is a small text file stored on your computer or mobile device when you visit a website. Cookies allow the site to remember your actions and preferences (such as login, language, font size, and other display preferences) over a given period."
                )}
              </p>
              <p>
                {t(
                  "Les cookies ne peuvent pas accéder aux informations stockées sur votre ordinateur ou à d'autres cookies créés par d'autres sites.",
                  "Cookies cannot access information stored on your computer or other cookies created by other sites."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("2. Comment SAMEATS utilise les cookies", "2. How SAMEATS Uses Cookies")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous utilisons les cookies pour améliorer votre expérience sur notre site et pour comprendre comment vous utilisez nos services. Les cookies nous aident à :",
                  "We use cookies to improve your experience on our site and to understand how you use our services. Cookies help us to:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Mémoriser vos préférences de langue", "Remember your language preferences")}</li>
                <li>{t("Maintenir votre session de connexion", "Maintain your login session")}</li>
                <li>{t("Analyser le trafic et l'utilisation du site", "Analyze site traffic and usage")}</li>
                <li>{t("Personnaliser le contenu et les publicités", "Personalize content and advertisements")}</li>
                <li>{t("Améliorer la sécurité de nos services", "Improve the security of our services")}</li>
                <li>{t("Optimiser les performances du site", "Optimize site performance")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("3. Types de cookies que nous utilisons", "3. Types of Cookies We Use")}
              </h2>
              
              <h3 className="text-xl font-medium mb-3">
                {t("3.1 Cookies essentiels", "3.1 Essential Cookies")}
              </h3>
              <p className="mb-4">
                {t(
                  "Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils incluent :",
                  "These cookies are necessary for the site to function and cannot be disabled. They include:"
                )}
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("Cookies de session pour maintenir votre connexion", "Session cookies to maintain your login")}</li>
                <li>{t("Cookies de sécurité pour protéger contre les attaques", "Security cookies to protect against attacks")}</li>
                <li>{t("Cookies de préférences de langue", "Language preference cookies")}</li>
                <li>{t("Cookies de panier d'achat", "Shopping cart cookies")}</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">
                {t("3.2 Cookies de performance", "3.2 Performance Cookies")}
              </h3>
              <p className="mb-4">
                {t(
                  "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant et en rapportant des informations de manière anonyme :",
                  "These cookies help us understand how visitors interact with our site by collecting and reporting information anonymously:"
                )}
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("Pages les plus visitées", "Most visited pages")}</li>
                <li>{t("Temps passé sur chaque page", "Time spent on each page")}</li>
                <li>{t("Erreurs rencontrées", "Errors encountered")}</li>
                <li>{t("Performance du site", "Site performance")}</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">
                {t("3.3 Cookies de fonctionnalité", "3.3 Functionality Cookies")}
              </h3>
              <p className="mb-4">
                {t(
                  "Ces cookies permettent au site de mémoriser les choix que vous faites et de fournir des fonctionnalités améliorées et plus personnalisées :",
                  "These cookies allow the site to remember choices you make and provide enhanced, more personalized features:"
                )}
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("Préférences de recherche", "Search preferences")}</li>
                <li>{t("Historique des commandes", "Order history")}</li>
                <li>{t("Préférences d'affichage", "Display preferences")}</li>
                <li>{t("Adresses de livraison sauvegardées", "Saved delivery addresses")}</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">
                {t("3.4 Cookies de marketing", "3.4 Marketing Cookies")}
              </h3>
              <p className="mb-4">
                {t(
                  "Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités pertinentes et attrayantes pour l'utilisateur individuel :",
                  "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Publicités personnalisées", "Personalized advertisements")}</li>
                <li>{t("Suivi des conversions", "Conversion tracking")}</li>
                <li>{t("Analyses marketing", "Marketing analytics")}</li>
                <li>{t("Réseaux sociaux", "Social media")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("4. Cookies tiers", "4. Third-Party Cookies")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous utilisons également des services tiers qui peuvent placer des cookies sur votre appareil :",
                  "We also use third-party services that may place cookies on your device:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics :</strong> {t("Pour analyser le trafic du site", "To analyze site traffic")}</li>
                <li><strong>Stripe :</strong> {t("Pour le traitement des paiements", "For payment processing")}</li>
                <li><strong>Facebook Pixel :</strong> {t("Pour le suivi des conversions", "For conversion tracking")}</li>
                <li><strong>Google Ads :</strong> {t("Pour la publicité ciblée", "For targeted advertising")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("5. Durée de vie des cookies", "5. Cookie Lifespan")}
              </h2>
              <p className="mb-4">
                {t(
                  "Les cookies ont différentes durées de vie :",
                  "Cookies have different lifespans:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t("Cookies de session :", "Session cookies:")}</strong> {t("Supprimés à la fermeture du navigateur", "Deleted when the browser is closed")}</li>
                <li><strong>{t("Cookies persistants :", "Persistent cookies:")}</strong> {t("Restent sur votre appareil pendant une période définie (généralement 1 à 2 ans)", "Remain on your device for a defined period (usually 1 to 2 years)")}</li>
                <li><strong>{t("Cookies de sécurité :", "Security cookies:")}</strong> {t("Durée limitée pour des raisons de sécurité", "Limited duration for security reasons")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("6. Gestion des cookies", "6. Managing Cookies")}
              </h2>
              <h3 className="text-xl font-medium mb-3">
                {t("6.1 Via votre navigateur", "6.1 Via Your Browser")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour les empêcher d'en enregistrer.",
                  "You can control and/or delete cookies as you wish. You can delete all cookies already present on your computer and configure most browsers to prevent them from being recorded."
                )}
              </p>
              <p className="mb-4">
                {t(
                  "Cependant, si vous le faites, vous devrez peut-être ajuster manuellement certaines préférences à chaque visite d'un site.",
                  "However, if you do this, you may have to manually adjust some preferences every time you visit a site."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("6.2 Instructions par navigateur", "6.2 Browser Instructions")}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome :</strong> {t("Paramètres > Confidentialité et sécurité > Cookies et autres données de sites", "Settings > Privacy and security > Cookies and other site data")}</li>
                <li><strong>Firefox :</strong> {t("Options > Confidentialité et sécurité > Cookies et données de sites", "Options > Privacy & Security > Cookies and Site Data")}</li>
                <li><strong>Safari :</strong> {t("Préférences > Confidentialité > Cookies et données de sites web", "Preferences > Privacy > Cookies and website data")}</li>
                <li><strong>Edge :</strong> {t("Paramètres > Cookies et autorisations de sites", "Settings > Cookies and site permissions")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("7. Impact de la désactivation des cookies", "7. Impact of Disabling Cookies")}
              </h2>
              <p className="mb-4">
                {t(
                  "Si vous désactivez les cookies, certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement :",
                  "If you disable cookies, some features of our site may not work properly:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Vous devrez vous reconnecter à chaque visite", "You will need to log in on each visit")}</li>
                <li>{t("Vos préférences de langue ne seront pas mémorisées", "Your language preferences will not be remembered")}</li>
                <li>{t("Le panier d'achat ne sera pas sauvegardé", "The shopping cart will not be saved")}</li>
                <li>{t("Certaines fonctionnalités personnalisées peuvent ne pas être disponibles", "Some personalized features may not be available")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("8. Mise à jour de cette politique", "8. Updates to This Policy")}
              </h2>
              <p>
                {t(
                  "Nous pouvons mettre à jour cette politique sur les cookies de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous encourageons à consulter régulièrement cette page pour rester informé de notre utilisation des cookies.",
                  "We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to regularly review this page to stay informed about our use of cookies."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("9. Contact", "9. Contact")}
              </h2>
              <p className="mb-4">
                {t(
                  "Si vous avez des questions concernant notre utilisation des cookies, contactez-nous :",
                  "If you have questions about our use of cookies, contact us:"
                )}
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>SAMEATS / Samkode IT Agency</strong></p>
                <p>{t("Email : privacy@sameats.com", "Email: privacy@sameats.com")}</p>
                <p>{t("Téléphone : +33 1 23 45 67 89", "Phone: +33 1 23 45 67 89")}</p>
                <p>{t("Adresse : 123 Rue de la Paix, 75001 Paris, France", "Address: 123 Rue de la Paix, 75001 Paris, France")}</p>
              </div>
            </section>

            <div className="text-sm text-gray-600 dark:text-gray-400 mt-8 pt-8 border-t">
              <p>
                {t(
                  "Dernière mise à jour : 15 janvier 2025",
                  "Last updated: January 15, 2025"
                )}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <ModernFooter />
    </div>
  );
}
