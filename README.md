# Aurum Realty - Luxury Real Estate Web Application

A sophisticated, enterprise-grade web application for Dubai's premier luxury real estate agency. Built with Next.js, TypeScript, and Tailwind CSS, featuring modern UI/UX design, premium animations, and comprehensive property management functionality.

## 🏗️ Project Overview

Aurum Realty is a full-featured real estate web application designed to showcase luxury properties in Dubai. The application provides an exceptional user experience with sophisticated animations, responsive design, and comprehensive property search and management capabilities.

## ✨ Features

### Core Functionality
- **Property Listings**: JSON-driven property database with 100+ luxury properties
- **Advanced Search & Filtering**: Filter by type, location, price range, and status
- **Property Details**: Comprehensive property pages with image galleries and agent contact
- **User Authentication**: Modern login and registration system with form validation
- **Responsive Design**: Fully mobile-optimized with app-like user experience

### Premium UI/UX
- **Two Unique Sliders**: 
  - Synchronized property slider with left-right animations
  - Featured projects slider with premium dark theme animations
- **Modern Navigation**: Sticky navigation with active states and smooth transitions
- **Professional Sections**: Hero, services, testimonials, market insights, and more
- **Luxury Design**: Emerald color scheme with sophisticated typography (DM Sans)

### Pages & Components
1. **Homepage**: Hero section with property search, featured sliders, and company sections
2. **Property Listings**: Grid/list view with advanced filtering and sorting
3. **Property Details**: Full-screen galleries, specifications, and agent contact
4. **About Us**: Company story, team profiles, values, and milestone timeline
5. **Contact**: Interactive contact form with office information and map
6. **Authentication**: Login and sign-up pages with social authentication options
7. **Custom 404**: Professional error page with navigation options

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Fonts**: DM Sans (headings and body text)
- **Animations**: Custom CSS animations and Tailwind transitions
- **Data**: Local JSON database with TypeScript interfaces

## 🎨 Design System

### Color Palette
- **Primary**: #059669 (Emerald 600) - Call-to-action buttons and highlights
- **Secondary**: #10b981 (Emerald 500) - Interactive elements and accents
- **Neutrals**: White, slate grays for backgrounds and text
- **Semantic**: Success, warning, and error states with appropriate colors

### Typography
- **Headings**: DM Sans Bold
- **Body Text**: DM Sans Regular
- **Hierarchy**: Consistent sizing scale from text-sm to text-6xl

### Components
- **Cards**: Subtle shadows with hover effects and smooth transitions
- **Buttons**: Primary, secondary, and outline variants with hover animations
- **Forms**: Floating labels, validation states, and interactive elements
- **Navigation**: Sticky header with backdrop blur and active states

## 📁 Project Structure

\`\`\`
aurum-realty/
├── app/                          # Next.js App Router pages
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Sign-up page
│   ├── properties/              # Property pages
│   │   ├── page.tsx            # Property listings
│   │   └── [id]/page.tsx       # Individual property details
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and design tokens
│   └── not-found.tsx           # Custom 404 page
├── components/                  # Reusable React components
│   ├── ui/                     # shadcn/ui base components
│   ├── navigation.tsx          # Main navigation component
│   ├── footer.tsx              # Site footer
│   ├── hero-section.tsx        # Homepage hero
│   ├── featured-properties-slider.tsx
│   ├── featured-projects-slider.tsx
│   ├── property-listings.tsx   # Property grid/list view
│   ├── property-detail.tsx     # Property detail page
│   ├── about-content.tsx       # About page content
│   ├── contact-content.tsx     # Contact page content
│   ├── login-form.tsx          # Login form
│   ├── signup-form.tsx         # Registration form
│   └── [other-components].tsx  # Additional UI components
├── data/                       # JSON database
│   └── properties.json         # Property data with 100+ listings
├── lib/                        # Utility functions
│   ├── utils.ts               # General utilities
│   └── property-data.ts       # Property data helpers and types
└── public/                     # Static assets
    └── [images]               # Property and UI images
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd aurum-realty
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📊 JSON Database Structure

The application uses a local JSON file (`data/properties.json`) containing:

### Properties
- **Basic Info**: ID, title, type, price, location, area
- **Details**: Bedrooms, bathrooms, parking, year built, status
- **Media**: Multiple property images
- **Features**: Amenities list and detailed descriptions
- **Agent**: Contact information and profile details

### Featured Projects
- Project information for the premium slider
- Completion dates, unit counts, and price ranges

### Testimonials
- Client reviews with ratings and profile information

## 🎯 Key Features Breakdown

### Property Search & Filtering
- **Search**: Text search across titles, locations, and descriptions
- **Filters**: Property type, location, status, and price range
- **Sorting**: Featured first, price (low/high), newest, largest
- **Views**: Grid and list view modes with responsive layouts

### Interactive Elements
- **Image Galleries**: Full-screen viewers with thumbnail navigation
- **Favorite System**: Heart icons to save preferred properties
- **Contact Forms**: Validation, loading states, and success feedback
- **Hover Effects**: Smooth transitions and scale animations
- **Mobile Optimization**: Touch-friendly interfaces and gestures

### Performance Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Caching**: Static generation for optimal performance

## 🎨 Customization

### Design Tokens
Update the design system by modifying `app/globals.css`:
- Color variables for consistent theming
- Typography scales and font families
- Border radius and spacing values
- Animation durations and easing functions

### Content Management
- **Properties**: Edit `data/properties.json` to add/modify listings
- **Team Members**: Update team data in `components/about-content.tsx`
- **Company Info**: Modify contact details and company information

### Styling
- **Components**: Individual component styling in respective files
- **Global Styles**: Site-wide styles in `app/globals.css`
- **Tailwind Config**: Custom utilities and design tokens

## 🔧 Development Guidelines

### Code Organization
- **Components**: Single responsibility, reusable components
- **Types**: TypeScript interfaces for all data structures
- **Utilities**: Helper functions in the `lib/` directory
- **Styling**: Tailwind classes with semantic naming

### Best Practices
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized images, lazy loading, minimal bundle size
- **SEO**: Proper meta tags, structured data, semantic markup
- **Mobile-First**: Responsive design starting from mobile breakpoints

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, ES6+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**Developed by [Mehedi Pathan](https://mehedipathan.online)**

For questions, support, or custom development services, please visit [mehedipathan.online](https://mehedipathan.online).

---

## 🎉 Acknowledgments

- **Design Inspiration**: Modern real estate websites and luxury brand aesthetics
- **UI Components**: shadcn/ui for consistent, accessible components
- **Icons**: Lucide React for beautiful, consistent iconography
- **Typography**: DM Sans for professional, readable text
- **Color Palette**: Carefully selected emerald tones for luxury appeal

---

*Built with ❤️ for Aurum Realty - Dubai's Premier Luxury Real Estate Agency*
