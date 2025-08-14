import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useLanguage } from "./language-provider";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');

  // Contact form schema
  const contactSchema = z.object({
    name: z.string().min(1, t("Le nom est requis", "Name is required")),
    email: z.string().email(t("Email valide requis", "Valid email is required")),
    message: z.string().min(1, t("Le message est requis", "Message is required")),
    consent: z.boolean().refine((val) => val === true, {
      message: t("Vous devez accepter les conditions", "You must accept the terms"),
    }),
  });

  // Quote form schema
  const quoteSchema = z.object({
    restaurantName: z.string().min(1, t("Le nom du restaurant est requis", "Restaurant name is required")),
    country: z.string().min(1, t("Le pays est requis", "Country is required")),
    locations: z.string().min(1, t("Le nombre d'établissements est requis", "Number of locations is required")),
    ordersPerMonth: z.string().min(1, t("L'estimation des commandes est requise", "Orders estimate is required")),
    needsDelivery: z.string().min(1, t("La livraison souhaitée est requise", "Delivery preference is required")),
    needsMobileApps: z.string().min(1, t("Les apps mobiles souhaitées sont requises", "Mobile apps preference is required")),
    budget: z.string().min(1, t("Le budget est requis", "Budget is required")),
    message: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
      message: t("Vous devez accepter les conditions", "You must accept the terms"),
    }),
  });

  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      consent: false,
    },
  });

  const quoteForm = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      restaurantName: "",
      country: "",
      locations: "",
      ordersPerMonth: "",
      needsDelivery: "",
      needsMobileApps: "",
      budget: "",
      message: "",
      consent: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/form", data);
    },
    onSuccess: () => {
      toast({
        title: t("Succès", "Success"),
        description: activeTab === 'contact' 
          ? t("Votre message a été envoyé avec succès", "Your message has been sent successfully")
          : t("Votre demande de devis a été envoyée avec succès", "Your quote request has been sent successfully"),
      });
      if (activeTab === 'contact') {
        contactForm.reset();
      } else {
        quoteForm.reset();
      }
    },
    onError: (error: any) => {
      toast({
        title: t("Erreur", "Error"),
        description: t("Une erreur est survenue", "An error occurred"),
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: any) => {
    submitMutation.mutate({ ...data, type: "contact" });
  };

  const onQuoteSubmit = (data: any) => {
    submitMutation.mutate({ 
      name: data.restaurantName,
      email: "", // Will be added to quote form if needed
      message: data.message || "",
      type: "quote",
      restaurantName: data.restaurantName,
      country: data.country,
      locations: data.locations,
      ordersPerMonth: data.ordersPerMonth,
      needsDelivery: data.needsDelivery,
      needsMobileApps: data.needsMobileApps,
      budget: data.budget,
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {t("Contactez-nous", "Contact Us")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              "Prêt à transformer votre restaurant ? Parlons de votre projet",
              "Ready to transform your restaurant? Let's talk about your project"
            )}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-dark-600 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-primary-gradient text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t("Contact rapide", "Quick Contact")}
              </button>
              <button
                onClick={() => setActiveTab('quote')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'quote'
                    ? 'bg-primary-gradient text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t("Demande de devis", "Quote Request")}
              </button>
            </div>
          </div>
          
          {/* Contact Form */}
          {activeTab === 'contact' && (
            <div className="glass-card p-8 rounded-xl">
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={contactForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Nom", "Name")}</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={5}
                            className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-300">
                            {t(
                              "J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande (conforme RGPD)",
                              "I agree that my data may be used to contact me regarding my request (GDPR compliant)"
                            )}
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={submitMutation.isPending}
                    className="w-full bg-primary-gradient py-3 rounded-lg font-semibold hover-lift"
                  >
                    {submitMutation.isPending 
                      ? t("Envoi en cours...", "Sending...")
                      : t("Envoyer le message", "Send Message")
                    }
                  </Button>
                </form>
              </Form>
            </div>
          )}
          
          {/* Quote Form */}
          {activeTab === 'quote' && (
            <div className="glass-card p-8 rounded-xl">
              <Form {...quoteForm}>
                <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={quoteForm.control}
                      name="restaurantName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Nom du restaurant", "Restaurant name")}</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={quoteForm.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Pays", "Country")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none">
                                <SelectValue placeholder={t("Sélectionner...", "Select...")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="FR">France</SelectItem>
                              <SelectItem value="BE">Belgique</SelectItem>
                              <SelectItem value="CH">Suisse</SelectItem>
                              <SelectItem value="Other">{t("Autre", "Other")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Add more form fields for quote */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={quoteForm.control}
                      name="locations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Nombre d'établissements", "Number of locations")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none">
                                <SelectValue placeholder={t("Sélectionner...", "Select...")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2-3">2-3</SelectItem>
                              <SelectItem value="4-10">4-10</SelectItem>
                              <SelectItem value="10+">10+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={quoteForm.control}
                      name="ordersPerMonth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Commandes/mois (estimation)", "Orders/month (estimate)")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none">
                                <SelectValue placeholder={t("Sélectionner...", "Select...")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<100">&lt;100</SelectItem>
                              <SelectItem value="100-500">100-500</SelectItem>
                              <SelectItem value="500-1000">500-1000</SelectItem>
                              <SelectItem value="1000+">1000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={quoteForm.control}
                      name="needsDelivery"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Livraison souhaitée", "Delivery needed")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none">
                                <SelectValue placeholder={t("Sélectionner...", "Select...")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">{t("Oui", "Yes")}</SelectItem>
                              <SelectItem value="no">{t("Non", "No")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={quoteForm.control}
                      name="needsMobileApps"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Apps mobiles souhaitées", "Mobile apps needed")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none">
                                <SelectValue placeholder={t("Sélectionner...", "Select...")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">{t("Oui", "Yes")}</SelectItem>
                              <SelectItem value="no">{t("Non", "No")}</SelectItem>
                              <SelectItem value="maybe">{t("Peut-être", "Maybe")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={quoteForm.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Budget mensuel envisagé", "Expected monthly budget")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none">
                              <SelectValue placeholder={t("Sélectionner...", "Select...")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<100€">&lt;100€</SelectItem>
                            <SelectItem value="100-200€">100-200€</SelectItem>
                            <SelectItem value="200-500€">200-500€</SelectItem>
                            <SelectItem value="500€+">500€+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={quoteForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Message / Besoins spécifiques", "Message / Specific needs")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={4}
                            className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-500 focus:outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={quoteForm.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-300">
                            {t(
                              "J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande de devis (conforme RGPD)",
                              "I agree that my data may be used to contact me regarding my quote request (GDPR compliant)"
                            )}
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={submitMutation.isPending}
                    className="w-full bg-primary-gradient py-3 rounded-lg font-semibold hover-lift"
                  >
                    {submitMutation.isPending 
                      ? t("Envoi en cours...", "Sending...")
                      : t("Demander un devis", "Request Quote")
                    }
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
