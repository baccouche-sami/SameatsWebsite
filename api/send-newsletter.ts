import type { VercelRequest, VercelResponse } from '@vercel/node';

interface BrevoConfig {
  apiKey: string;
  senderEmail: string;
  senderName: string;
  recipientEmail: string;
}

const BREVO_CONFIG: BrevoConfig = {
  apiKey: process.env.BREVO_API_KEY || '',
  senderEmail: process.env.BREVO_SENDER_EMAIL || 'sameats.france@gmail.com',
  senderName: process.env.BREVO_SENDER_NAME || 'SAMEATS',
  recipientEmail: process.env.BREVO_RECIPIENT_EMAIL || 'contact@sameats.fr'
};

// Template HTML pour l'inscription newsletter
const createNewsletterEmailTemplate = (email: string): string => {
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
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>📧 Nouvelle inscription newsletter SAMEATS</h2>
            </div>
            <div class="content">
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR")}</p>
                <p><strong>Source :</strong> Site web SAMEATS</p>
                
                <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 5px;">
                    <strong>Action suggérée :</strong> Ajouter cet email à votre liste de diffusion marketing et envoyer un email de bienvenue.
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
    const { email } = req.body;

    // Validation des données
    if (!email) {
      return res.status(400).json({ 
        error: 'Email is required' 
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const subject = `SAMEATS - Nouvelle inscription newsletter : ${email}`;
    const htmlContent = createNewsletterEmailTemplate(email);
    
    const success = await sendEmail(BREVO_CONFIG.recipientEmail, subject, htmlContent);

    if (success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Newsletter subscription successful',
        emailSent: true
      });
    } else {
      return res.status(500).json({ 
        error: 'Failed to send newsletter notification' 
      });
    }
  } catch (error) {
    console.error('Error in send-newsletter API:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}
