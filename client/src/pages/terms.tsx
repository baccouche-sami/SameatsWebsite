import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function Terms() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={t(
          "Conditions Générales d'Utilisation - SAMEATS",
          "Terms of Service - SAMEATS"
        )}
        description={t(
          "Conditions générales d'utilisation de SAMEATS. Découvrez les termes et conditions qui régissent l'utilisation de notre solution de commande en ligne.",
          "SAMEATS terms of service. Learn about the terms and conditions that govern the use of our online ordering solution."
        )}
        keywords={t(
          "conditions utilisation, termes service, CGU, contrat",
          "terms of service, terms of use, TOS, contract"
        )}
      />
      <ModernNavigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
            {t("Conditions Générales d'Utilisation", "Terms of Service")}
          </h1>
          
          <div className="space-y-8 text-[var(--foreground)]">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("1. Acceptation des conditions", "1. Acceptance of Terms")}
              </h2>
              <p className="mb-4">
                {t(
                  "En accédant et en utilisant la solution SAMEATS, vous acceptez d'être lié par ces conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.",
                  "By accessing and using the SAMEATS solution, you agree to be bound by these terms of service. If you do not accept these terms, please do not use our services."
                )}
              </p>
              <p>
                {t(
                  "Ces conditions s'appliquent à tous les utilisateurs de la plateforme SAMEATS, qu'ils soient clients finaux ou restaurateurs.",
                  "These terms apply to all users of the SAMEATS platform, whether they are end customers or restaurateurs."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("2. Description du service", "2. Service Description")}
              </h2>
              <p className="mb-4">
                {t(
                  "SAMEATS est une solution complète de commande en ligne pour restaurants qui comprend :",
                  "SAMEATS is a complete online ordering solution for restaurants that includes:"
                )}
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("Site web de commande en ligne", "Online ordering website")}</li>
                <li>{t("Applications mobiles iOS et Android", "iOS and Android mobile applications")}</li>
                <li>{t("Back-office de gestion", "Management back-office")}</li>
                <li>{t("Système de paiement sécurisé", "Secure payment system")}</li>
                <li>{t("Gestion des livraisons", "Delivery management")}</li>
                <li>{t("Support technique", "Technical support")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("3. Inscription et compte utilisateur", "3. Registration and User Account")}
              </h2>
              <h3 className="text-xl font-medium mb-3">
                {t("3.1 Création de compte", "3.1 Account Creation")}
              </h3>
              <p className="mb-4">
                {t(
                  "Pour utiliser nos services, vous devez créer un compte en fournissant des informations exactes et à jour. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion.",
                  "To use our services, you must create an account by providing accurate and up-to-date information. You are responsible for maintaining the confidentiality of your login credentials."
                )}
              </p>
              
              <h3 className="text-xl font-medium mb-3">
                {t("3.2 Responsabilité du compte", "3.2 Account Responsibility")}
              </h3>
              <p>
                {t(
                  "Vous êtes entièrement responsable de toutes les activités qui se produisent sous votre compte. Vous devez nous informer immédiatement de toute utilisation non autorisée.",
                  "You are entirely responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("4. Utilisation acceptable", "4. Acceptable Use")}
              </h2>
              <p className="mb-4">
                {t(
                  "Vous vous engagez à utiliser nos services uniquement à des fins légales et conformes à ces conditions. Il est interdit de :",
                  "You agree to use our services only for lawful purposes and in accordance with these terms. It is prohibited to:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Utiliser les services à des fins frauduleuses ou illégales", "Use the services for fraudulent or illegal purposes")}</li>
                <li>{t("Tenter d'accéder non autorisé à nos systèmes", "Attempt unauthorized access to our systems")}</li>
                <li>{t("Publier du contenu offensant, diffamatoire ou inapproprié", "Post offensive, defamatory, or inappropriate content")}</li>
                <li>{t("Interférer avec le fonctionnement des services", "Interfere with the operation of the services")}</li>
                <li>{t("Violer les droits de propriété intellectuelle", "Violate intellectual property rights")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("5. Commandes et paiements", "5. Orders and Payments")}
              </h2>
              <h3 className="text-xl font-medium mb-3">
                {t("5.1 Processus de commande", "5.1 Order Process")}
              </h3>
              <p className="mb-4">
                {t(
                  "Les commandes passées via SAMEATS sont soumises à la disponibilité des produits et à l'acceptation du restaurant. Nous nous réservons le droit de refuser toute commande.",
                  "Orders placed through SAMEATS are subject to product availability and restaurant acceptance. We reserve the right to refuse any order."
                )}
              </p>
              
              <h3 className="text-xl font-medium mb-3">
                {t("5.2 Paiements", "5.2 Payments")}
              </h3>
              <p className="mb-4">
                {t(
                  "Tous les paiements sont traités de manière sécurisée via nos prestataires de paiement agréés. Les prix affichés incluent toutes les taxes applicables.",
                  "All payments are processed securely through our authorized payment providers. Displayed prices include all applicable taxes."
                )}
              </p>
              <p>
                {t(
                  "En cas de problème de paiement, nous nous réservons le droit de suspendre ou d'annuler votre commande.",
                  "In case of payment issues, we reserve the right to suspend or cancel your order."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("6. Livraison et service", "6. Delivery and Service")}
              </h2>
              <p className="mb-4">
                {t(
                  "Les délais de livraison sont estimatifs et peuvent varier selon les conditions météorologiques, le trafic et la disponibilité des livreurs.",
                  "Delivery times are estimates and may vary depending on weather conditions, traffic, and driver availability."
                )}
              </p>
              <p>
                {t(
                  "SAMEATS agit en tant qu'intermédiaire entre les clients et les restaurants. La responsabilité de la qualité des produits et de la préparation incombe aux restaurants.",
                  "SAMEATS acts as an intermediary between customers and restaurants. The responsibility for product quality and preparation lies with the restaurants."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("7. Remboursements et litiges", "7. Refunds and Disputes")}
              </h2>
              <p className="mb-4">
                {t(
                  "En cas de problème avec votre commande, contactez-nous dans les 24 heures suivant la livraison. Nous examinerons chaque cas individuellement.",
                  "In case of problems with your order, contact us within 24 hours of delivery. We will review each case individually."
                )}
              </p>
              <p>
                {t(
                  "Les remboursements sont traités selon notre politique de remboursement et peuvent prendre 5 à 10 jours ouvrables.",
                  "Refunds are processed according to our refund policy and may take 5 to 10 business days."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("8. Propriété intellectuelle", "8. Intellectual Property")}
              </h2>
              <p className="mb-4">
                {t(
                  "Tous les droits de propriété intellectuelle relatifs à SAMEATS, y compris mais sans s'y limiter, les logiciels, designs, logos et contenus, appartiennent à Samkode IT Agency.",
                  "All intellectual property rights relating to SAMEATS, including but not limited to software, designs, logos, and content, belong to Samkode IT Agency."
                )}
              </p>
              <p>
                {t(
                  "Il est interdit de reproduire, distribuer ou modifier tout élément de notre plateforme sans autorisation écrite.",
                  "It is prohibited to reproduce, distribute, or modify any element of our platform without written authorization."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("9. Limitation de responsabilité", "9. Limitation of Liability")}
              </h2>
              <p className="mb-4">
                {t(
                  "Dans toute la mesure permise par la loi, SAMEATS et Samkode IT Agency ne seront pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs.",
                  "To the fullest extent permitted by law, SAMEATS and Samkode IT Agency will not be liable for indirect, incidental, special, or consequential damages."
                )}
              </p>
              <p>
                {t(
                  "Notre responsabilité totale envers vous pour toute réclamation ne dépassera pas le montant que vous avez payé pour nos services au cours des 12 mois précédents.",
                  "Our total liability to you for any claim will not exceed the amount you paid for our services in the previous 12 months."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("10. Résiliation", "10. Termination")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous pouvons suspendre ou résilier votre compte à tout moment si vous violez ces conditions ou si nous soupçonnons une activité frauduleuse.",
                  "We may suspend or terminate your account at any time if you violate these terms or if we suspect fraudulent activity."
                )}
              </p>
              <p>
                {t(
                  "Vous pouvez résilier votre compte à tout moment en nous contactant. La résiliation n'affecte pas les obligations déjà contractées.",
                  "You can terminate your account at any time by contacting us. Termination does not affect already contracted obligations."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("11. Modifications des conditions", "11. Changes to Terms")}
              </h2>
              <p>
                {t(
                  "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront publiées sur cette page et entreront en vigueur immédiatement. Votre utilisation continue des services constitue votre acceptation des nouvelles conditions.",
                  "We reserve the right to modify these terms at any time. Changes will be published on this page and will take effect immediately. Your continued use of the services constitutes your acceptance of the new terms."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("12. Droit applicable et juridiction", "12. Governing Law and Jurisdiction")}
              </h2>
              <p className="mb-4">
                {t(
                  "Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.",
                  "These terms are governed by French law. Any dispute will be subject to the exclusive jurisdiction of French courts."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("13. Contact", "13. Contact")}
              </h2>
              <p className="mb-4">
                {t(
                  "Pour toute question concernant ces conditions générales d'utilisation, contactez-nous :",
                  "For any questions about these terms of service, contact us:"
                )}
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>SAMEATS / Samkode IT Agency</strong></p>
                <p>{t("Email : legal@sameats.com", "Email: legal@sameats.com")}</p>
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
