# AG3 Management LLC - Client Portal & Corporate Site

This is the production-ready React codebase for AG3 Management LLC. The application is built using Vite, React Router, and Tailwind CSS v4, focusing on a responsive, human-centered design language.

## Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4
- **Icons:** Google Material Symbols (Outlined)

## Project Architecture

```
src/
├── components/          # Reusable UI components
│   └── layout/          # Navbar, Footer, AppLayout
├── pages/               # Main route components
│   ├── services/        # Dedicated service pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── CaseStudies.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   └── PrivacyPolicy.jsx
├── App.jsx              # Routing configuration
├── index.css            # Global Tailwind imports & CSS variables
└── main.jsx             # React DOM rendering
```

## Setup & Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   This will start the local Vite development server, usually at `http://localhost:5173`.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   This will output the optimized static files into the `dist/` directory, ready to be deployed to any static host (Vercel, Netlify, AWS S3, etc.).

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## Key Features

- **Responsive Design:** A fluid, mobile-first architecture that seamlessly adapts from 320px mobile screens to 1920px+ desktop environments.
- **Dynamic Routing:** A fully integrated React Router setup with scroll-restoration, supporting deep-linking to dedicated service lines and legal pages.
- **Human-Centered Messaging:** Copywriting that addresses specific client challenges—lack of clarity, operational complexity, and low visibility.
- **Semantic Components:** CSS structures rebuilt utilizing modern Tailwind best practices, abstracting legacy generated DOM spaghetti into maintainable, scalable React components.
