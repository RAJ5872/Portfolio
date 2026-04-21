# Raj Panchal Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Glassmorphism effects, smooth animations, and gradients
- **Interactive Elements**: Framer Motion animations, hover effects
- **Contact Form**: EmailJS integration for direct messaging
- **Project Showcase**: Live demos and GitHub repository links
- **Resume Download**: Direct resume download functionality

## Tech Stack

- **Frontend**: React 18, Vite 4
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Build Tool**: Vite with Terser optimization

## Project Structure

```
src/
  components/          # React components
    - Hero.jsx         # Main hero section
    - Navbar.jsx       # Navigation component
    - Projects.jsx     # Projects showcase
    - Contact.jsx      # Contact form with EmailJS
    - About.jsx        # About section
    - Skills.jsx       # Skills section
    - etc.
  assets/
    projects/          # Project images and resume
  App.jsx              # Main app component
  main.jsx             # App entry point
```

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is optimized for deployment on various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add any environment variables if needed

### GitHub Pages
1. Build command: `npm run build`
2. Deploy the `dist` folder to `gh-pages` branch

### Static Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## Environment Variables

For the contact form to work, ensure EmailJS credentials are properly configured in the Contact component.

## Performance Optimizations

- **Code Splitting**: Manual chunks for vendor libraries
- **Tree Shaking**: Unused code removal
- **Minification**: Terser optimization
- **Image Optimization**: Proper image formats and lazy loading
- **Bundle Analysis**: Optimized chunk sizes

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2026 Raj Panchal. All rights reserved.
