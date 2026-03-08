# 🌸 Our Blooms - Flower Shop

A modern, responsive e-commerce website for a Miami-based flower shop built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🛒 E-Commerce Functionality
- **Shopping Cart**: Add flowers to cart with real-time updates
- **Cart Management**: Adjust quantities, remove items, view totals
- **Checkout Process**: Complete checkout flow with delivery and payment forms
- **Order Confirmation**: Success page with order number and confirmation

### 🌺 Product Features
- **Product Gallery**: Browse 9 unique flower bouquets with prices
- **Product Images**: Optimized WebP images for fast loading
- **Add to Cart**: One-click add to cart from gallery
- **Price Display**: Clear pricing with delivery fee calculation

### 🚚 Delivery & Services
- **Same-Day Delivery**: Orders before 2 PM
- **Free Delivery**: On orders over $75
- **Subscription Boxes**: Weekly or monthly flower deliveries
- **Custom Bouquets**: Build your own arrangements

### 📱 User Experience
- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Navigation**: Auto-scroll to top on page changes
- **Cart Badge**: Live item count in navigation
- **Image Optimization**: WebP format with lazy loading
- **Image Prefetching**: Faster page transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xjarifx/FlowerShop-Frontend.git
   cd FlowerShop-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
The project is configured for Vercel deployment:
```bash
vercel deploy
```

## 🗂️ Project Structure

```
FlowerShop-Frontend/
├── public/
│   └── assets/          # Product images (WebP format)
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── About.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── ContractPage.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── context/        # React Context (Cart state)
│   ├── constants/      # App constants and config
│   ├── data/          # Site data and content
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── databaseDump/      # Mock database (JSON)
├── scripts/           # Build scripts
└── package.json
```

## 🎨 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Image Optimization**: Custom WebP generation
- **State Management**: React Context API
- **Deployment**: Vercel

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run optimize:images` | Generate WebP images |

## 📄 Pages

### Home (`/`)
- Hero section with special offer
- About section
- Image slider
- Services overview
- Call-to-action sections

### Shop (`/gallery`)
- Product grid with 9 bouquets
- Add to cart functionality
- Price display
- Services information

### About (`/about`)
- Founder story
- Company history
- Feature images
- Call-to-action

### Delivery & FAQ (`/contract`)
- Delivery information
- Frequently asked questions
- Return policy
- Care instructions

### Cart (`/cart`)
- Cart items with images
- Quantity adjustment
- Remove items
- Order summary
- Delivery fee calculation

### Checkout (`/checkout`)
- Delivery information form
- Payment form (demo)
- Order summary
- Form validation

### Order Success (`/order-success`)
- Order confirmation
- Order number
- Thank you message
- Continue shopping CTA

## 🎯 Key Features Explained

### Shopping Cart
The cart uses React Context for global state management. Items persist across page navigation and include:
- Product details (name, price, image)
- Quantity management
- Automatic total calculation
- Free delivery threshold tracking

### Image Optimization
- All images converted to WebP format
- Lazy loading for better performance
- Responsive images with srcset
- Image prefetching for faster navigation

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface
- Collapsible mobile menu

## 🔧 Configuration

### Site Configuration
Edit `src/constants/index.ts` to update:
- Site name and location
- Free delivery threshold
- Delivery fee
- Order cutoff time

### Product Data
Edit `databaseDump/fetchedData.json` to update:
- Product names and prices
- Service descriptions
- Hero content
- Footer information

## 🚀 Performance Optimizations

- **WebP Images**: 25-35% smaller than JPEG
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Route-based code splitting
- **Image Prefetching**: Preload images on hover
- **Optimized Builds**: Minified and tree-shaken

## 🎨 Design System

### Colors
- **Primary**: Amber (#FCD34D)
- **Background**: Zinc-100 (#F4F4F5)
- **Text**: Zinc-900 (#18181B)
- **Borders**: Zinc-300 (#D4D4D8)

### Typography
- **Headings**: Extrabold, Uppercase
- **Body**: Regular, 14-16px
- **Brand**: Custom font family

## 📝 License

This project is private and proprietary.

## 👤 Author

**Jarif**
- GitHub: [@xjarifx](https://github.com/xjarifx)

## 🤝 Contributing

This is a private project. Contributions are not currently accepted.

## 📞 Support

For support, please contact the repository owner.

---

Made with ❤️ in Miami, FL
