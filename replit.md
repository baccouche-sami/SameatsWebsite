# SAMEATS - Restaurant Online Ordering Solution

## Overview

SAMEATS is a modern, bilingual (French/English) restaurant ordering platform that provides a complete solution for restaurants to establish their online presence. The application features a responsive showcase website built with React, TypeScript, and Tailwind CSS, offering restaurant owners a comprehensive ordering system including website, mobile apps, and back-office management tools. The platform targets independent restaurants, restaurant groups, franchises, and dark kitchens with subscription-based pricing starting at €69/month and a €500 setup fee.

The website has been completely redesigned as an ultra-professional, mobile-first showcase following UpMenu's structure and messaging but branded as SAMEATS. Features include advanced Three.js 3D elements with progressive enhancement, comprehensive client testimonials with visual badges, enhanced pricing section, and dual contact/quote forms with RGPD compliance. The site now positions SAMEATS as a complete restaurant digitization solution without revealing the white label relationship with UpMenu.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**August 15, 2025 - Major Cleanup & Consistency Update:**
- ✅ Removed 20+ unused component files and legacy UI components
- ✅ Cleaned up all unused imports and redundant code
- ✅ Standardized design system across all pages using modern-* components
- ✅ Enhanced Features page with comprehensive integrations (100+ services)
- ✅ Created dedicated Clients page with professional gallery and testimonials
- ✅ Optimized CSS with unified color variables and consistent styling
- ✅ Ensured all pages use ModernNavigation and ModernFooter for consistency
- ✅ Consolidated animation and gradient classes for better performance
- ✅ Completely redesigned Contact page with modern UI, multiple contact methods, and comprehensive quote form
- ✅ Implemented 100% responsive design optimization across Mobile/Tablet/Desktop breakpoints
- ✅ Added touch-friendly navigation with enhanced mobile menu and tablet compatibility  
- ✅ Optimized all components with responsive typography, spacing, and touch targets
- ✅ Enhanced CSS with comprehensive responsive utilities and mobile performance optimizations
- ✅ Configured Brevo email system with functional contact forms, quote requests, and newsletter
- ✅ Optimized Brevo integration by removing SDK dependency, using direct API REST calls
- ✅ Reduced package size by 47 dependencies while maintaining full email functionality

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a Single Page Application (SPA) architecture
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring dark theme and orange-to-yellow gradient branding
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **State Management**: TanStack React Query for server state management and data fetching
- **Internationalization**: Custom language provider supporting French and English with dynamic content switching
- **Visual Effects**: Three.js integration for floating particles, geometric shapes, and interactive hero background
- **Branding**: Professional SAMEATS logo with circular design and pixelated elements (logo-blanc_1755211740901.png)
- **Design Philosophy**: Mobile-first responsive design with performance optimizations for all devices
- **Content Strategy**: Completely restructured following UpMenu's approach but branded as SAMEATS white label
- **3D Implementation**: Three.js hero section with orbiting service elements and fallback for mobile/reduced motion
- **Client Showcase**: Interactive carousel with testimonials, badges, and sectoral positioning for trust building
- **Professional Forms**: Dual-tab contact/quote system with RGPD compliance and comprehensive restaurant profiling
- **Performance**: Mobile-first responsive design with progressive enhancement and accessibility compliance

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ESM module system
- **API Design**: RESTful API endpoints with JSON communication
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Management**: Centralized error handling with structured error responses
- **Development Setup**: Vite development server with hot module replacement (HMR) and React plugin integration

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM with Neon Database serverless integration
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Data Modeling**: Type-safe schema definitions with Zod validation for contacts and users
- **Fallback Storage**: In-memory storage implementation for development and testing scenarios
- **Session Management**: PostgreSQL session store using connect-pg-simple for user session persistence

### Authentication and Authorization
- **Architecture**: Basic user authentication system with username/password credentials
- **Storage**: User credentials stored securely in PostgreSQL database
- **Session Management**: Server-side session handling with database-backed session store
- **Security**: Prepared for future implementation of more robust authentication mechanisms

## External Dependencies

### Core Frameworks and Libraries
- **React Ecosystem**: React 18.x, React DOM, TanStack React Query for state management
- **Build Tools**: Vite for development server and build tooling, esbuild for production bundling
- **TypeScript**: Full TypeScript support with strict type checking enabled

### UI and Design System
- **Component Library**: Radix UI primitives (@radix-ui/*) for accessible, unstyled components
- **Styling Framework**: Tailwind CSS with PostCSS and autoprefixer for CSS processing
- **Typography**: Google Fonts integration (Poppins, Inter) for modern typography
- **Icons**: Font Awesome 6.4.0 for comprehensive icon library

### Database and Data Management
- **Database**: PostgreSQL via Neon Database serverless platform (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Validation**: Zod for runtime type validation and schema definition
- **Session Store**: connect-pg-simple for PostgreSQL-backed session management

### Development and Deployment
- **Development Tools**: tsx for TypeScript execution, @replit/vite-plugin-runtime-error-modal for error handling
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation
- **Date Utilities**: date-fns for date manipulation and formatting
- **Utility Libraries**: clsx and class-variance-authority for conditional styling, nanoid for unique ID generation

### Third-Party Services
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Development Platform**: Replit integration with specialized plugins and development tools
- **Font Delivery**: Google Fonts CDN for web font loading
- **Icon Library**: Font Awesome CDN for icon delivery