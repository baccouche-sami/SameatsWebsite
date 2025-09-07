# SAMEATS - Site Vitrine Professionnel

Site vitrine moderne et performant pour SAMEATS, solution SaaS de gestion de restaurants.

## 🚀 Technologies

- **React 18** - Interface utilisateur
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Wouter** - Routing
- **Radix UI** - Composants accessibles
- **Brevo** - Service d'email
- **Vercel Functions** - API serverless pour l'envoi d'emails

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/your-username/SameatsWebsite.git
cd SameatsWebsite

# Installer les dépendances
npm install
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes (pour Vercel) :

```bash
BREVO_API_KEY=your_brevo_api_key_here
BREVO_SENDER_EMAIL=sameats.france@gmail.com
BREVO_SENDER_NAME=SAMEATS
BREVO_RECIPIENT_EMAIL=contact@sameats.fr
```

**Important** : Ces variables sont maintenant sécurisées côté serveur et ne sont plus exposées dans le navigateur.

## 🏗️ Architecture

### API Serverless
L'application utilise maintenant des fonctions serverless Vercel pour l'envoi d'emails :

- `/api/send-contact` - Envoi des emails de contact et devis
- `/api/send-newsletter` - Envoi des notifications d'inscription newsletter

### Sécurité
- Les clés API Brevo sont maintenant stockées côté serveur
- Aucune donnée sensible n'est exposée dans le navigateur
- Validation des données côté serveur

## 🛠️ Scripts

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Vérification TypeScript
npm run check
```

## 📁 Structure du projet

```
SameatsWebsite/
├── api/                    # API routes serverless Vercel
│   ├── send-contact.ts     # Endpoint contact/devis
│   └── send-newsletter.ts  # Endpoint newsletter
├── client/                 # Application React
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── pages/          # Pages de l'application
│   │   ├── lib/            # Utilitaires et API client
│   │   └── hooks/          # Hooks personnalisés
│   └── public/             # Assets statiques
├── vercel.json             # Configuration Vercel
└── package.json            # Dépendances et scripts
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement dans le dashboard Vercel
3. Déployez automatiquement

### Variables d'environnement Vercel

```bash
BREVO_API_KEY=your_brevo_api_key_here
BREVO_SENDER_EMAIL=sameats.france@gmail.com
BREVO_SENDER_NAME=SAMEATS
BREVO_RECIPIENT_EMAIL=contact@sameats.fr
```

## ✨ Fonctionnalités

- **Site vitrine responsive** avec design moderne
- **Formulaires de contact** avec validation
- **Formulaire de devis** détaillé
- **Inscription newsletter** 
- **Animations fluides** avec Framer Motion
- **SEO optimisé** avec métadonnées
- **Performance optimisée** avec Vite
- **Emails automatiques** via Brevo

## 🔄 Migration depuis Express

Ce projet a été migré d'une architecture Express vers des fonctions serverless Vercel :

### Avantages de la migration :
- **Coût réduit** : Pas de serveur à maintenir
- **Scalabilité automatique** : Vercel gère la charge
- **Sécurité renforcée** : API keys côté serveur uniquement
- **Déploiement simplifié** : Intégration GitHub directe
- **Performance** : Edge functions pour une latence réduite

### Changements effectués :
- ✅ Suppression du dossier `server/` et des dépendances Express
- ✅ Création des API routes serverless dans `/api/`
- ✅ Mise à jour des appels API côté client
- ✅ Configuration Vercel avec `vercel.json`
- ✅ Nettoyage du `package.json`

## 📞 Support

Pour toute question ou support technique, contactez l'équipe SAMEATS.

---

**SAMEATS** - Solutions digitales pour restaurants modernes
