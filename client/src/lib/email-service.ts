// Service d'email côté client avec Brevo
// Alternative sans serveur pour optimiser l'application

interface EmailData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  subject?: string;
  type: 'contact' | 'quote';
}

// Service EmailJS ou Formspree comme alternative sans serveur
export class EmailService {
  
  // Option 1: Formulaire avec service tiers (Formspree, Netlify Forms, etc.)
  static async submitViaFormspree(data: EmailData): Promise<boolean> {
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          phone: data.phone,
          company: data.company,
          type: data.type,
          _subject: `SAMEATS - ${data.type === 'quote' ? 'Demande de devis' : 'Contact'} de ${data.name}`,
        }),
      });
      
      return response.ok;
    } catch (error) {
      console.error('Erreur Formspree:', error);
      return false;
    }
  }

  // Option 2: EmailJS (service client-side)
  static async submitViaEmailJS(data: EmailData): Promise<boolean> {
    try {
      // Nécessite l'installation d'EmailJS
      // npm install @emailjs/browser
      
      const { send } = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        phone: data.phone || '',
        company: data.company || '',
        type: data.type,
      };

      const result = await send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID', 
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      return result.status === 200;
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      return false;
    }
  }

  // Option 3: Netlify Forms (si hébergé sur Netlify)
  static async submitViaNetlify(data: EmailData): Promise<boolean> {
    try {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
      formData.append('type', data.type);
      
      if (data.phone) formData.append('phone', data.phone);
      if (data.company) formData.append('company', data.company);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      return response.ok;
    } catch (error) {
      console.error('Erreur Netlify Forms:', error);
      return false;
    }
  }
}

// Newsletter service simplifié
export class NewsletterService {
  
  // Option Mailchimp, ConvertKit, ou Brevo directement
  static async subscribe(email: string): Promise<boolean> {
    try {
      // Utilisation d'un service comme Mailchimp API côté client
      // Ou redirection vers un service tiers
      
      // Pour Mailchimp :
      const response = await fetch('/api/mailchimp-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      return response.ok;
    } catch (error) {
      console.error('Erreur newsletter:', error);
      return false;
    }
  }
}

/* 
RECOMMANDATIONS POUR OPTIMISER L'APPLICATION :

1. **Formspree** (le plus simple) :
   - Gratuit jusqu'à 50 soumissions/mois
   - Configuration en 2 minutes
   - Pas de serveur nécessaire

2. **EmailJS** (le plus flexible) :
   - Service client-side complet
   - Templates personnalisables
   - Intégration Gmail/Outlook

3. **Netlify Forms** (si hébergé sur Netlify) :
   - Gratuit jusqu'à 100 soumissions/mois
   - Anti-spam intégré
   - Notifications par email

4. **Simplification de l'architecture** :
   - Supprimer le dossier /server
   - Garder uniquement /client
   - Build statique plus rapide
   - Déploiement simplifié

5. **Alternative pour la newsletter** :
   - Widget Mailchimp embeddé
   - ConvertKit forms
   - Buttondown.email
*/