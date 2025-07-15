# Veluxe Rides - Luxury Car Dealership Website

A premium, production-ready luxury car dealership website built with React, TypeScript, and Tailwind CSS. Features a sophisticated design with dark/light mode, comprehensive vehicle listings, and seamless contact integration.

## 🌟 Features

### Core Functionality
- **Multi-page Architecture**: Home, Vehicles, Services, About, Contact, and individual vehicle detail pages
- **Dark/Light Mode**: Persistent theme switching with smooth transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Advanced Filtering**: Search, category, price range, and year filters
- **Contact Integration**: WhatsApp, phone, and email contact options

### Vehicle Management
- **Comprehensive Vehicle Listings**: Detailed vehicle information with image galleries
- **Load More Functionality**: Pagination with smooth loading
- **Similar Vehicles**: Related vehicle suggestions on detail pages
- **Multiple View Modes**: Grid and list layouts
- **Status Indicators**: Available, sold, and rental status

### User Experience
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Professional Modals**: Service details and contact specialist modals
- **Breadcrumb Navigation**: Clear page location indicators
- **Back to Top**: Floating scroll-to-top button
- **Newsletter Subscription**: Email capture with confirmation
- **Customer Testimonials**: Social proof section

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 Mobile Optimization

- Responsive grid layouts that adapt to screen size
- Touch-friendly buttons and interactions
- Optimized navigation for mobile devices
- Collapsible filters on mobile
- Smooth scrolling and transitions

## 🎨 Design Features

- **Luxury Theme**: Sophisticated black, gray, and gold color scheme
- **Premium Typography**: Clean, modern font hierarchy
- **Professional Cards**: Elegant vehicle and service cards
- **Smooth Transitions**: Polished animations throughout
- **Accessibility**: ARIA labels and keyboard navigation support

## 📞 Contact Integration

- **Phone**: +254 713 380 803
- **WhatsApp**: Pre-filled messages for inquiries
- **Email**: info@veluxerides.ke with professional templates
- **Location**: Nairobi, Kenya

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd veluxe-rides
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── VehicleCard.tsx # Vehicle display card
│   ├── ContactModal.tsx # Contact method selector
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Vehicles.tsx    # Vehicle listings
│   ├── VehicleDetail.tsx # Individual vehicle page
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── context/            # React contexts
│   └── ThemeContext.tsx # Dark/light mode
├── data/               # Static data
│   └── vehicles.ts     # Vehicle inventory
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
└── App.tsx             # Main app component
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_WHATSAPP_NUMBER=254713380803
VITE_PHONE_NUMBER=+254713380803
VITE_EMAIL=info@veluxerides.ke
```

### Customization
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Vehicles**: Update `src/data/vehicles.ts` with your inventory
- **Contact Info**: Update contact details in components
- **Branding**: Replace logo and company name throughout

## 📈 Performance Features

- **Lazy Loading**: Components load on demand
- **Optimized Images**: Responsive image loading
- **Smooth Animations**: Hardware-accelerated transitions
- **Efficient Filtering**: Optimized search and filter logic
- **Local Storage**: Theme and preferences persistence

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email info@veluxerides.ke or contact us through the website.

---

Built with ❤️ for luxury automotive excellence  and CM 🍍.