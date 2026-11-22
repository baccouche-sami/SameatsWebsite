import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/language-provider";
import Home from "@/pages/home";
import { FeaturesPage } from "@/pages/features";
import { ClientsPage } from "@/pages/clients";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { BlogPage, CareersPage, HelpPage, DocsPage, TrainingPage, StatusPage } from "@/pages/coming-soon";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import CookiesPage from "@/pages/cookies";
import GDPRPage from "@/pages/gdpr";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={FeaturesPage} />
      <Route path="/clients" component={ClientsPage} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      
      {/* Additional pages */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/training" component={TrainingPage} />
      <Route path="/status" component={StatusPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/gdpr" component={GDPRPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
