# Portfolio - Adhitya Giva Muhammad

Professional portfolio website showcasing my experience, projects, and skills as an Engineering Leader and Backend Specialist.

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Full-Stack Framework**: TanStack Start (with TanStack Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Remix Icon
- **Build Tool**: Vite
- **Server-Side Rendering**: Full SSR support with TanStack Start
- **Deployment**: Ready for Vercel/Netlify/Cloudflare

## 📋 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode support with system preference detection
- ✅ SEO optimized with server-side rendered meta tags
- ✅ Type-safe routing with TanStack Router
- ✅ Full SSR (Server-Side Rendering) support
- ✅ Accessible navigation and UI components
- ✅ Performance optimized with code splitting
- ✅ Professional resume download
- ✅ Contact form integration
- ✅ Modern Tailwind CSS v4 styling

## 📄 Pages

1. **Home** - Hero section with introduction and quick stats
2. **About** - Detailed background, education, certifications, and skills
3. **Experience** - Professional work history with timeline view
4. **Projects** - Portfolio of key projects with filtering
5. **Contact** - Contact information and message form

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Navigate to project directory
cd portfolio-adhitya

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-adhitya/
├── public/
│   ├── Adhitya Giva Muhammad - Resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── routes/
│   │   ├── __root.tsx          # Root layout with SSR shell
│   │   ├── index.tsx            # Home page
│   │   ├── about.tsx            # About page
│   │   ├── experience.tsx       # Experience page
│   │   ├── projects.tsx         # Projects page
│   │   └── contact.tsx          # Contact page
│   ├── data/
│   │   ├── profile.ts           # Personal information
│   │   ├── experience.ts        # Work experience data
│   │   ├── projects.ts          # Projects data
│   │   └── education.ts         # Education & certifications
│   ├── router.tsx               # Router configuration
│   ├── routeTree.gen.ts         # Auto-generated route tree
│   └── index.css                # Global styles with Tailwind v4
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite + TanStack Start config
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `profile.ts` - Name, contact info, bio, skills
- `experience.ts` - Work history
- `projects.ts` - Portfolio projects
- `education.ts` - Education and certifications

### Update Colors

Modify the color scheme in `src/index.css` using the `@theme` directive (Tailwind v4):

```css
@theme {
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  /* Add more custom colors */
}
```

## 🌐 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

## 📝 SEO

The portfolio includes:
- Server-side rendered meta tags for optimal SEO
- Open Graph tags for social media
- Twitter Card metadata
- Sitemap.xml for search engine crawling
- Robots.txt for crawler instructions
- Semantic HTML structure
- Fast loading times with SSR
- Full hydration for interactive elements

## 📧 Contact

**Adhitya Giva Muhammad**
- Email: adhitya.giva@gmail.com
- LinkedIn: [linkedin.com/in/adhiva](https://www.linkedin.com/in/adhiva/)
- GitHub: [github.com/adhiva](https://www.github.com/adhiva/)

## 📄 License

This project is open source and available for personal use.

## 🔄 Migration to TanStack Start

This portfolio has been migrated from TanStack Router to **TanStack Start**, providing:
- Full-stack SSR capabilities
- Better SEO with server-rendered pages
- Modern Tailwind CSS v4 integration
- Improved performance and loading times
- Type-safe server and client code

---

Built with ❤️ using React, TypeScript, TanStack Start & Tailwind CSS v4
