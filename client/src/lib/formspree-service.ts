// Service Formspree pour formulaires sans serveur
// Solution recommandée pour simplifier l'architecture

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  type: 'contact' | 'quote';
  restaurantType?: string;
  services?: string[];
  timeline?: string;
  budget?: string;
}

export class FormspreeService {
  // Configuration Formspree
  private static readonly FORM_ID = 'YOUR_FORMSPREE_ID'; // À remplacer par votre ID Formspree
  private static readonly ENDPOINT = `https://formspree.io/f/${this.FORM_ID}`;

  static async submitForm(data: FormData): Promise<{ success: boolean; message: string }> {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phone || '',
        company: data.company || '',
        type: data.type,
        restaurantType: data.restaurantType || '',
        services: data.services?.join(', ') || '',
        timeline: data.timeline || '',
        budget: data.budget || '',
        _subject: `SAMEATS - ${data.type === 'quote' ? 'Demande de devis' : 'Contact'} de ${data.name}`,
        _template: 'box', // Template Formspree
        _format: 'json'
      };

      const response = await fetch(this.ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        return {
          success: true,
          message: data.type === 'quote' 
            ? 'Demande de devis envoyée avec succès !' 
            : 'Message envoyé avec succès !'
        };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: 'Erreur lors de l\'envoi. Veuillez réessayer.'
        };
      }
    } catch (error) {
      console.error('Erreur Formspree:', error);
      return {
        success: false,
        message: 'Erreur réseau. Veuillez vérifier votre connexion.'
      };
    }
  }

  static async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(this.ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          type: 'newsletter',
          _subject: `SAMEATS - Nouvelle inscription newsletter : ${email}`
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Inscription réussie !'
        };
      } else {
        return {
          success: false,
          message: 'Erreur lors de l\'inscription.'
        };
      }
    } catch (error) {
      console.error('Erreur newsletter:', error);
      return {
        success: false,
        message: 'Erreur réseau.'
      };
    }
  }
}

/*
INSTRUCTIONS POUR MIGRER VERS FORMSPREE :

1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire
3. Remplacer 'YOUR_FORMSPREE_ID' par votre ID
4. Supprimer le dossier /server
5. Modifier package.json pour supprimer les dépendances serveur
6. Modifier vite.config.ts pour build client uniquement
7. Mettre à jour les importations dans les composants

AVANTAGES :
- Pas de serveur à maintenir
- Build plus rapide
- Déploiement simplifié
- Gratuit jusqu'à 50 soumissions/mois
- Anti-spam intégré
- Notifications par email automatiques
*/