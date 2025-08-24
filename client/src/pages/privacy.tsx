import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Privacy() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={t(
          "Politique de Confidentialité - SAMEATS",
          "Privacy Policy - SAMEATS"
        )}
        description={t(
          "Politique de confidentialité de SAMEATS. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.",
          "SAMEATS privacy policy. Learn how we protect your personal data and respect your privacy."
        )}
        keywords={t(
          "politique confidentialité, protection données, vie privée, RGPD",
          "privacy policy, data protection, privacy, GDPR"
        )}
      />
      <ModernNavigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
            {t("Politique de Confidentialité", "Privacy Policy")}
          </h1>
          
          <div className="space-y-8 text-[var(--foreground)]">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("1. Introduction", "1. Introduction")}
              </h2>
              <p className="mb-4">
                {t(
                  "SAMEATS, créé par Samkode IT Agency, s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre solution de commande en ligne pour restaurants.",
                  "SAMEATS, created by Samkode IT Agency, is committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, and protect your information when you use our online ordering solution for restaurants."
                )}
              </p>
              <p>
                {t(
                  "En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.",
                  "By using our services, you agree to the practices described in this privacy policy."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("2. Informations que nous collectons", "2. Information We Collect")}
              </h2>
              <h3 className="text-xl font-medium mb-3">
                {t("2.1 Informations personnelles", "2.1 Personal Information")}
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("Nom et prénom", "First and last name")}</li>
                <li>{t("Adresse e-mail", "Email address")}</li>
                <li>{t("Numéro de téléphone", "Phone number")}</li>
                <li>{t("Adresse de livraison", "Delivery address")}</li>
                <li>{t("Informations de paiement (traitées de manière sécurisée)", "Payment information (processed securely)")}</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3">
                {t("2.2 Informations techniques", "2.2 Technical Information")}
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("Adresse IP", "IP address")}</li>
                <li>{t("Type de navigateur et système d'exploitation", "Browser type and operating system")}</li>
                <li>{t("Pages visitées et temps passé", "Pages visited and time spent")}</li>
                <li>{t("Cookies et technologies similaires", "Cookies and similar technologies")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("3. Utilisation des informations", "3. How We Use Information")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous utilisons vos informations pour :",
                  "We use your information to:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Traiter et livrer vos commandes", "Process and deliver your orders")}</li>
                <li>{t("Communiquer avec vous concernant vos commandes", "Communicate with you about your orders")}</li>
                <li>{t("Améliorer nos services et l'expérience utilisateur", "Improve our services and user experience")}</li>
                <li>{t("Assurer la sécurité de nos services", "Ensure the security of our services")}</li>
                <li>{t("Respecter nos obligations légales", "Comply with our legal obligations")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("4. Partage des informations", "4. Information Sharing")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :",
                  "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following cases:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Avec votre consentement explicite", "With your explicit consent")}</li>
                <li>{t("Avec les restaurants pour traiter vos commandes", "With restaurants to process your orders")}</li>
                <li>{t("Avec nos prestataires de services de paiement", "With our payment service providers")}</li>
                <li>{t("Pour respecter des obligations légales", "To comply with legal obligations")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("5. Sécurité des données", "5. Data Security")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.",
                  "We implement appropriate security measures to protect your personal data against unauthorized access, modification, disclosure, or destruction."
                )}
              </p>
              <p>
                {t(
                  "Ces mesures incluent le chiffrement SSL, des pare-feu, et des contrôles d'accès stricts.",
                  "These measures include SSL encryption, firewalls, and strict access controls."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("6. Vos droits", "6. Your Rights")}
              </h2>
              <p className="mb-4">
                {t(
                  "Conformément au RGPD, vous avez les droits suivants :",
                  "In accordance with GDPR, you have the following rights:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Droit d'accès à vos données personnelles", "Right to access your personal data")}</li>
                <li>{t("Droit de rectification de vos données", "Right to rectification of your data")}</li>
                <li>{t("Droit à l'effacement de vos données", "Right to erasure of your data")}</li>
                <li>{t("Droit à la limitation du traitement", "Right to restriction of processing")}</li>
                <li>{t("Droit à la portabilité des données", "Right to data portability")}</li>
                <li>{t("Droit d'opposition au traitement", "Right to object to processing")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("7. Conservation des données", "7. Data Retention")}
              </h2>
              <p>
                {t(
                  "Nous conservons vos données personnelles uniquement le temps nécessaire aux fins pour lesquelles elles ont été collectées, ou conformément aux obligations légales. Les données de commande sont conservées pendant 5 ans pour des raisons comptables et fiscales.",
                  "We retain your personal data only for the time necessary for the purposes for which they were collected, or in accordance with legal obligations. Order data is retained for 5 years for accounting and tax reasons."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("8. Cookies", "8. Cookies")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.",
                  "We use cookies to improve your experience on our site. You can control cookie usage through your browser settings."
                )}
              </p>
              <p>
                {t(
                  "Pour plus d'informations, consultez notre politique sur les cookies.",
                  "For more information, see our cookie policy."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("9. Modifications de cette politique", "9. Changes to This Policy")}
              </h2>
              <p>
                {t(
                  "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique.",
                  "We reserve the right to modify this privacy policy at any time. Changes will be published on this page with an update date. We encourage you to regularly review this policy."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("10. Contact", "10. Contact")}
              </h2>
              <p className="mb-4">
                {t(
                  "Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :",
                  "For any questions about this privacy policy or to exercise your rights, contact us:"
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
