# Developer Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. It showcases an about section, skills, work experience, projects, certifications, and a working contact form — all in a fast, single-page app powered by Vite.

## Features

- **Hero section** with intro and call-to-action
- **About** section
- **Skills** overview
- **Experience** timeline
- **Portfolio / Projects** showcase
- **Services** offered
- **Certifications** section
- **Contact form** with email delivery via [EmailJS](https://www.emailjs.com/)
- Responsive navbar with smooth in-page navigation
- Toast notifications for form feedback
- Fully responsive, mobile-friendly layout
- Custom 404 (Not Found) page

## Tech Stack

- **[Vite](https://vitejs.dev/)** – build tool and dev server
- **[React 18](https://react.dev/)** + **TypeScript**
- **[React Router](https://reactrouter.com/)** – client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** – utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** + **[Radix UI](https://www.radix-ui.com/)** – accessible UI primitives
- **[TanStack Query](https://tanstack.com/query)** – data/state management
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** – forms and validation
- **[EmailJS](https://www.emailjs.com/)** – contact form email delivery
- **[Lucide React](https://lucide.dev/)** – icons
- **ESLint** – linting

## Project Structure

```
Developer_Portfolio/
├── public/                     # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/                 # Images and static media
│   ├── components/
│   │   ├── ui/                 # shadcn/ui base components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CertificationSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navbar.tsx / NavLink.tsx
│   │   └── Footer.tsx
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/
│   │   ├── Index.tsx           # Main landing page (assembles all sections)
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # App routes and providers
│   ├── main.tsx                # App entry point
│   ├── App.css / index.css     # Global styles
│   └── vite-env.d.ts
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig*.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm — or [Bun](https://bun.sh/), since a `bun.lockb` is included

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/Developer_Portfolio.git
   cd Developer_Portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
   or, with Bun:
   ```bash
   bun install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

| Command             | Description                                  |
|----------------------|-----------------------------------------------|
| `npm run dev`        | Start the local development server            |
| `npm run build`      | Build the app for production                  |
| `npm run build:dev`  | Build in development mode                      |
| `npm run lint`       | Run ESLint on the project                       |
| `npm run preview`    | Preview the production build locally           |

## Configuring the Contact Form (EmailJS)

The contact form sends messages using EmailJS. The service ID, template ID, and public key are currently set directly in `src/components/ContactSection.tsx`. Before deploying your own copy:

1. Create an account at [EmailJS](https://www.emailjs.com/) and set up a service + email template.
2. Replace the `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` values in `ContactSection.tsx` with your own.
3. For better security, consider moving these into environment variables (e.g. a `.env` file with `VITE_` prefixed keys) instead of hardcoding them in source.

## Customization

- Update personal details, project entries, skills, and experience directly within the relevant component files in `src/components/`.
- Replace images in `src/assets/` (e.g. profile photo) with your own.
- Adjust theme colors and design tokens in `tailwind.config.ts` and `src/index.css`.

## Deployment

Since this is a standard Vite + React app, it can be deployed to any static hosting provider, such as:

- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Build the project first with `npm run build`, then deploy the contents of the generated `dist/` folder.

## License

This project currently has no license specified. Add a `LICENSE` file if you intend to open-source it under a specific license (e.g. MIT).
