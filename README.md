# Vortex Engineering Portfolio

A modern React-based portfolio website for Vortex engineering team showcasing their technological challenges across earth, water, and air domains.

## Features

- **Interactive Portfolio**: Showcases three main technological challenges
- **Database Integration**: PostgreSQL with Drizzle ORM for reviews and collaboration requests
- **Micro Animations**: Enhanced user experience with smooth transitions and hover effects
- **Dark Mode**: Full dark mode support with smooth theme transitions
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Multi-language Support**: Internationalization support
- **Review System**: Users can rate and review projects
- **Collaboration**: Contact forms for donations and collaboration requests

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui for components
- TanStack Query for state management
- Framer Motion for animations

### Backend
- Express.js with TypeScript
- PostgreSQL database
- Drizzle ORM
- Zod for validation
- Session management

## Quick Start

### Development
```bash
# Install dependencies
npm install

# Push database schema
npm run db:push

# Start development server
npm run dev
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

## Database Setup

The application uses PostgreSQL with Drizzle ORM. The database schema is defined in `shared/schema.ts` and includes:

- **users**: User authentication
- **reviews**: Project reviews and ratings
- **collaboration_requests**: Donation and collaboration requests

To set up the database:

1. Ensure PostgreSQL is running
2. Set the `DATABASE_URL` environment variable
3. Run `npm run db:push` to create tables

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Set environment variables**:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NODE_ENV`: Set to "production"
3. **Deploy**: Vercel will automatically build and deploy

The `vercel.json` configuration handles:
- API routes routing to the Express server
- Static file serving
- Production environment setup

### Manual Deployment

For other platforms:

1. **Build the project**: `npm run build`
2. **Set environment variables**:
   - `DATABASE_URL`
   - `NODE_ENV=production`
3. **Start the server**: `npm start`

## API Endpoints

### Reviews
- `POST /api/reviews` - Create a new review
- `GET /api/reviews/:challengeType` - Get reviews for a specific challenge
- `GET /api/reviews` - Get all reviews

### Collaboration
- `POST /api/collaboration` - Create collaboration/donation request
- `GET /api/collaboration` - Get all requests (admin)

### Health Check
- `GET /api/health` - Server health status

## Environment Variables

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development|production
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom hooks
├── server/                 # Backend Express server
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   └── db.ts               # Database connection
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema
└── vercel.json             # Vercel deployment config
```

## Animation Features

The application includes comprehensive micro-animations:

- **Button Interactions**: Hover effects with scale and shadow
- **Card Animations**: Smooth hover transitions with elevation
- **Loading States**: Skeleton screens and spinners
- **Page Transitions**: Fade-in and slide animations
- **Theme Transitions**: Smooth color transitions for dark mode

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.