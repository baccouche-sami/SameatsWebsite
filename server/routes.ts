import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { sendEmail, getContactEmailTemplate, getQuoteEmailTemplate, getNewsletterEmailTemplate } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/form", async (req, res) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        message: z.string().min(1, "Message is required"),
        type: z.enum(["contact", "quote"]).default("contact"),
        phone: z.string().optional(),
        company: z.string().optional(),
        subject: z.string().optional(),
        // Champs du formulaire de devis
        restaurantName: z.string().optional(),
        restaurantType: z.string().optional(),
        address: z.string().optional(),
        website: z.string().optional(),
        country: z.string().optional(),
        locations: z.string().optional(),
        ordersPerMonth: z.string().optional(),
        needsDelivery: z.union([z.boolean(), z.string()]).optional(),
        needsApp: z.union([z.boolean(), z.string()]).optional(),
        currentSolution: z.string().optional(),
        budget: z.string().optional(),
        urgency: z.string().optional(),
        services: z.string().optional(),
        timeline: z.string().optional(),
        rgpdConsent: z.boolean().optional(),
      });

      const validatedData = contactSchema.parse(req.body);
      
      // Log pour debug
      console.log('Données reçues:', JSON.stringify(validatedData, null, 2));
      
      const contact = await storage.createContact(validatedData);
      
      // Envoyer l'email selon le type de formulaire
      let emailSent = false;
      try {
        if (validatedData.type === "quote") {
          const emailData = getQuoteEmailTemplate(validatedData);
          emailSent = await sendEmail(emailData);
        } else {
          const emailData = getContactEmailTemplate(validatedData);
          emailSent = await sendEmail(emailData);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id,
        emailSent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error",
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const newsletterSchema = z.object({
        email: z.string().email("Valid email is required")
      });

      const validatedData = newsletterSchema.parse(req.body);
      
      // Envoyer l'email de notification
      let emailSent = false;
      try {
        const emailData = getNewsletterEmailTemplate(validatedData.email);
        emailSent = await sendEmail(emailData);
      } catch (error) {
        console.error("Error sending newsletter email:", error);
      }
      
      res.json({ 
        success: true, 
        message: "Newsletter subscription successful",
        emailSent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email address",
          errors: error.errors 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
