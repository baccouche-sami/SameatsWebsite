# SAMEATS - Restaurant Online Ordering Solution

## Overview

SAMEATS is a modern, bilingual (French/English) restaurant ordering platform that provides a complete solution for restaurants to establish their online presence. The application features a responsive showcase website built with React, TypeScript, and Tailwind CSS, offering restaurant owners a comprehensive ordering system including website, mobile apps, and back-office management tools. The platform targets independent restaurants, restaurant groups, franchises, and dark kitchens with subscription-based pricing starting at €69/month and a €500 setup fee.

The website now features professional Three.js visual elements, mobile-first responsive design, and content inspired by UpMenu's approach and messaging. All revenue showcases and partnership mentions have been removed per user request, focusing instead on the zero-commission value proposition and comprehensive restaurant ordering solutions using similar messaging to UpMenu but branded as SAMEATS.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Content Strategy**: Inspired by UpMenu's messaging and approach but branded as SAMEATS
- **Messaging**: Removed all revenue statistics and partnership mentions per user request, focusing on zero-commission value proposition

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