# AJAY Sync Hub - Next.js Full-Stack Application

This is a full-stack Next.js application for PM-AJAY (Pradhan Mantri - Adarsh Gram, GIA, and Hostel) project management platform.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** Supabase Auth
- **Database:** Supabase (PostgreSQL)
- **State Management:** React Query (TanStack Query)

## Project Structure

```
ajay-sync-hub-nextjs/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── api/               # API routes (backend)
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   └── projects/     # Projects CRUD endpoints
│   │   ├── auth/             # Authentication page
│   │   ├── dashboard/        # Dashboard page
│   │   ├── projects/         # Projects page
│   │   ├── agencies/         # Agencies page
│   │   ├── reports/          # Reports page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── providers.tsx     # Client-side providers
│   │   └── globals.css       # Global styles
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── StatCard.tsx
│   ├── lib/                   # Utility functions
│   │   ├── supabase/         # Supabase clients
│   │   │   ├── client.ts     # Browser client
│   │   │   ├── server.ts     # Server client
│   │   │   └── middleware.ts # Middleware helper
│   │   └── utils.ts
│   ├── integrations/          # External integrations
│   │   └── supabase/
│   │       └── types.ts      # Database types
│   └── hooks/                 # Custom React hooks
├── middleware.ts              # Next.js middleware for auth
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Supabase account (for authentication and database)

### Installation

1. **Clone the repository**

```bash
git clone <YOUR_GIT_URL>
cd ajay-sync-hub
```

2. **Install dependencies**

```bash
npm install
# or
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your [Supabase Dashboard](https://app.supabase.com):
- Go to Project Settings > API
- Copy the Project URL and anon/public key

4. **Run the development server**

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Frontend
- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Component library with shadcn/ui
- ✅ Client-side routing with Next.js App Router
- ✅ Authentication flow (Sign In / Sign Up)
- ✅ Protected routes with middleware
- ✅ Real-time updates with React Query
- ✅ Dark mode support with next-themes

### Backend (API Routes)
- ✅ `/api/auth/user` - Get current user
- ✅ `/api/auth/signout` - Sign out user
- ✅ `/api/projects` - CRUD operations for projects
- ✅ Server-side authentication with Supabase
- ✅ Protected API routes

## Key Differences from Vite Version

### Routing
- **Before (Vite):** React Router DOM with `<BrowserRouter>`
- **Now (Next.js):** File-based routing with App Router

### Data Fetching
- **Before:** Client-side only
- **Now:** Server Components + Client Components
  - Server Components for initial data loading
  - Client Components for interactive UI

### Authentication
- **Before:** Client-side only with AuthContext
- **Now:** 
  - Server-side auth checks in page components
  - Middleware for route protection
  - Separate Supabase clients for server/client

### API
- **Before:** Direct Supabase calls from components
- **Now:** 
  - API routes in `/app/api`
  - Server-side Supabase client for secure operations

## Development Guidelines

### Creating a New Page

1. Create a new folder in `src/app/[pagename]`
2. Add `page.tsx` (server component)
3. Add `[PageName]Client.tsx` for interactive UI (client component)
4. Mark client component with `"use client"` directive

### Creating an API Route

1. Create a new folder in `src/app/api/[routename]`
2. Add `route.ts` with GET, POST, PUT, DELETE exports
3. Use server-side Supabase client for database operations
4. Add authentication checks

### Using Client vs Server Components

**Use Server Components for:**
- Fetching data
- Accessing backend resources
- Keeping sensitive information server-side

**Use Client Components for:**
- Interactive UI (onClick, onChange, etc.)
- React hooks (useState, useEffect, etc.)
- Browser APIs

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes |

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- Railway
- AWS
- DigitalOcean
- Self-hosted Node.js server

## Database Setup (Optional)

To enable full CRUD functionality:

1. Create tables in your Supabase database
2. Update the types in `src/integrations/supabase/types.ts`
3. Uncomment the database queries in API routes
4. Add Row Level Security (RLS) policies in Supabase

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/854361c6-b2a2-41a5-8882-65a4e909c4c2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
