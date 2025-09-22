# Deployment Guide - Free Hosting on Vercel

Your mechatronics portfolio website is ready for deployment! Here's how to deploy it for free on Vercel.

## Prerequisites
- A GitHub account
- A Vercel account (free - sign up at vercel.com)
- A PostgreSQL database (we'll use Neon Database, also free)

## Step 1: Download Your Project
1. In Replit, go to Files → Download as ZIP
2. Extract the ZIP file on your computer
3. Remove the `.replit` file (not needed for Vercel)

## Step 2: Upload to GitHub
1. Go to github.com and create a new repository
2. Name it something like "mechatronics-portfolio"
3. Upload all your project files to the repository
4. Make sure to include the `vercel.json` file I created

## Step 3: Set Up Database (Free)
1. Go to neon.tech and create a free account
2. Create a new database project
3. Copy your database connection string (it looks like: `postgresql://username:password@host/database`)
4. Save this - you'll need it for Vercel

## Step 4: Deploy on Vercel
1. Go to vercel.com and sign in
2. Click "New Project"
3. Import your GitHub repository
4. In the deployment settings:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
   - Root Directory: Leave empty (should be `/`)

**Important**: The updated `vercel.json` file should handle the build configuration automatically.

## Step 5: Add Environment Variables
In your Vercel project settings, add:
- `DATABASE_URL`: Your Neon database connection string
- `NODE_ENV`: `production`

## Step 6: Deploy Database Schema
After deployment, you'll need to push your database schema:
1. In your local project, update the `drizzle.config.ts` with your production database URL
2. Run `npm run db:push` to create the tables

## Features Included
✅ Full Spanish/English bilingual support
✅ Three challenge showcases (Earth, Water, Air)
✅ Team member profiles
✅ Review system with ratings
✅ Donation and collaboration forms
✅ Responsive design
✅ Loading states and animations
✅ PostgreSQL database integration

## Troubleshooting
- If deployment fails, check the build logs in Vercel
- Make sure your database connection string is correct
- Verify all environment variables are set

Your website will be available at: `https://your-project-name.vercel.app`

## Alternative Free Hosting Options
- **Netlify**: Similar to Vercel, great for static sites
- **Railway**: Good for full-stack apps with databases
- **Render**: Free tier with PostgreSQL database included

Need help with deployment? Let me know!