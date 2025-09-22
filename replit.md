# Vortex Engineering Portfolio

## Overview
This is a React-based portfolio website for Vortex engineering team showcasing their academic projects and technological challenges. The application presents three main challenges (Earth, Water, and Air) in a blog-style format, along with team information, historical context about mechatronics, and detailed project documentation.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API structure with route registration system
- **Development Setup**: Vite middleware integration for hot module replacement
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging for API endpoints

## Key Components

### Client-Side Components
1. **Navigation System**: Sticky navigation with smooth scrolling to sections
2. **Hero Banner**: Full-width banner with background image and overlay
3. **Team Section**: Team member profiles with images and descriptions
4. **History Section**: Educational content about mechatronics origins
5. **Context Section**: Academic foundations and applications
6. **Challenges Section**: Three main project showcases (Earth, Water, Air)
7. **Challenge Blog**: Detailed project documentation with process images

### Server-Side Structure
1. **Route Registration**: Modular route system with HTTP server creation
2. **Storage Interface**: Abstract storage interface with in-memory implementation
3. **Vite Integration**: Development server setup with SSR capabilities

## Data Flow

### Frontend Data Flow
1. **Static Content**: All content is currently static, embedded in components
2. **Navigation**: Client-side routing with smooth scrolling for sections
3. **Component Hierarchy**: Hierarchical component structure with reusable UI elements
4. **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Data Flow
1. **Request Processing**: Express middleware chain with logging and JSON parsing
2. **Route Handling**: Centralized route registration with error boundaries
3. **Storage Layer**: Interface-based storage with in-memory implementation for users
4. **Development Mode**: Vite middleware for asset serving and HMR

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with PostCSS processing
- **UI Components**: Extensive Radix UI component library
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date manipulation
- **Form Handling**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel for image slideshows

### Backend Dependencies
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon Database serverless driver
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation with Drizzle integration
- **Development**: tsx for TypeScript execution in development

### Build and Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict configuration
- **ESLint**: Code linting (configured but not visible in files)
- **Development Server**: Custom Vite setup with error overlay

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit for database schema management
4. **Environment Configuration**: Environment variables for database connection

### Production Setup
- **Server Start**: Node.js serves built Express application
- **Static Assets**: Express serves built frontend from `dist/public`
- **Database**: PostgreSQL with Drizzle ORM migrations
- **Environment**: Production environment variable handling

### Development Workflow
- **Hot Reload**: Vite HMR for frontend changes
- **Server Restart**: tsx watch mode for backend changes
- **Database**: Development database with push migrations
- **Debugging**: Runtime error overlay and source mapping

### Vercel Deployment Ready
- **Configuration**: Added `vercel.json` for proper routing and build setup
- **Free Hosting**: Prepared for deployment on Vercel's free tier
- **Database**: Compatible with Neon Database (free PostgreSQL hosting)
- **Environment**: Production environment variables configured

The application is structured as a monorepo with shared TypeScript types and schemas, enabling type safety across the full stack while maintaining clear separation between frontend and backend concerns.

## Recent Changes
- **Database Integration**: Connected reviews and collaboration systems to PostgreSQL database with proper API endpoints
- **Enhanced Animations**: Added comprehensive micro-animations including hover effects, scale transitions, and smooth theme switching
- **Button Enhancements**: Improved button interactions with hover animations, shadows, and scale effects
- **Dark Mode Support**: Full dark mode implementation with smooth theme transitions positioned next to language switcher
- **Vercel Deployment**: Fixed deployment configuration with proper vercel.json setup and comprehensive deployment guide
- **Error Handling**: Improved API error handling with detailed validation messages
- **Loading States**: Comprehensive loading spinners and skeleton components throughout the application
- **Performance Optimizations**: Enhanced scrollbar styling, selection colors, and accessibility improvements
- **UI Symmetry**: Added heartbeat animation to collaboration icon matching the donation heart icon for visual consistency
- **Navigation Improvements**: Enhanced mobile navigation with proper theme toggle and consistent dark mode styling
- **File Cleanup**: Optimized .gitignore for better npm/GitHub Pages compatibility and removed unnecessary cache files
- **Deployment Fix**: Resolved tsx dependency issue and created multiple deployment options (Vercel, Netlify, static hosting)
- **Content Localization**: Translated all content to Spanish and simplified technical descriptions to match actual project scope
- **Tab Reorganization**: Reordered navigation tabs as requested: Equipo Mecatrónica, Universo Mecatrónico, Equipo de Profesionales, Egresados y Empresas EIA
- **Historical Accuracy**: Corrected mechatronics history to credit Tetsuro Mori (not Ko Kikuchi) as the creator of the term in 1969
- **New Features Added**: 
  - Interactive timeline in Universo Mecatrónico section showing key mechatronics milestones
  - Contact form section placed after collaboration area with complete functionality
  - Manuales y Guías section in footer with downloadable resources
- **UI Improvements**: Unified history section blocks into single cohesive card for better visual flow and content organization