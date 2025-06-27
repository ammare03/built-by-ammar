# 🚀 Built By Ammar - Modern Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.21-ff69b4?style=for-the-badge&logo=framer&logoColor=white)

**A modern, responsive developer portfolio showcasing projects, skills, and experience with stunning animations and interactive design.**

[🌐 **Live Demo**](https://built-by-ammar.vercel.app/) | [📁 **View Code**](https://github.com/ammare03/built-by-ammar) | [📧 **Contact**](mailto:engineer.ammar18724@gmail.com)

</div>

---

## ✨ **About This Project**

This is a cutting-edge developer portfolio built with modern web technologies, featuring smooth animations, responsive design, and an intuitive user experience. The portfolio showcases my journey as a developer, highlighting projects, education, skills, and professional experience.

### 🎯 **Key Highlights**

- **🎨 Modern Design**: Clean, professional interface with subtle animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Built with Next.js 14 for lightning-fast loading
- **🎭 Interactive Animations**: Powered by Framer Motion for engaging user experience
- **🎨 Beautiful UI Components**: Custom components with Tailwind CSS and shadcn/ui
- **♿ Accessible**: Built with accessibility best practices in mind

---

## 🌟 **Features**

### 🏠 **Hero Section**

- Animated personal memoji with orbital elements
- Dynamic background with grain texture
- Interactive call-to-action buttons
- Smooth scroll navigation

### 💼 **Projects Showcase**

- **NeuroPDF**: AI-powered PDF summarization tool with interactive navigation
- **Wardrobe Wizard**: Smart outfit suggestions with weather integration
- **UniResell**: University marketplace for second-hand items
- Project cards with hover effects and live demo links

### 🎓 **Education Timeline**

- Interactive education journey display
- Institution logos and achievements
- Animated progress indicators

### 👨‍💻 **About Section**

- Personal story and career journey
- Skills and technology stack
- Professional experience highlights

### 📬 **Contact Integration**

- Multiple contact methods
- Social media links
- Professional networking options

### 🛠 **Technical Skills Display**

- Technology stack visualization
- Animated skill icons
- Proficiency indicators

---

## 🚀 **Live Demo**

Experience the portfolio in action: **[https://built-by-ammar.vercel.app/](https://built-by-ammar.vercel.app/)**

---

## 🛠️ **Built With**

### **Core Technologies**

- **[Next.js 14.2.5](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library

### **Styling & UI**

- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful and accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[class-variance-authority](https://cva.style/)** - Component variant management

### **Animations & Interactions**

- **[Framer Motion 11.3.21](https://www.framer.com/motion/)** - Production-ready motion library
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Tailwind CSS animations

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

---

## 📁 **Project Structure**

```
built-by-ammar/
├── 📄 README.md
├── ⚙️ next.config.mjs
├── 📦 package.json
├── 🎨 tailwind.config.ts
├── 📘 tsconfig.json
├── 🌐 public/
│   ├── next.svg
│   └── vercel.svg
└── 📁 src/
    ├── 📁 app/
    │   ├── 🌐 globals.css
    │   ├── 📄 layout.tsx
    │   └── 🏠 page.tsx
    ├── 🎨 assets/
    │   ├── 🎯 icons/          # SVG icons
    │   └── 🖼️ images/         # Project images & photos
    ├── 🧩 components/
    │   ├── 🎴 Card.tsx
    │   ├── 🌟 HeroOrbit.tsx
    │   ├── 🛠️ TechIcon.tsx
    │   ├── 🎭 bits/
    │   │   └── FadeContent.tsx
    │   └── 🎨 ui/             # shadcn/ui components
    ├── 📚 lib/
    │   └── utils.ts           # Utility functions
    └── 📑 sections/
        ├── 🏠 Hero.tsx
        ├── 💼 Projects.tsx
        ├── 🎓 Education.tsx
        ├── 👨‍💻 About.tsx
        ├── 📬 Contact.tsx
        └── 🦶 Footer.tsx
```

---

## 🚀 **Getting Started**

### **Prerequisites**

Make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** / **yarn** / **pnpm** / **bun**

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/ammare03/built-by-ammar.git
   cd built-by-ammar
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### **Available Scripts**

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 🎨 **Customization Guide**

### **Personal Information**

Update personal details in the following files:

- `src/sections/Hero.tsx` - Hero section content
- `src/sections/About.tsx` - About section details
- `src/sections/Contact.tsx` - Contact information

### **Projects**

Add or modify projects in `src/sections/Projects.tsx`:

```typescript
const portfolioProjects = [
  {
    company: "Your Company",
    year: "2024",
    title: "Your Project",
    results: [{ title: "Key achievement 1" }, { title: "Key achievement 2" }],
    link: "https://your-project-link.com",
    image: yourProjectImage,
  },
  // Add more projects...
];
```

### **Education**

Update education details in `src/sections/Education.tsx`

### **Styling**

- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Components**: Customize components in `src/components/`

### **Assets**

Replace images and icons in:

- `src/assets/images/` - Project screenshots, profile images
- `src/assets/icons/` - Technology and UI icons

---

## 📱 **Responsive Design**

The portfolio is fully responsive and optimized for:

| Device           | Breakpoint     | Features                          |
| ---------------- | -------------- | --------------------------------- |
| 📱 Mobile        | < 768px        | Stacked layout, touch-friendly    |
| 📱 Tablet        | 768px - 1024px | Adaptive grid, optimized spacing  |
| 💻 Desktop       | > 1024px       | Full layout, hover effects        |
| 🖥️ Large Screens | > 1440px       | Enhanced spacing, larger elements |

---

## ⚡ **Performance Features**

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages for better SEO
- **Lazy Loading**: Images and components loaded on demand
- **Optimized Fonts**: Google Fonts optimization with Next.js

---

## 🎯 **SEO & Accessibility**

- **Semantic HTML**: Proper HTML structure and landmarks
- **Meta Tags**: Comprehensive meta tags and Open Graph
- **Alt Text**: Descriptive alt text for all images
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Optimized for screen readers
- **Color Contrast**: WCAG compliant color contrasts

---

## 🚀 **Deployment**

### **Vercel (Recommended)**

1. **Connect to Vercel**

   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Automatic Deployments**
   - Every push to main branch triggers deployment
   - Preview deployments for pull requests

### **Other Platforms**

The project can be deployed to:

- **Netlify**: `npm run build` then deploy `out/` folder
- **GitHub Pages**: Configure GitHub Actions for deployment
- **Railway**: Connect repository for automatic deployments
- **DigitalOcean App Platform**: Import from GitHub

---

## 🤝 **Contributing**

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Test on multiple devices and browsers

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 **Contact & Support**

**Ammar** - Portfolio Developer

- 🌐 **Website**: [https://built-by-ammar.vercel.app/](https://built-by-ammar.vercel.app/)
- 📧 **Email**: [your-email@example.com](mailto:engineer.ammar18724@gmail.com)
- 💼 **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/ammar-engineer-9b673b326/)
- 🐱 **GitHub**: [@ammare03](https://github.com/ammare03)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

</div>
