import * as SibApiV3Sdk from "@sendinblue/client";

// Configuration Brevo simplifiée - on utilise directement l'API REST
console.log(
    "Brevo API configuration:",
    process.env.BREVO_API_KEY ? "API key found" : "API key missing",
);

interface EmailData {
    to: string;
    subject: string;
    htmlContent: string;
    textContent?: string;
    senderName?: string;
    senderEmail?: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
    try {
        if (!process.env.BREVO_API_KEY) {
            console.error("BREVO_API_KEY is not configured");
            return false;
        }

        // Utilisation directe de l'API REST Brevo
        const emailPayload = {
            sender: {
                name: data.senderName || "SAMEATS Contact",
                email: data.senderEmail || "sameats.france@gmail.com",
            },
            to: [{ email: data.to }],
            subject: data.subject,
            htmlContent: data.htmlContent,
        };

        if (data.textContent) {
            (emailPayload as any).textContent = data.textContent;
        }

        console.log("Sending email to:", data.to, "Subject:", data.subject);

        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY,
            },
            body: JSON.stringify(emailPayload),
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Email sent successfully via Brevo API:", result);
            return true;
        } else {
            const errorData = await response.text();
            console.error("Brevo API error:", response.status, errorData);
            return false;
        }
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}

// Templates d'emails
export function getContactEmailTemplate(formData: any): EmailData {
    const htmlContent = `
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

    return {
        to: "contact@sameats.fr", // Changez par votre email
        subject: `SAMEATS - Nouvelle demande de contact de ${formData.name || formData.email}`,
        htmlContent,
        senderName: "SAMEATS",
        senderEmail: "sameats.france@gmail.com",
    };
}

export function getQuoteEmailTemplate(formData: any): EmailData {
    const htmlContent = `
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
                        <span class="value">${formData.currentWebsite || "Aucun"}</span>
                    </div>
                </div>

                <div class="section">
                    <h3>Services demandés</h3>
                    <div class="field">
                        <span class="label">Services :</span>
                        <span class="value">${Array.isArray(formData.services) ? formData.services.join(", ") : "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Budget :</span>
                        <span class="value">${formData.budget || "Non spécifié"}</span>
                    </div>
                    <div class="field">
                        <span class="label">Timeline :</span>
                        <span class="value">${formData.timeline || "Non spécifié"}</span>
                    </div>
                </div>

                ${
                    formData.message
                        ? `
                <div class="section">
                    <h3>Message complémentaire</h3>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        ${formData.message}
                    </div>
                </div>
                `
                        : ""
                }

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

    return {
        to: "contact@sameats.fr", // Changez par votre email
        subject: `SAMEATS - DEVIS URGENT de ${formData.name || formData.email} - ${formData.restaurantName || "Restaurant"}`,
        htmlContent,
        senderName: "Site SAMEATS",
        senderEmail: "sameats.france@gmail.com",
    };
}

export function getNewsletterEmailTemplate(email: string): EmailData {
    const htmlContent = `
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

    return {
        to: "contact@sameats.fr", // Changez par votre email
        subject: `SAMEATS - Nouvelle inscription newsletter : ${email}`,
        htmlContent,
        senderName: "SAMEATS",
        senderEmail: "sameats.france@gmail.com",
    };
}
