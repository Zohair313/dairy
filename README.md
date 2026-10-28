# 🥛 Super United Dairy — Karachi Online Ordering & Counter POS

Official React Single Page Application (SPA) for **Super United Dairy** (Saddar, Karachi), featuring an artisanal storefront for Desi Ghee, Farm Butter, Flavored Milk Bottles, Shahi Rabri, Doodh Jalebi, and an integrated Staff Counter POS terminal.

> 📍 **Address:** V25J+M4J, Dr. Daudpota Rd, Saddar, Karachi, Pakistan  
> 📞 **Contact:** +92 325 3456015 | WhatsApp Active  
> ⭐ **Rating:** 4.4 ★ (1,861+ Reviews) | Featured in **Dawn Newspaper**  

---

## 🌟 Key Features

1. **Artisanal Luxury Brand Identity**:
   - Custom handcrafted vector SVG crest & emblem (`BrandLogo.jsx`) with no AI artifacts.
   - Luxury heritage color palette: Farm Forest Emerald (`#1e3d2b`), Danedar Amber Gold (`#c88613`), and Fresh Milk Cream.
   - Elegant typography pairing: `Playfair Display` & `Plus Jakarta Sans`.

2. **Customer-Facing Online Ordering**:
   - Dynamic weight & packaging variant selector (e.g. 250g, 500g, 1kg, 2kg, packs of 4).
   - Real-time PKR price calculation.
   - Quick "✓ Added!" micro-feedback on product cards.
   - Slide-out Cart Drawer with address capture and Karachi area selection.
   - **One-Click WhatsApp Order Generator**: Formats a clean, structured Urdu/English invoice sent directly to the dairy's WhatsApp.

3. **High-Speed Staff Counter POS**:
   - Quick-billing interface for in-store counter staff.
   - Instant search, custom discount application (PKR / %), cash denomination change calculator.
   - Formatted 80mm thermal receipt print preview via `window.print()`.

4. **100% Responsive Design**:
   - Tested and verified across Mobile (320px, 375px, 440px), Tablet (768px), and Desktop (1024px, 1440px).
   - Infinite smooth auto-ticker marquee ribbon for daily freshness announcements.
   - Zero horizontal overflow on any viewport.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in `/dist` (~42 KB CSS, ~270 KB JS).

---

## 📁 Project Architecture

```
src/
├── App.jsx                 # Master application controller
├── index.css               # Core design system & responsive media queries
├── data/
│   └── products.js         # Single source of truth for products, pricing & contact info
└── components/
    ├── BrandLogo.jsx       # Artisanal SVG crest & luxury typography
    ├── Navbar.jsx          # Header with WhatsApp order CTA & live cart badge
    ├── HeroSection.jsx     # Hero banner with Dawn citation & brand proof
    ├── HeaderRibbon.jsx    # Infinite auto-scrolling ticker
    ├── ProductsSection.jsx # Category filters & multi-weight product cards
    ├── ProductModal.jsx    # Product detail popup with nutrition facts
    ├── CartDrawer.jsx      # Slide-out basket & WhatsApp dispatcher
    ├── HeritageSection.jsx # Saddar heritage, Dawn link, Google reviews & map
    ├── DeliverySection.jsx # Karachi delivery coverage & schedules
    ├── CounterPOS.jsx      # High-speed staff billing terminal & receipt generator
    ├── Footer.jsx          # Store hours, location, discrete staff POS link
    ├── FloatingWhatsApp.jsx# Bottom-right quick WhatsApp trigger
    └── ScrollToTop.jsx     # Smooth scroll-to-top button
```

---

## 📖 Developer & Handover Documentation

For complete maintenance instructions, adding/updating products, changing WhatsApp contact numbers, modifying delivery fees, and deployment on Vercel/cPanel, please see:  
👉 **[`DEVELOPER_DOCS.md`](./DEVELOPER_DOCS.md)**

---

## 📄 License
Private & Proprietary — Super United Dairy, Karachi.
