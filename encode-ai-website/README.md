# Encode AI - College Club Website

A modern, full-stack website for Encode AI, a competitive programming and AI/ML college club. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Forms**: Contact and recruitment application forms
- **Dynamic Content**: Event listings, team information, and club updates
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Accessible**: WCAG compliant with proper semantic HTML

## 📋 Pages

- **Home**: Hero section, features overview, stats, and upcoming events
- **About**: Club mission, vision, values, team members, and achievements
- **Hackathons**: Upcoming and past hackathons with registration links
- **Events**: Workshops, competitions, and tech talks
- **Recruitment**: Application process and comprehensive application form
- **Contact**: Multiple contact methods, team contacts, and FAQ

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter & JetBrains Mono

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd encode-ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
encode-ai-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   ├── contact/           # Contact page
│   │   ├── events/            # Events page
│   │   ├── hackathons/        # Hackathons page
│   │   ├── recruitment/       # Recruitment page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   └── components/            # Reusable components
│       ├── Footer.tsx         # Site footer
│       └── Navbar.tsx         # Navigation bar
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Colors
The website uses a custom colour palette defined in `tailwind.config.ts`:
- **Primary**: black shades for main brand elements
- **Accent**: grey shades for highlights and CTAs
- **Grey**: Various shades for text and backgrounds

## 🔧 API Routes

### Contact Form (`/api/contact`)
- **Method**: POST
- **Fields**: name, email, subject, message, type
- **Validation**: Email format, required fields
- **Response**: Success/error message

### Recruitment Form (`/api/recruitment`)
- **Method**: POST
- **Fields**: Personal info, preferences, experience, portfolio links
- **Validation**: Email format, URL validation, required fields
- **Response**: Application ID and confirmation

## 🚀 Deployment

### Vercel 
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🔒 Security

- Input validation on all forms
- XSS protection
- CSRF protection (Next.js built-in)
- Secure headers

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For support, email contact@encodeai.club or join our Discord server.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern tech company websites
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by the Encode AI team**
