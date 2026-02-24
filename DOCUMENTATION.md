# 📋 Portfolio Project Documentation

## Quick Reference

**Project**: Rashmi Bharti - ML & Backend Engineer Portfolio
**Status**: ✅ Production Ready
**Live Site**: Deploy to GitHub Pages, Vercel, or Netlify (see DEPLOYMENT.md)

---

## 📁 Project Structure

```
d:\Side Projects\Resume/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation with dark mode toggle
│   │   ├── Hero.tsx            # Landing section with intro & CTAs
│   │   ├── Experience.tsx       # Work timeline with achievements
│   │   ├── Projects.tsx         # Project showcase cards
│   │   ├── Skills.tsx           # Tech stack badges by category
│   │   ├── Certifications.tsx   # Certs, awards, milestones
│   │   ├── Contact.tsx          # Contact methods & CTA
│   │   ├── Footer.tsx           # Footer with links
│   │   └── SectionTitle.tsx     # Reusable section header
│   ├── App.tsx                 # Main app with dark mode state
│   ├── App.css                 # App-level styles
│   ├── index.css               # Tailwind + custom styles
│   └── main.tsx                # React entry point
├── index.html                  # HTML template with SEO meta tags
├── public/                     # Static assets (fonts, images)
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.ts              # Vite build configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
├── README.md                   # Project overview
├── DEPLOYMENT.md               # Detailed deployment guide
└── dist/                       # Production build (after `npm run build`)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository (if using git)
git clone https://github.com/rashmibharti/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The development server runs at `http://localhost:5173` with hot module replacement (HMR).

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 19 + TypeScript | UI components & type safety |
| **Build Tool** | Vite 7 | Lightning-fast development & production builds |
| **Styling** | TailwindCSS 4 + PostCSS | Utility-first CSS framework |
| **Animations** | Framer Motion | Smooth page transitions & hover effects |
| **Routing** | React Router | (Prepared for multi-page expansion) |
| **Icons** | React Icons | Scalable SVG icon sets |
| **Deploy** | GitHub Pages/Vercel/Netlify | Free hosting options |

---

## 💻 Development

### Available Scripts

```bash
npm run dev       # Start development server (http://localhost:5173)
npm run build     # Build for production (creates dist/ folder)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
npm run deploy    # Alias for build (customize as needed)
```

### Code Structure

**Components**: Each major section is its own component in `src/components/`
- Self-contained with their own data
- Accept props (Navbar needs darkMode state)
- Use Framer Motion for animations
- Responsive with Tailwind classes

**Styling Approach**:
- Tailwind utility classes for responsive design
- Custom `.card`, `.btn-primary`, `.btn-secondary` components in CSS
- Dark mode with `dark:` prefix (automatically detected with `class` strategy)
- Custom gradient text with `.gradient-text`

**Dark Mode**: 
- Toggle stored in App.tsx state
- Persisted to localStorage
- Applied via `document.documentElement.classList`

---

## 📝 Customization Guide

### 1. Update Personal Information

**Hero Section** - `src/components/Hero.tsx`:
```tsx
// Change name, title, intro text
<h1>Hi, I'm <span className="gradient-text">Your Name</span></h1>
<p>Your Job Title & Specialization</p>

// Update social links
<motion.a href="https://linkedin.com/in/yourprofile">
```

**Experience** - `src/components/Experience.tsx`:
```tsx
const experienceData: ExperienceItem[] = [
  {
    role: 'Your Role',
    company: 'Your Company',
    period: '2024 - Present',
    // ... add your experiences
  },
];
```

**Projects** - `src/components/Projects.tsx`:
```tsx
const projectsData: Project[] = [
  {
    title: 'Your Project',
    description: 'Description',
    details: ['Feature 1', 'Feature 2'],
    techStack: ['React', 'TypeScript'],
    github: 'https://github.com/yourrepo',
    live: 'https://project.demo.com',
  },
];
```

**Skills** - `src/components/Skills.tsx`:
```tsx
const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'SQL'],
    proficiency: 'Expert',
  },
];
```

**Certifications** - `src/components/Certifications.tsx`:
```tsx
const certificationsData: Certification[] = [
  {
    title: 'Your Certification',
    issuer: 'Issuer Name',
    date: 'Month Year',
    type: 'certification', // or 'achievement' or 'milestone'
  },
];
```

**Contact** - `src/components/Contact.tsx`:
```tsx
// Update email and social links
href: 'mailto:your.email@example.com'
href: 'https://linkedin.com/in/yourprofile'
```

### 2. Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'custom-primary': '#YourColor',
    },
  },
}
```

Then use in components:
```tsx
className="bg-custom-primary hover:bg-custom-primary/90"
```

### 3. Add Resume PDF

1. Create `public/` folder if it doesn't exist
2. Add `Rashmi_Bharti_Resume.pdf` to `public/`
3. Update Hero.tsx button:
```tsx
<motion.button
  onClick={() => window.open('/Rashmi_Bharti_Resume.pdf', '_blank')}
  className="btn-primary"
>
  Download Resume
</motion.button>
```

### 4. Update SEO Meta Tags

Edit `index.html`:
```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta property="og:title" content="Your Name | Your Title" />
```

### 5. Add New Sections

Create new component in `src/components/NewSection.tsx`:
```tsx
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';

const NewSection = () => {
  return (
    <section id="newsection" className="section bg-white dark:bg-gray-900">
      <SectionTitle title="Section Title" />
      {/* Your content */}
    </section>
  );
};

export default NewSection;
```

Then import and add to `App.tsx`:
```tsx
import NewSection from './components/NewSection';

// Inside App component JSX:
<NewSection />
```

---

## 🎨 Design System

### Colors
- **Primary**: `#3B82F6` (Blue)
- **Secondary**: `#1F2937` (Dark Gray)
- **Dark Mode**: `#0F172A` (Navy)
- **Text**: Gray 900 (light) / Gray 100 (dark)
- **Accents**: Purple, Green, Orange for variety

### Typography
- **Font**: Inter (from Google Fonts)
- **Headings**: Bold, 4xl-5xl
- **Body**: Regular, lg
- **Monospace**: JetBrains Mono (for code)

### Spacing
- Section padding: `py-16 md:py-20 px-4 md:px-8`
- Card spacing: `p-6` with `gap-8` between cards
- Follows Tailwind scale: `2, 4, 6, 8, 12, 16, 20, 24`

### Animations
- **Entrance**: Fade-in and slide-up (0.3-0.6s)
- **Interactions**: Scale on hover, stagger on list items
- **Scroll**: Trigger animations when sections come into view
- **Dark mode**: Smooth transitions on toggle

---

## 📱 Responsive Breakpoints

- **Mobile**: Default styles (< 640px)
- **Tablet**: `md:` prefix (≥ 768px)
- **Desktop**: `lg:` prefix (≥ 1024px)

Tested on:
- iPhone 12/13/14 (375px)
- iPad Pro (1024px)
- MacBook (2560px)

---

## 🔍 SEO Optimization

✅ Implemented:
- Meta tags for Open Graph (OG)
- Twitter Card tags
- Descriptive title & meta description
- Semantic HTML structure
- Fast load times (Vite optimization)
- Mobile-responsive design
- Schema.org structured data (can be added)

---

## 📊 Performance Tips

1. **Image Optimization**: Compress images before adding
2. **Code Splitting**: Vite handles automatically
3. **Caching**: TailwindCSS unused styles are purged
4. **Minification**: Vite minifies JS and CSS in production
5. **Lazy Loading**: React components lazy loaded on scroll

**Lighthouse Scores**: Target 90+ on all metrics

---

## 🚢 Deployment

See `DEPLOYMENT.md` for complete guide on:
- ✅ GitHub Pages (free, simple)
- ✅ Vercel (easiest, auto-deploy)
- ✅ Netlify (feature-rich)

Quick start:
```bash
npm run build
```

This creates `dist/` folder ready for deployment.

---

## 🐛 Troubleshooting

### Build Errors
- Clear `node_modules` and `dist`: `rm -rf node_modules dist`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### Styles Not Working
- Restart dev server
- Check Tailwind config content paths
- Clear browser cache

### Dark Mode Not Working
- Check browser localStorage
- Verify `document.documentElement.classList` includes "dark"
- Restart dev server

### Components Not Rendering
- Check imports in App.tsx
- Verify no TypeScript errors: `npm run lint`
- Check browser console for errors

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Support

Need help? Check:
1. This documentation
2. Component code comments
3. Browser console for errors
4. Deployment guide for platform-specific issues

---

**Last Updated**: February 23, 2026
**Version**: 1.0.0
