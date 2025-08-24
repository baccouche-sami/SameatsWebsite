import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";

export default function GDPR() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={t(
          "Conformité RGPD - SAMEATS",
          "GDPR Compliance - SAMEATS"
        )}
        description={t(
          "Conformité RGPD de SAMEATS. Découvrez comment nous respectons le Règlement Général sur la Protection des Données et protégeons vos droits.",
          "SAMEATS GDPR compliance. Learn how we respect the General Data Protection Regulation and protect your rights."
        )}
        keywords={t(
          "RGPD, GDPR, protection données, conformité, droits utilisateur",
          "GDPR, data protection, compliance, user rights"
        )}
      />
      <ModernNavigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
            {t("Conformité RGPD", "GDPR Compliance")}
          </h1>
          
          <div className="space-y-8 text-[var(--foreground)]">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("1. Qu'est-ce que le RGPD ?", "1. What is GDPR?")}
              </h2>
              <p className="mb-4">
                {t(
                  "Le Règlement Général sur la Protection des Données (RGPD) est un règlement européen entré en vigueur le 25 mai 2018. Il renforce et unifie la protection des données personnelles des citoyens de l'Union européenne.",
                  "The General Data Protection Regulation (GDPR) is a European regulation that came into force on May 25, 2018. It strengthens and unifies the protection of personal data of European Union citizens."
                )}
              </p>
              <p>
                {t(
                  "SAMEATS s'engage à respecter pleinement le RGPD et à protéger vos données personnelles conformément à ce règlement.",
                  "SAMEATS is committed to fully respecting GDPR and protecting your personal data in accordance with this regulation."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("2. Nos principes de protection des données", "2. Our Data Protection Principles")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous respectons les principes fondamentaux du RGPD :",
                  "We respect the fundamental principles of GDPR:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t("Licéité, loyauté et transparence :", "Lawfulness, fairness, and transparency:")}</strong> {t("Nous traitons vos données de manière licite, loyale et transparente", "We process your data lawfully, fairly, and transparently")}</li>
                <li><strong>{t("Limitation des finalités :", "Purpose limitation:")}</strong> {t("Nous collectons vos données pour des finalités déterminées, explicites et légitimes", "We collect your data for specified, explicit, and legitimate purposes")}</li>
                <li><strong>{t("Minimisation des données :", "Data minimization:")}</strong> {t("Nous ne collectons que les données nécessaires à nos finalités", "We only collect data necessary for our purposes")}</li>
                <li><strong>{t("Exactitude :", "Accuracy:")}</strong> {t("Nous maintenons vos données exactes et à jour", "We keep your data accurate and up to date")}</li>
                <li><strong>{t("Limitation de la conservation :", "Storage limitation:")}</strong> {t("Nous ne conservons vos données que le temps nécessaire", "We only keep your data for as long as necessary")}</li>
                <li><strong>{t("Intégrité et confidentialité :", "Integrity and confidentiality:")}</strong> {t("Nous protégeons vos données contre tout traitement non autorisé", "We protect your data against unauthorized processing")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("3. Base légale du traitement", "3. Legal Basis for Processing")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous traitons vos données personnelles sur la base des fondements juridiques suivants :",
                  "We process your personal data on the basis of the following legal grounds:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t("Consentement :", "Consent:")}</strong> {t("Vous avez donné votre consentement explicite au traitement", "You have given explicit consent to processing")}</li>
                <li><strong>{t("Exécution d'un contrat :", "Contract execution:")}</strong> {t("Le traitement est nécessaire à l'exécution de nos services", "Processing is necessary for the execution of our services")}</li>
                <li><strong>{t("Obligation légale :", "Legal obligation:")}</strong> {t("Le traitement est nécessaire pour respecter nos obligations légales", "Processing is necessary to comply with our legal obligations")}</li>
                <li><strong>{t("Intérêt légitime :", "Legitimate interest:")}</strong> {t("Le traitement est nécessaire à nos intérêts légitimes", "Processing is necessary for our legitimate interests")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("4. Vos droits RGPD", "4. Your GDPR Rights")}
              </h2>
              <p className="mb-4">
                {t(
                  "Conformément au RGPD, vous disposez des droits suivants :",
                  "In accordance with GDPR, you have the following rights:"
                )}
              </p>
              
              <h3 className="text-xl font-medium mb-3">
                {t("4.1 Droit d'accès", "4.1 Right of Access")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de savoir si nous traitons vos données personnelles et, le cas échéant, d'obtenir une copie de ces données.",
                  "You have the right to know if we process your personal data and, if so, to obtain a copy of this data."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("4.2 Droit de rectification", "4.2 Right of Rectification")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de faire rectifier vos données personnelles inexactes ou incomplètes.",
                  "You have the right to have your inaccurate or incomplete personal data rectified."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("4.3 Droit à l'effacement", "4.3 Right to Erasure")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de demander l'effacement de vos données personnelles dans certaines circonstances.",
                  "You have the right to request the erasure of your personal data in certain circumstances."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("4.4 Droit à la limitation du traitement", "4.4 Right to Restriction of Processing")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de demander la limitation du traitement de vos données personnelles.",
                  "You have the right to request restriction of processing of your personal data."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("4.5 Droit à la portabilité", "4.5 Right to Data Portability")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de recevoir vos données personnelles dans un format structuré et de les transmettre à un autre responsable du traitement.",
                  "You have the right to receive your personal data in a structured format and to transmit it to another data controller."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("4.6 Droit d'opposition", "4.6 Right to Object")}
              </h3>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de vous opposer au traitement de vos données personnelles dans certaines circonstances.",
                  "You have the right to object to the processing of your personal data in certain circumstances."
                )}
              </p>

              <h3 className="text-xl font-medium mb-3">
                {t("4.7 Droits relatifs à la prise de décision automatisée", "4.7 Rights Related to Automated Decision Making")}
              </h3>
              <p>
                {t(
                  "Vous avez le droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé.",
                  "You have the right not to be subject to a decision based solely on automated processing."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("5. Comment exercer vos droits", "5. How to Exercise Your Rights")}
              </h2>
              <p className="mb-4">
                {t(
                  "Pour exercer vos droits RGPD, vous pouvez nous contacter :",
                  "To exercise your GDPR rights, you can contact us:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Par email à privacy@sameats.com", "By email at privacy@sameats.com")}</li>
                <li>{t("Par téléphone au +33 1 23 45 67 89", "By phone at +33 1 23 45 67 89")}</li>
                <li>{t("Par courrier à l'adresse indiquée ci-dessous", "By mail to the address indicated below")}</li>
              </ul>
              <p className="mb-4">
                {t(
                  "Nous répondrons à votre demande dans un délai d'un mois. Si votre demande est complexe, ce délai peut être prolongé de deux mois supplémentaires.",
                  "We will respond to your request within one month. If your request is complex, this period may be extended by an additional two months."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("6. Transferts de données", "6. Data Transfers")}
              </h2>
              <p className="mb-4">
                {t(
                  "Vos données personnelles peuvent être transférées vers des pays tiers dans les cas suivants :",
                  "Your personal data may be transferred to third countries in the following cases:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Vers des pays bénéficiant d'une décision d'adéquation de la Commission européenne", "To countries benefiting from a European Commission adequacy decision")}</li>
                <li>{t("Vers des prestataires de services qui ont mis en place des garanties appropriées", "To service providers who have implemented appropriate safeguards")}</li>
                <li>{t("Avec votre consentement explicite", "With your explicit consent")}</li>
              </ul>
              <p>
                {t(
                  "Nous nous assurons que tous les transferts de données respectent les exigences du RGPD.",
                  "We ensure that all data transfers comply with GDPR requirements."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("7. Sécurité des données", "7. Data Security")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :",
                  "We implement appropriate technical and organizational measures to protect your personal data:"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("Chiffrement des données en transit et au repos", "Encryption of data in transit and at rest")}</li>
                <li>{t("Contrôles d'accès stricts", "Strict access controls")}</li>
                <li>{t("Surveillance continue de nos systèmes", "Continuous monitoring of our systems")}</li>
                <li>{t("Formation régulière de notre personnel", "Regular training of our staff")}</li>
                <li>{t("Audits de sécurité réguliers", "Regular security audits")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("8. Violation de données", "8. Data Breach")}
              </h2>
              <p className="mb-4">
                {t(
                  "En cas de violation de données personnelles susceptible d'engendrer un risque élevé pour vos droits et libertés, nous vous informerons dans les 72 heures suivant la découverte de la violation.",
                  "In the event of a personal data breach likely to result in a high risk to your rights and freedoms, we will inform you within 72 hours of discovering the breach."
                )}
              </p>
              <p>
                {t(
                  "Nous documentons également toutes les violations de données et les mesures prises pour y remédier.",
                  "We also document all data breaches and measures taken to address them."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("9. Délégué à la protection des données", "9. Data Protection Officer")}
              </h2>
              <p className="mb-4">
                {t(
                  "Nous avons désigné un délégué à la protection des données (DPO) pour superviser notre conformité au RGPD :",
                  "We have designated a Data Protection Officer (DPO) to oversee our GDPR compliance:"
                )}
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>{t("Délégué à la protection des données", "Data Protection Officer")}</strong></p>
                <p>{t("Email : dpo@sameats.com", "Email: dpo@sameats.com")}</p>
                <p>{t("Téléphone : +33 1 23 45 67 89", "Phone: +33 1 23 45 67 89")}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("10. Autorité de contrôle", "10. Supervisory Authority")}
              </h2>
              <p className="mb-4">
                {t(
                  "Vous avez le droit de déposer une plainte auprès de l'autorité de contrôle compétente si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.",
                  "You have the right to lodge a complaint with the competent supervisory authority if you consider that the processing of your personal data constitutes a violation of GDPR."
                )}
              </p>
              <p>
                {t(
                  "En France, l'autorité de contrôle est la Commission Nationale de l'Informatique et des Libertés (CNIL).",
                  "In France, the supervisory authority is the Commission Nationale de l'Informatique et des Libertés (CNIL)."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("11. Contact", "11. Contact")}
              </h2>
              <p className="mb-4">
                {t(
                  "Pour toute question concernant notre conformité RGPD ou pour exercer vos droits, contactez-nous :",
                  "For any questions about our GDPR compliance or to exercise your rights, contact us:"
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
