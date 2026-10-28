# Super United Dairy — Developer & Client Handover Documentation

> **Official Technical & Operational Handover Document**  
> **Brand:** Super United Dairy (Dr. Daudpota Rd, Saddar, Karachi)  
> **Platform:** Responsive Online Ordering Storefront & Counter POS System  
> **Version:** 1.0.0 (Production Ready)  
> **Date:** October 2026  

---

## 📋 Table of Contents
1. [Project Overview](#1-project-overview)
2. [Tech Stack & Architecture](#2-tech-stack--architecture)
3. [Project Directory Structure](#3-project-directory-structure)
4. [Getting Started (Local Development)](#4-getting-started-local-development)
5. [Key Features & Modules](#5-key-features--modules)
6. [Client Maintenance Guide (How to Edit Content)](#6-client-maintenance-guide)
   - [6.1 Updating WhatsApp Number & Phone](#61-updating-whatsapp-number--phone)
   - [6.2 Adding or Modifying Products & Prices](#62-adding-or-modifying-products--prices)
   - [6.3 Modifying Weight Variants & Pricing](#63-modifying-weight-variants--pricing)
   - [6.4 Changing Delivery Charges & Zones](#64-changing-delivery-charges--zones)
   - [6.5 Updating Shop Timings & Address](#65-updating-shop-timings--address)
7. [Storefront vs. Counter POS Mode](#7-storefront-vs-counter-pos-mode)
8. [WhatsApp Order Message Format](#8-whatsapp-order-message-format)
9. [Production Build & Deployment Guide](#9-production-build--deployment-guide)
   - [Deploying to Vercel / Netlify](#deploying-to-vercel--netlify)
   - [Deploying to cPanel / Shared Hosting (Apache/Nginx)](#deploying-to-cpanel--shared-hosting)
10. [Styling & Design System Tokens](#10-styling--design-system-tokens)
11. [Troubleshooting & FAQs](#11-troubleshooting--faqs)

---

## 1. Project Overview

**Super United Dairy** is an iconic heritage dairy establishment in Saddar, Karachi, renowned for Danedar Desi Ghee, Fresh Farm Butter (Makhan), Shahi Malai Rabri, Doodh Jalebi, and chilled Flavored Glass Milk Bottles (featured in *DAWN*).

This web application provides:
1. **A Customer-Facing Online Ordering Platform**: Allows customers across Karachi (Clifton, DHA, Saddar, PECHS, Gulshan, Nazimabad, etc.) to browse dairy specialties, select packaging sizes/weights, add items to an interactive cart, and place instant pre-formatted orders directly via WhatsApp.
2. **A High-Speed Staff Counter POS**: Built for counter staff to generate quick bills, select weights, calculate cash change, apply discounts, and print standard 80mm thermal receipts without requiring any external cloud POS subscription.

---

## 2. Tech Stack & Architecture

| Layer | Technology | Description |
|---|---|---|
| **Frontend Framework** | **React 19** | Component-driven UI architecture with hooks (`useState`, `useEffect`, `useMemo`). |
| **Build Tool & Bundler** | **Vite 8** | Ultra-fast Hot Module Replacement (HMR) and optimized rollup production bundles. |
| **Styling** | **Custom Vanilla CSS** | Custom design system (`src/index.css`) with CSS custom properties, responsive grid/flexbox, zero heavy CSS utility dependencies. |
| **Typography** | **Google Fonts** | `Playfair Display` (Luxury Serif headers), `Plus Jakarta Sans` (Body text), and `Cinzel` (Royal Crest accents). |
| **Icons** | **FontAwesome 6 (CDN)** | Scalable vector icons for cart, WhatsApp, social links, and navigation. |
| **Backend Dependency** | **Zero / Serverless** | Client-side Single Page Application (SPA). Operates entirely in the browser and dispatches orders to WhatsApp API. |

---

## 3. Project Directory Structure

```
dairy/
├── index.html                   # Main HTML entry with SEO meta tags & font imports
├── package.json                 # Project dependencies & npm run scripts
├── vite.config.js               # Vite configuration and React plugin setup
├── public/                      # Static assets served as-is (images, favicon)
│   ├── assets/
│   │   ├── super_united_hero.jpg
│   │   ├── flavored_milk.jpg
│   │   └── ...
└── src/
    ├── main.jsx                 # React root DOM mounting point
    ├── App.jsx                  # Master app state (cart, view mode, modals)
    ├── index.css                # Master design system & responsive media queries
    ├── data/
    │   └── products.js          # CENTRAL CONFIG: Products, prices, contact details
    └── components/
        ├── BrandLogo.jsx        # Handcrafted vector SVG crest & luxury typography
        ├── Navbar.jsx           # Sticky header, phone/WhatsApp CTA, cart badge
        ├── HeroSection.jsx      # High-impact banner with ratings & social proof
        ├── HeaderRibbon.jsx     # Infinite auto-scrolling ticker with daily notices
        ├── ProductsSection.jsx  # Category tabs, weight selectors, quick add buttons
        ├── ProductModal.jsx     # Modal view with detailed nutritional info
        ├── CartDrawer.jsx       # Slide-out basket, delivery form & WhatsApp dispatch
        ├── HeritageSection.jsx  # Saddar story, DAWN citation, Google reviews, map
        ├── DeliverySection.jsx  # Karachi delivery coverage zones & timings
        ├── CounterPOS.jsx       # High-speed staff billing terminal & receipt generator
        ├── Footer.jsx           # Brand links, timings, discrete staff POS link
        ├── FloatingWhatsApp.jsx # Floating quick-chat WhatsApp widget
        └── ScrollToTop.jsx      # Smooth page scroll-to-top button
```

---

## 4. Getting Started (Local Development)

### Prerequisites
- **Node.js**: v18.0.0 or higher installed on your computer ([Download Node.js](https://nodejs.org/))
- **npm**: Comes bundled with Node.js

### Step 1: Install Dependencies
Open your terminal inside the project directory:
```bash
cd dairy
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```
The server supports instant hot-reload — any changes made to code will appear in the browser automatically.

---

## 5. Key Features & Modules

### A. Dynamic Weight Variant Selection
Every product supports custom weight variants (e.g. `250g`, `500g`, `1 kg`, `2 kg`, or `Single Bowl` / `Pack of 4`). Clicking a weight variant pill immediately updates the card price and passes the selected variant to the cart and WhatsApp order.

### B. Interactive Cart Drawer
- Slide-out drawer accessible from the navigation bar, hero CTA, and floating triggers.
- Increment (`+`), decrement (`-`), and remove (`trash`) controls.
- Live Karachi Delivery Fee calculation (Flat Rs. 150, or Free for orders above Rs. 3,000).
- Customer details form: Name, Contact Phone, Delivery Address, and Karachi Area selection (Clifton, DHA, Saddar, Gulshan, etc.).

### C. WhatsApp Direct Order Dispatcher
When the customer clicks **"Confirm Order via WhatsApp"**, the app constructs a structured, URL-encoded message and opens WhatsApp Web (on PC) or the WhatsApp App (on mobile):
```
Assalam-o-Alaikum Super United Dairy! 🥛
I would like to place an online order for home delivery in Karachi:

📦 ORDER ITEMS:
1. Pure Desi Ghee (Danedar) (1 kg) x 1 = Rs. 2,400
2. Chilled Zafrani Saffron Milk (Pack of 4) x 1 = Rs. 850

💰 Subtotal: Rs. 3,250
🚚 Delivery Charges: FREE
⭐ TOTAL AMOUNT: Rs. 3,250

📍 DELIVERY DETAILS:
- Name: Ahmed Khan
- Phone: 0300 1234567
- Area: DHA Phase 6, Karachi
- Address: House 12-B, Street 5

Please confirm order availability and dispatch time. Shukriya!
```

### D. Staff Counter POS (`src/components/CounterPOS.jsx`)
- Built specifically for in-store counter staff.
- Includes quick category filtering, search-by-name, one-tap add, custom discount (Rs. or %), cash received input with real-time change calculation.
- **Thermal Receipt Print Preview**: Formatted to standard 80mm ESC/POS thermal printers via `window.print()`.
- Discrete Access: Staff can access POS via the bottom link in the footer or by programmatically setting `viewMode = 'pos'`.

---

## 6. Client Maintenance Guide

All shop details, products, prices, and phone numbers are located in **one single file**:  
📁 `src/data/products.js`

### 6.1 Updating WhatsApp Number & Phone
Open `src/data/products.js` and locate `SHOP_INFO`:
```javascript
export const SHOP_INFO = {
  name: 'Super United Dairy',
  tagline: 'Pure Desi Ghee, Farm Butter, Flavored Milk & Traditional Karachi Sweets',
  address: 'V25J+M4J, Dr. Daudpota Rd, Saddar, Karachi, Sindh, Pakistan',
  phone: '+92 325 3456015',      // Displayed on top bar & footer
  whatsapp: '923253456015',      // WhatsApp number (MUST be international format without + or spaces)
  rating: '4.4',
  reviewCount: '1,861',
  featuredIn: 'Dawn Newspaper',
  dawnUrl: 'https://www.dawn.com/news/1312851',
  hours: 'Open Daily: 6:00 AM – 1:00 AM (Midnight Fresh Supply)',
  deliveryZones: 'Saddar, Clifton, Defence (DHA), PECHS, Gulshan, Nazimabad, Malir & All Across Karachi',
};
```
> ⚠️ **Important:** For `whatsapp`, enter country code followed by digits without `+` or `-` (e.g. `923253456015`).

---

### 6.2 Adding or Modifying Products & Prices
In `src/data/products.js`, each item in the `PRODUCTS` array follows this schema:

```javascript
{
  id: 'unique-slug-id',
  name: 'English Name of Product',
  urdu: 'اردو نام',
  category: 'Ghee & Butter', // 'Ghee & Butter' | 'Traditional Sweets' | 'Flavored Milk'
  price: 2400,               // Default base price in PKR
  unit: '1 kg Pack',         // Unit description
  weights: [
    { label: '500g', price: 1200 },
    { label: '1 kg', price: 2400 },
    { label: '2 kg', price: 4700 },
  ],
  description: 'Product description explaining purity, texture, and taste.',
  image: '/assets/super_united_hero.jpg', // Image path
  badge: 'Best Seller',      // 'Best Seller' | 'Karachi Famous' | 'Daily Fresh' | 'Dawn Featured'
  tag: '100% Pure',          // Short pill badge
}
```

#### To change a price:
Simply update the `price` number and the corresponding entry inside the `weights` array.

#### To add a new product:
Duplicate one of the product objects, assign a new unique `id`, update its name, price, and category, and save the file.

---

### 6.3 Modifying Weight Variants & Pricing
If you want to offer different pack sizes (e.g., adding a `250g` pack to Desi Ghee):
```javascript
weights: [
  { label: '250g', price: 650 },
  { label: '500g', price: 1200 },
  { label: '1 kg', price: 2400 },
  { label: '2 kg', price: 4700 },
]
```
The website UI will automatically generate 4 interactive selection buttons with the new prices.

---

### 6.4 Changing Delivery Charges & Zones
Open `src/components/CartDrawer.jsx`:
- Line ~120 defines delivery logic:
  ```javascript
  const deliveryFee = subtotal >= 3000 || subtotal === 0 ? 0 : 150;
  ```
  - Change `150` to your desired delivery charge in PKR.
  - Change `3000` to your desired threshold for free delivery.

---

### 6.5 Updating Shop Timings & Address
In `src/data/products.js`, edit `SHOP_INFO.hours` and `SHOP_INFO.address`. The changes will instantly reflect in both the header, hero, footer, and receipt.

---

## 7. Storefront vs. Counter POS Mode

| Feature | Customer Storefront | Staff Counter POS |
|---|---|---|
| **Primary Audience** | Retail customers & online visitors | Cashier / Salesman inside the shop |
| **Ordering Channel** | WhatsApp instant dispatch | Direct thermal receipt print & cash drawer |
| **Product Search** | Category filter tabs & cards | Quick keyboard search & item grid |
| **Discounts & Change** | Automated coupon/free delivery rules | Manual PKR/% discount & Cash change calculator |
| **How to Access** | Default view at `http://domain.com/` | Click **"Staff Counter POS"** in the footer |

---

## 8. WhatsApp Order Message Format

When a customer checks out, the following parameters are dynamically calculated:
1. Product name + Urdu translation
2. Selected weight variant (e.g. 500g or 1kg)
3. Unit price & line total
4. Customer name, phone number, and street delivery address
5. Karachi area tag

All strings are safely sanitized using JavaScript's native `encodeURIComponent()` to ensure reliable delivery across all mobile browsers, iOS Safari, Android Chrome, and WhatsApp Desktop.

---

## 9. Production Build & Deployment Guide

### Generating the Production Bundle
Run the build script in your terminal:
```bash
npm run build
```
This will compile and minify all JSX, CSS, and assets into a production-ready `/dist` folder.

```
dist/
├── index.html
└── assets/
    ├── index-CoWdrI33.css   (~42 KB gzip ~8.6 KB)
    └── index-B7XzbDv5.js   (~270 KB gzip ~81 KB)
```

---

### Deploying to Vercel / Netlify (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. Click **"New Project"** and select the repository.
4. Set Build Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your site will be live with an SSL certificate (`https://`) within 60 seconds.

---

### Deploying to cPanel / Shared Hosting
If the client uses traditional cPanel hosting (e.g., Hostinger, Namecheap, Bluehost):
1. Run `npm run build` on your local machine.
2. Open cPanel and navigate to **File Manager** -> `public_html/`.
3. Upload all files from the `dist/` folder directly into `public_html/`.
4. Create or edit an `.htaccess` file inside `public_html/` with the following content (to handle SPA client routing):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 10. Styling & Design System Tokens

The application follows a curated, bespoke design system defined in `src/index.css`:

```css
:root {
  /* Brand Luxury Palette */
  --color-primary: #1e3d2b;       /* Pure Farm Forest Emerald */
  --color-primary-dark: #12281c;  /* Deep Evergreen */
  --color-gold: #c88613;          /* Royal Desi Ghee Golden Amber */
  --color-gold-light: #ffd88a;    /* Shahi Cream Highlight */
  --color-cream: #faf7f2;         /* Fresh Milk Warm White */
  --color-surface: #ffffff;       /* Pure White Card Surface */
  --color-dark: #1f1814;          /* Saddar Heritage Deep Charcoal */

  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-royal: 'Cinzel', serif;
}
```

### Responsive Breakpoints Tested:
- **Mobile Compact (320px – 440px):** Single-column layout, compact headers, full-width touch buttons.
- **Mobile Large / Phablet (441px – 640px):** Fluid typography, stacked filters, sticky quick cart button.
- **Tablets (641px – 1024px):** 2-column product grid, responsive drawer.
- **Desktops (1025px – 1920px+):** 3-column product grid, luxury hero banner, full drawer modal.

---

## 11. Troubleshooting & FAQs

#### Q1: A customer clicks WhatsApp Order but nothing happens?
**Answer:** Check `src/data/products.js` -> `SHOP_INFO.whatsapp`. Ensure the number starts with `92` and has no `+` sign, spaces, or hyphens (e.g., `'923253456015'`).

#### Q2: How do I change an image of a product?
**Answer:** Place your image file in `public/assets/` (e.g. `public/assets/my_ghee.jpg`), then set `image: '/assets/my_ghee.jpg'` in `src/data/products.js`.

#### Q3: Does the website require a monthly database or server cost?
**Answer:** No. Because this architecture is a pure React SPA with direct WhatsApp ordering, it has **zero database hosting fees**. It can run for free on Vercel or Cloudflare Pages, or on any existing cPanel hosting.

#### Q4: How does staff return from POS mode back to storefront?
**Answer:** In the POS top header, click the golden button labeled **"← Back to Storefront"**.

---

**Handover Prepared By:** Lead Frontend Engineer  
**Client Project:** Super United Dairy, Saddar, Karachi  
**Status:** Tested, Validated & Ready for Production Deployment.
