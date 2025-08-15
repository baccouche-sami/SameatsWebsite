import { ModernNavigation } from "@/components/modern-navigation";
import { ModernFooter } from "@/components/modern-footer";
import { SEOHead } from "@/components/seo-head";
import { useLanguage } from "@/components/language-provider";
import { Link } from "wouter";

interface ComingSoonPageProps {
  title: string;
  description: string;
  backLink?: string;
  backText?: string;
}

export function ComingSoonPage({ title, description, backLink = "/", backText }: ComingSoonPageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SEOHead
        title={`${title} - SAMEATS`}
        description={description}
        keywords={t("page en construction, bientôt disponible, SAMEATS", "coming soon, under construction, SAMEATS")}
      />
      <ModernNavigation />
      
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="fas fa-tools text-white text-3xl"></i>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-modern">{title}</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-full mb-8">
              <i className="fas fa-clock text-[var(--primary)] mr-2"></i>
              <span className="text-[var(--text-primary)] font-medium">
                {t("Bientôt disponible", "Coming Soon")}
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={backLink}>
                <button className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <i className="fas fa-arrow-left mr-2"></i>
                  {backText || t("Retour à l'accueil", "Back to Home")}
                </button>
              </Link>
              
              <Link href="/contact">
                <button className="px-6 py-3 bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] font-semibold rounded-xl hover:border-[var(--primary)] transition-all duration-300">
                  <i className="fas fa-envelope mr-2"></i>
                  {t("Nous contacter", "Contact Us")}
                </button>
              </Link>
            </div>
            
            {/* Timeline */}
            <div className="mt-12 p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)]">
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
                {t("Restez informé", "Stay Informed")}
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                {t(
                  "Cette section sera bientôt disponible. Inscrivez-vous à notre newsletter pour être averti.",
                  "This section will be available soon. Subscribe to our newsletter to be notified."
                )}
              </p>
              <Link href="/#newsletter">
                <button className="text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors">
                  {t("S'inscrire à la newsletter", "Subscribe to Newsletter")} →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <ModernFooter />
    </div>
  );
}

// Specific pages
export function BlogPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Blog", "Blog")}
      description={t(
        "Notre blog avec les dernières actualités, conseils et tendances de la restauration numérique sera bientôt disponible.",
        "Our blog with the latest news, tips and trends in digital restaurant will be available soon."
      )}
      backLink="/"
      backText={t("Retour à l'accueil", "Back to Home")}
    />
  );
}

export function CareersPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Carrières", "Careers")}
      description={t(
        "Rejoignez notre équipe ! La page des opportunités de carrière chez SAMEATS sera bientôt disponible.",
        "Join our team! The career opportunities page at SAMEATS will be available soon."
      )}
      backLink="/about"
      backText={t("En savoir plus sur nous", "Learn more about us")}
    />
  );
}

export function HelpPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Centre d'aide", "Help Center")}
      description={t(
        "Notre centre d'aide complet avec guides, tutoriels et FAQ sera bientôt disponible.",
        "Our comprehensive help center with guides, tutorials and FAQ will be available soon."
      )}
      backLink="/contact"
      backText={t("Nous contacter", "Contact Us")}
    />
  );
}

export function DocsPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Documentation", "Documentation")}
      description={t(
        "La documentation technique complète pour développeurs et intégrateurs sera bientôt disponible.",
        "Complete technical documentation for developers and integrators will be available soon."
      )}
      backLink="/features"
      backText={t("Voir les fonctionnalités", "View Features")}
    />
  );
}

export function TrainingPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Formation", "Training")}
      description={t(
        "Nos modules de formation et webinaires pour maîtriser SAMEATS seront bientôt disponibles.",
        "Our training modules and webinars to master SAMEATS will be available soon."
      )}
      backLink="/contact"
      backText={t("Demander une démo", "Request a Demo")}
    />
  );
}

export function StatusPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Statut", "Status")}
      description={t(
        "La page de statut en temps réel de nos services sera bientôt disponible.",
        "The real-time status page of our services will be available soon."
      )}
      backLink="/"
      backText={t("Retour à l'accueil", "Back to Home")}
    />
  );
}

export function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Politique de confidentialité", "Privacy Policy")}
      description={t(
        "Notre politique de confidentialité détaillée sera bientôt disponible.",
        "Our detailed privacy policy will be available soon."
      )}
      backLink="/contact"
      backText={t("Nous contacter", "Contact Us")}
    />
  );
}

export function TermsPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Conditions d'utilisation", "Terms of Service")}
      description={t(
        "Nos conditions d'utilisation détaillées seront bientôt disponibles.",
        "Our detailed terms of service will be available soon."
      )}
      backLink="/contact"
      backText={t("Nous contacter", "Contact Us")}
    />
  );
}

export function CookiesPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("Politique de cookies", "Cookie Policy")}
      description={t(
        "Notre politique de cookies et gestion des données sera bientôt disponible.",
        "Our cookie policy and data management will be available soon."
      )}
      backLink="/"
      backText={t("Retour à l'accueil", "Back to Home")}
    />
  );
}

export function GDPRPage() {
  const { t } = useLanguage();
  return (
    <ComingSoonPage
      title={t("RGPD", "GDPR")}
      description={t(
        "Nos informations sur la conformité RGPD et la protection des données seront bientôt disponibles.",
        "Our GDPR compliance and data protection information will be available soon."
      )}
      backLink="/contact"
      backText={t("Nous contacter", "Contact Us")}
    />
  );
}