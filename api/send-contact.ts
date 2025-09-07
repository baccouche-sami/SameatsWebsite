import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  type: 'contact' | 'quote';
  restaurantName?: string;
  restaurantType?: string;
  address?: string;
  website?: string;
  currentSolution?: string;
  urgency?: string;
  needsApp?: boolean;
  needsDelivery?: boolean;
  locations?: string;
  services?: string;
  budget?: string;
  timeline?: string;
  rgpdConsent?: boolean;
}

interface BrevoConfig {
  apiKey: string;
  senderEmail: string;
  senderName: string;
  recipientEmail: string;
}

const BREVO_CONFIG: BrevoConfig = {
  apiKey: process.env.BREVO_API_KEY || '',
  senderEmail: process.env.BREVO_SENDER_EMAIL || 'noreply@sameats.fr',
  senderName: process.env.BREVO_SENDER_NAME || 'SAMEATS',
  recipientEmail: process.env.BREVO_RECIPIENT_EMAIL || 'sameats.france@gmail.com'
};

// Template HTML pour le formulaire de contact
const createContactEmailTemplate = (formData: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6A00 0%, #FFC700 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #FF6A00; }
            .value { margin-left: 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>🍽️ Nouvelle demande de contact SAMEATS</h2>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">Nom :</span>
                    <span class="value">${formData.name || "Non spécifié"}</span>
                </div>
                <div class="field">
                    <span class="label">Email :</span>
                    <span class="value">${formData.email || "Non spécifié"}</span>
                </div>
                <div class="field">
                    <span class="label">Téléphone :</span>
                    <span class="value">${formData.phone || "Non spécifié"}</span>
                </div>
                <div class="field">
                    <span class="label">Entreprise :</span>
                    <span class="value">${formData.company || "Non spécifié"}</span>
                </div>
                <div class="field">
                    <span class="label">Sujet :</span>
                    <span class="value">${formData.subject || "Contact général"}</span>
                </div>
                ${formData.restaurantName ? `
                <div class="field">
                    <span class="label">Restaurant :</span>
                    <span class="value">${formData.restaurantName}</span>
                </div>` : ''}
                ${formData.restaurantType ? `
                <div class="field">
                    <span class="label">Type de restaurant :</span>
                    <span class="value">${formData.restaurantType}</span>
                </div>` : ''}
                ${formData.budget ? `
                <div class="field">
                    <span class="label">Budget :</span>
                    <span class="value">${formData.budget}</span>
                </div>` : ''}
                ${formData.services ? `
                <div class="field">
                    <span class="label">Services :</span>
                    <span class="value">${formData.services}</span>
                </div>` : ''}
                <div class="field">
                    <span class="label">Message :</span>
                    <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        ${formData.message || "Aucun message"}
                    </div>
                </div>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                    Email envoyé automatiquement depuis le site SAMEATS le ${new Date().toLocaleString("fr-FR")}
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Template HTML pour le formulaire de devis
const createQuoteEmailTemplate = (formData: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6A00 0%, #FFC700 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 5px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; color: #FF6A00; display: inline-block; width: 150px; }
            .value { color: #333; }
            .urgent { background: #ffebee; border-left: 4px solid #f44336; padding: 10px; margin: 10px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>💼 Nouvelle demande de devis SAMEATS</h2>
            </div>
            <div class="content">
                <div class="section">
                    <h3>Informations de contact</h3>
                    <div class="field">
                        <span class="label">Nom :</span>
                        <span class="value">${formData.name || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Email :</span>
                        <span class="value">${formData.email || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Téléphone :</span>
                        <span class="value">${formData.phone || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Entreprise :</span>
                        <span class="value">${formData.company || "Non spécifié"}</span>
                    </div>
                </div>

                <div class="section">
                    <h3>Détails du restaurant</h3>
                    <div class="field">
                        <span class="label">Nom restaurant :</span>
                        <span class="value">${formData.restaurantName || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Type :</span>
                        <span class="value">${formData.restaurantType || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Adresse :</span>
                        <span class="value">${formData.address || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Site web actuel :</span>
                        <span class="value">${formData.website || "Aucun"}</span>
                    </div>
                </div>

                <div class="section">
                    <h3>Services demandés</h3>
                    <div class="field">
                        <span class="label">Services :</span>
                        <span class="value">${formData.services || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Budget :</span>
                        <span class="value">${formData.budget || "Standard"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Timeline :</span>
                        <span class="value">${formData.timeline || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Applications mobiles :</span>
                        <span class="value">${formData.needsApp ? "Oui" : "Non"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Système de livraison :</span>
                        <span class="value">${formData.needsDelivery ? "Oui" : "Non"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Solution actuelle :</span>
                        <span class="value">${formData.currentSolution || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Urgence :</span>
                        <span class="value">${formData.urgency || "Non spécifié"}</span>
                    </div>
                </div>

                ${formData.message ? `
                <div class="section">
                    <h3>Message complémentaire</h3>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        ${formData.message}
                    </div>
                </div>
                ` : ''}

                <div class="urgent">
                    <strong>⚡ Action requise :</strong> Contacter le prospect dans les 2 heures pour maximiser les chances de conversion.
                </div>

                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                    Devis demandé le ${new Date().toLocaleString("fr-FR")} depuis le site SAMEATS
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Fonction pour envoyer un email via Brevo
const sendEmail = async (to: string, subject: string, htmlContent: string): Promise<boolean> => {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_CONFIG.apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: BREVO_CONFIG.senderEmail,
          name: BREVO_CONFIG.senderName,
        },
        to: [
          {
            email: to,
            name: 'SAMEATS Team',
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur Brevo:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Vérifier que la méthode est POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vérifier que l'API key est configurée
  if (!BREVO_CONFIG.apiKey) {
    console.error('BREVO_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validation des données
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validation RGPD pour les devis
    if (formData.type === 'quote' && !formData.rgpdConsent) {
      return res.status(400).json({ 
        error: 'RGPD consent is required for quote requests' 
      });
    }

    let subject: string;
    let htmlContent: string;

    if (formData.type === 'quote') {
      subject = `SAMEATS - DEVIS URGENT de ${formData.name} - ${formData.restaurantName || "Restaurant"}`;
      htmlContent = createQuoteEmailTemplate(formData);
    } else {
      subject = `SAMEATS - Nouvelle demande de contact de ${formData.name}`;
      htmlContent = createContactEmailTemplate(formData);
    }
    
    const success = await sendEmail(BREVO_CONFIG.recipientEmail, subject, htmlContent);

    if (success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully',
        emailSent: true
      });
    } else {
      return res.status(500).json({ 
        error: 'Failed to send email' 
      });
    }
  } catch (error) {
    console.error('Error in send-contact API:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}
