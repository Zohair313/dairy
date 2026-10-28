# 🥛 Super United Dairy — Complete Visual & Section-by-Section Client Guide

> **Created For:** Non-Technical Business Owners, Store Managers & Junior Developers  
> **Brand:** Super United Dairy (Dr. Daudpota Rd, Saddar, Karachi)  
> **Platform:** Responsive Online Ordering Storefront & Counter POS System  
> **Language:** Plain & Simple English (Zero Technical Jargon)  

---

## 📑 Table of Contents
1. [The Big Picture: What Does This Website Do?](#1-the-big-picture-what-does-this-website-do)
2. [Visual Sitemap (Top-to-Bottom Flow)](#2-visual-sitemap-top-to-bottom-flow)
3. [Section-by-Section Deep Dive](#3-section-by-section-deep-dive)
   - [Section 1: The Top Announcement Ticker](#section-1-the-top-announcement-ticker)
   - [Section 2: The Main Navigation Bar](#section-2-the-main-navigation-bar)
   - [Section 3: The Grand Hero Banner](#section-3-the-grand-hero-banner)
   - [Section 4: The Products & Ordering Menu](#section-4-the-products--ordering-menu)
   - [Section 5: The Product Detail Popup](#section-5-the-product-detail-popup)
   - [Section 6: Saddar Heritage & DAWN News Feature](#section-6-saddar-heritage--dawn-news-feature)
   - [Section 7: Karachi Delivery & Timings](#section-7-karachi-delivery--timings)
   - [Section 8: The Slide-Out Shopping Basket](#section-8-the-slide-out-shopping-basket)
   - [Section 9: The Staff In-Store Counter POS](#section-9-the-staff-in-store-counter-pos)
   - [Section 10: The Website Footer](#section-10-the-website-footer)
   - [Section 11: Floating WhatsApp & Scroll Buttons](#section-11-floating-whatsapp--scroll-buttons)
4. [How an Order Works (From Customer Tap to Rider Dispatch)](#4-how-an-order-works)
5. [The "1-File Rule" for Changing Prices, Phones, & Products](#5-the-1-file-rule-for-changing-prices-phones--products)
6. [Why There Are ZERO ($0) Monthly Server Fees](#6-why-there-are-zero-monthly-server-fees)
7. [Quick Cheat Sheet: "How Do I Change X?"](#7-quick-cheat-sheet-how-do-i-change-x)

---

## 1. The Big Picture: What Does This Website Do?

This website is the **complete digital storefront** for **Super United Dairy** in Saddar, Karachi.

It replaces the old static goat farm website with an authentic, luxury Karachi dairy platform that:
- Showcases your famous **Danedar Desi Ghee**, **Fresh Farm Butter (Makhan)**, **Shahi Malai Rabri**, **Signature Doodh Jalebi**, and chilled **Flavored Glass Milk Bottles** (featured in *DAWN*).
- Allows customers across Karachi to select packaging weights (e.g. 250g, 500g, 1kg), add items to an online cart, and send a **ready-made, clean invoice directly to your shop's WhatsApp**.
- Provides a built-in **In-Store Counter POS** so your cashiers can tap items on a computer screen, calculate cash change, and print paper slips.

---

## 2. Visual Sitemap (Top-to-Bottom Flow)

When a customer opens the website on their phone or computer, they see these sections in exact sequence:

```
┌────────────────────────────────────────────────────────────────────────┐
│  [1] TOP ANNOUNCEMENT TICKER (Auto-scrolling golden batch notice)       │
├────────────────────────────────────────────────────────────────────────┤
│  [2] NAVIGATION BAR (Royal Logo | Call Us | WhatsApp | Live Cart Icon) │
├────────────────────────────────────────────────────────────────────────┤
│  [3] HERO BANNER (Big Headline, Dawn Feature, 4.4★ Rating, Order CTA)  │
├────────────────────────────────────────────────────────────────────────┤
│  [4] PRODUCTS & ORDERING SECTION                                       │
│      ├── Category Tabs (All / Ghee & Makhan / Sweets / Flavored Milk)  │
│      └── Product Cards (Photo, Weight Buttons 250g/1kg, Add, WhatsApp) │
├────────────────────────────────────────────────────────────────────────┤
│  [5] SADDAR HERITAGE & DAWN FEATURE                                    │
│      ├── Dawn News Article Citation & 4 Heritage Pillars               │
│      ├── Real Google Customer Reviews (4.4★ from 1,861+ people)        │
│      └── Interactive Saddar Karachi Map Card & Directions              │
├────────────────────────────────────────────────────────────────────────┤
│  [6] KARACHI DELIVERY COVERAGE (Zones, Temperature Care & Timings)     │
├────────────────────────────────────────────────────────────────────────┤
│  [7] FOOTER (Store Timings, Address, Phone, Staff Counter POS Link)    │
└────────────────────────────────────────────────────────────────────────┘

  [FLOATING WIDGETS]
  ├── Bottom-Right: Floating WhatsApp Instant Chat Bubble 🟢
  ├── Bottom-Left:  Smooth Scroll to Top Arrow ⬆️
  └── Slide-Out:    Interactive Cart Drawer & WhatsApp Checkout
```

---

## 3. Section-by-Section Deep Dive

---

### Section 1: The Top Announcement Ticker
📁 **Code Component:** `src/components/HeaderRibbon.jsx`

#### What It Looks Like:
```
[★ DAILY FRESH BUFFALO MILK BATCHES] ── [★ 100% DANEDAR DESI GHEE CHURNED DAILY] ── [★ CHILLED FLAVORED MILK IN SADDAR]
```

#### Purpose & How It Works:
- This is a gold-and-green ribbon that glides continuously across the top of the screen like a news ticker.
- **Why it's important:** When a customer visits, it immediately gives a feeling of live activity and freshness — showing that the dairy is open, active, and churning fresh batches today.
- Runs smoothly 24/7 on both mobile and desktop with zero lag.

---

### Section 2: The Main Navigation Bar
📁 **Code Component:** `src/components/Navbar.jsx`

#### What It Looks Like:
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [👑 CREST LOGO]  Super United Dairy    [Our Menu] [Heritage] [Delivery]    │
│  Saddar, Karachi  ESTD. HERITAGE        📞 0325 3456015  [WhatsApp Order] [🛒 2]│
└──────────────────────────────────────────────────────────────────────────────┘
```

#### What Is In This Section:
1. **Artisanal Vector Crest Logo (`BrandLogo.jsx`):** A custom-designed SVG emblem featuring traditional dairy motifs, pure golden flourishes, and royal typography. *Zero AI-generated artifacts.*
2. **Navigation Links:** Jump directly to "Specialties Menu", "Saddar Heritage", and "Karachi Delivery".
3. **Quick Call Link:** Tapping the phone number dials `+92 325 3456015` immediately on mobile.
4. **WhatsApp Order Button:** Opens direct WhatsApp chat with the shopkeeper.
5. **Live Shopping Basket Icon:** Shows a red circular badge displaying the number of items in the cart (e.g. `2`). Clicking it slides open the Cart Drawer.
6. **Mobile Friendly:** On smartphones, it automatically shows a neat hamburger icon (`☰`) that opens a slide-out navigation menu.

---

### Section 3: The Grand Hero Banner
📁 **Code Component:** `src/components/HeroSection.jsx`

#### What It Looks Like:
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ⭐ 4.4 ★ (1,861+ Reviews)  |  📰 FEATURED IN DAWN NEWSPAPER                 │
│                                                                              │
│  Karachi’s Legendary Pure Desi Ghee                                          │
│  & Traditional Fresh Dairy Specialties                                       │
│                                                                              │
│  Slow-simmered Danedar Desi Ghee, daily churned white butter, thick Shahi    │
│  Malai Rabri, and chilled flavored milk bottles from the heart of Saddar.    │
│                                                                              │
│  [🛒 Order Online for Delivery]       [📖 Explore Specialties Menu]         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Purpose & How It Works:
- **First Impression ("WOW Factor"):** Convinces the visitor within 3 seconds that Super United Dairy is a trusted, authentic institution, not an ordinary local shop.
- **Social Proof:** Prominently highlights the **4.4 ★ rating from 1,861+ customers** and the famous **DAWN newspaper article**.
- **Action Buttons:** Gives visitors two clear choices: either jump straight into the menu or open the order basket immediately.

---

### Section 4: The Products & Ordering Menu
📁 **Code Component:** `src/components/ProductsSection.jsx`  
📁 **Data Source:** `src/data/products.js`

#### What It Looks Like:
```
  [ ALL (7) ]   [ GHEE & BUTTER ]   [ TRADITIONAL SWEETS ]   [ FLAVORED MILK ]

 ┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐
 │ [PHOTO: DESI GHEE]          │  │ [PHOTO: SHAHI RABRI]        │  │ [PHOTO: ZAFRANI MILK]       │
 │ 100% Pure • Best Seller     │  │ Karachi Famous • Clay Matka │  │ Top Rated • Saffron Infused │
 │ Pure Desi Ghee (Danedar)    │  │ Special Shahi Malai Rabri   │  │ Chilled Zafrani Milk Bottle │
 │ خالص دیسی گھی (دانے دار)    │  │ شاہی ملائی ربڑی             │  │ ٹھنڈا زعفرانی دودھ بوتل     │
 │                             │  │                             │  │                             │
 │ SELECT WEIGHT:              │  │ SELECT WEIGHT:              │  │ SELECT PACK:                │
 │ [ 500g ]  [ 1 kg* ] [ 2 kg ]│  │ [ 250g ]  [ 500g ] [ 1 kg* ]│  │ [ 1 Bottle* ] [ Pack of 4 ]│
 │                             │  │                             │  │                             │
 │ Rs. 2,400  (1 kg Pack)      │  │ Rs. 1,100  (1 kg Matka)     │  │ Rs. 220  (250ml Glass)      │
 │                             │  │                             │  │                             │
 │ [🛒 Add]   [💬 WhatsApp]    │  │ [🛒 Add]   [💬 WhatsApp]    │  │ [🛒 Add]   [💬 WhatsApp]    │
 └─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘
```

#### What Each Card Contains & What Customers Can Do:
1. **Category Filter Tabs:** Customers can click "Ghee & Butter", "Traditional Sweets", or "Flavored Milk" to filter items instantly without page reloads.
2. **Dual Urdu & English Titles:** Bridges traditional Karachi culture with modern English e-commerce.
3. **Interactive Weight Selector Pills (`250g`, `500g`, `1 kg`, `2 kg`):**
   - When a customer taps `500g`, the price changes to `Rs. 1,200`.
   - When they tap `2 kg`, the price changes to `Rs. 4,700`.
   - *This happens in real time without refreshing the page!*
4. **"Add" Button with Instant Micro-Feedback:** Tapping "Add" changes the button label to **"✓ Added!"** with a green glow for 1.2 seconds, giving visual confirmation that the item is inside their basket.
5. **Direct "WhatsApp Order" Button:** If a customer only wants to order this one specific item, they can tap this button to immediately open WhatsApp with a pre-filled message for that exact product and weight.

---

### Section 5: The Product Detail Popup
📁 **Code Component:** `src/components/ProductModal.jsx`

#### What It Looks Like:
```
┌────────────────────────────────────────────────────────────────────────┐
│  PURE DESI GHEE (DANEDAR)                              [Close ✖]       │
│  خالص دیسی گھی (دانے دار)                                              │
│                                                                        │
│  [Photo]  • 100% Whole Buffalo Milk Cream Churned                     │
│           • Natural Granular (Danedar) Texture                         │
│           • Free from Palm Oil, Chemicals, or Vegetable Fats           │
│           • Traditional Slow Simmered in Iron Kadhai                   │
│                                                                        │
│  Select Weight: [ 500g - Rs. 1200 ] [ 1 kg - Rs. 2400 ] [ 2 kg ]       │
│                                                                        │
│  [🛒 Add to Shopping Basket]        [💬 Order this Item on WhatsApp]   │
└────────────────────────────────────────────────────────────────────────┘
```

#### Purpose:
- If a customer wants to learn more about the purity, heritage churning process, or shelf life before buying, clicking on the product image or name opens this elegant popup window.

---

### Section 6: Saddar Heritage & DAWN News Feature
📁 **Code Component:** `src/components/HeritageSection.jsx`

#### What It Looks Like:
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  📰 AS FEATURED IN DAWN NEWSPAPER                                            │
│  "A Saddar Institution Keeping Traditional Churned Dairy Traditions Alive"   │
│  [Read Article on Dawn.com ↗]                                                │
│                                                                              │
│  4 HERITAGE PILLARS:                                                         │
│  [🥛 Pure Buffalo Milk]   [🧈 Traditional Churning]                          │
│  [🌿 0% Palm Oil/Chemicals] [🏺 Earthen Clay Matka Packing]                  │
│                                                                              │
│  REAL CUSTOMER REVIEWS (4.4 ★ from 1,861+ Ratings):                          │
│  • "The Danedar Desi Ghee has the exact aroma my grandmother used to make."  │
│  • "Best Doodh Jalebi and Shahi Rabri in Saddar. Iconic glass milk bottles!" │
│                                                                              │
│  📍 SADDAR STORE LOCATION & TIMINGS:                                         │
│  Dr. Daudpota Rd, Saddar, Karachi (Near Cantt / Empress Market)              │
│  Open Daily: 6:00 AM – 1:00 AM (Midnight Fresh Supply)                       │
│  [📍 Open Directions in Google Maps]                                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Purpose:
- Builds massive credibility. Visitors who may not know your shop physically immediately see that you are an established, newspaper-featured business with nearly 2,000 positive customer reviews.
- Provides direct Google Maps integration so customers can get driving directions to the shop.

---

### Section 7: Karachi Delivery & Timings
📁 **Code Component:** `src/components/DeliverySection.jsx`

#### What It Looks Like:
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  🚚 SAME-DAY CHILLED HOME DELIVERY ACROSS KARACHI                            │
│                                                                              │
│  COVERED ZONES:                                                              │
│  • Zone 1: Saddar, Clifton, Defence (DHA Phase 1–8), PECHS, Garden           │
│  • Zone 2: Gulshan-e-Iqbal, Gulistan-e-Jauhar, Bahadurabad, Tariq Road       │
│  • Zone 3: North Nazimabad, Federal B Area, Malir Cantt & Across Karachi     │
│                                                                              │
│  DELIVERY SLOTS:                                                             │
│  🌅 Morning Fresh Batch: 7:00 AM – 11:00 AM (Butter & Fresh Milk)            │
│  🌙 Evening Chilled Batch: 4:00 PM – 9:00 PM (Rabri, Ghee & Sweet Deliveries)│
│                                                                              │
│  TEMPERATURE CARE: Glass milk bottles & Rabri matkas packed in chilled boxes. │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Purpose:
- Answers the customer's top questions: *"Do you deliver to my area?"*, *"What time will it arrive?"*, and *"Will the milk stay cold?"*.

---

### Section 8: The Slide-Out Shopping Basket
📁 **Code Component:** `src/components/CartDrawer.jsx`

#### What It Looks Like:
```
┌────────────────────────────────────────────────────────┐
│  YOUR BASKET (2 Items)                        [Close ✖]│
├────────────────────────────────────────────────────────┤
│  1. Pure Desi Ghee (Danedar)                           │
│     Weight: 1 kg                                       │
│     [-]  1  [+]  x  Rs. 2,400                 [🗑 Delete]│
│                                                        │
│  2. Chilled Zafrani Milk Bottle                        │
│     Pack: Pack of 4 Bottles                            │
│     [-]  1  [+]  x  Rs. 850                   [🗑 Delete]│
├────────────────────────────────────────────────────────┤
│  Subtotal:                 Rs. 3,250                   │
│  Karachi Delivery Fee:     FREE (Order above Rs. 3,000)│
│  TOTAL AMOUNT:             Rs. 3,250                   │
├────────────────────────────────────────────────────────┤
│  DELIVERY DETAILS:                                     │
│  Your Name:       [ Ahmed Khan                       ] │
│  Phone Number:    [ 0300 1234567                     ] │
│  Karachi Area:    [ DHA Phase 6                    ▼ ] │
│  Street Address:  [ House 14-B, Street 7             ] │
├────────────────────────────────────────────────────────┤
│  [  💬 CONFIRM ORDER VIA WHATSAPP (Rs. 3,250)  ]       │
└────────────────────────────────────────────────────────┘
```

#### Purpose & How It Works:
- Automatically calculates item totals, quantities, and delivery charges.
- Customers can increase or decrease quantities with `+` and `-` buttons.
- The big green button formats the entire order into a structured WhatsApp message and opens WhatsApp instantly with one tap.

---

### Section 9: The Staff In-Store Counter POS
📁 **Code Component:** `src/components/CounterPOS.jsx`

#### What It Looks Like:
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [← Back to Storefront]   SUPER UNITED DAIRY — COUNTER POS BILLING           │
├──────────────────────────────────────┬───────────────────────────────────────┤
│  QUICK PRODUCT TAP:                  │  CURRENT REGISTER BILL:               │
│  [Search item / barcode...        ]  │  1. Desi Ghee (1kg)      x1  Rs. 2,400│
│                                      │  2. Shahi Rabri (500g)   x1  Rs.   580│
│  [+ Pure Desi Ghee (Danedar)]        ├───────────────────────────────────────┤
│  [+ Fresh White Butter (Makhan)]     │  Subtotal:                   Rs. 2,980│
│  [+ Shahi Malai Rabri Matka]         │  Discount:                   Rs.     0│
│  [+ Signature Doodh Jalebi]          │  NET TOTAL:                  Rs. 2,980│
│  [+ Chilled Zafrani Milk Bottle]     ├───────────────────────────────────────┤
│  [+ Pure Khoya / Mawa]               │  Cash Received: [ 3,000             ] │
│                                      │  CHANGE TO RETURN:           Rs.    20│
│                                      ├───────────────────────────────────────┤
│                                      │  [ 🖨 PRINT THERMAL RECEIPT (80mm) ]  │
│                                      │  [ 🗑 CLEAR BILL ]                     │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

#### Purpose & How It Works:
- **Built for Shop Staff:** Designed for a counter touch-screen, desktop PC, or tablet at the Saddar shop.
- **Cash Change Calculator:** Tells the cashier exactly how much change to hand back to the customer so there are zero mental math mistakes during rush hours.
- **Thermal Printer Friendly:** Formatted for standard 80mm ESC/POS receipt rolls via `window.print()`.
- **How to Open:** Click **"Staff Counter POS"** at the bottom of the website footer.

---

### Section 10: The Website Footer
📁 **Code Component:** `src/components/Footer.jsx`

#### What It Looks Like:
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  SUPER UNITED DAIRY                     OPERATING HOURS                      │
│  Dr. Daudpota Rd, Saddar, Karachi       Open Daily: 6:00 AM – 1:00 AM        │
│  Phone: +92 325 3456015                 Midnight Fresh Supply Available      │
│  WhatsApp: 0325 3456015                                                      │
│                                         QUICK LINKS                          │
│  © 2026 Super United Dairy.             • Specialties Menu   • Saddar Story  │
│  All rights reserved.                   • Home Delivery      • Staff POS 🔒  │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Purpose:
- Shows legal copyright, full physical address, operating hours, and the discrete staff link to the Counter POS.

---

### Section 11: Floating WhatsApp & Scroll Buttons
📁 **Code Components:** `src/components/FloatingWhatsApp.jsx` & `src/components/ScrollToTop.jsx`

- **Floating WhatsApp Bubble (Bottom Right):** A glowing green button that stays on the screen as the customer scrolls, allowing them to ask a quick question at any time.
- **Scroll to Top Arrow (Bottom Left):** Appears when the customer scrolls down, allowing a single tap to return to the top of the page.

---

## 4. How an Order Works

```
Step 1: Customer picks 1kg Desi Ghee & 500g Rabri
   │
   ▼
Step 2: Customer taps "Add" → Basket updates instantly
   │
   ▼
Step 3: Customer opens Cart, enters Name & Karachi Address
   │
   ▼
Step 4: Customer taps "Confirm Order via WhatsApp"
   │
   ▼
Step 5: WhatsApp opens with pre-filled invoice:
        "Assalam-o-Alaikum Super United Dairy! 🥛
         I would like to place an order:
         1. Pure Desi Ghee (Danedar) (1 kg) x 1 = Rs. 2,400
         2. Special Shahi Malai Rabri (500g) x 1 = Rs. 580
         Total Bill: Rs. 2,980
         Name: Ahmed Khan | Phone: 0300 1234567 | DHA Phase 6"
   │
   ▼
Step 6: Shopkeeper replies: "Order confirmed, rider dispatched!"
```

---

## 5. The "1-File Rule" for Changing Prices, Phones, & Products

You do **not** need to understand code to maintain this website.  
**95% of everything you will ever need to change is inside ONE file:**

📁 **File:** `src/data/products.js`

### A. To Change the WhatsApp Number:
Look at the bottom of `src/data/products.js`:
```javascript
export const SHOP_INFO = {
  phone: '+92 325 3456015',
  whatsapp: '923253456015', // <--- Change your WhatsApp number here
};
```
*(Always write with country code `92` and no `+` or spaces).*

### B. To Change a Price:
Find the product in `src/data/products.js`:
```javascript
{
  name: 'Pure Desi Ghee (Danedar)',
  price: 2400, // <--- Base price
  weights: [
    { label: '500g', price: 1200 }, // <--- Change 500g price here
    { label: '1 kg', price: 2400 }, // <--- Change 1 kg price here
    { label: '2 kg', price: 4700 }, // <--- Change 2 kg price here
  ],
}
```

### C. To Add a New Product:
Copy an existing item block and change its name, price, and description.

---

## 6. Why There Are ZERO ($0) Monthly Server Fees

Most web developers charge clients a recurring $20–$50 every month for database servers.

**This platform has $0 monthly hosting fees:**
- It runs completely in the customer's browser (React Single Page App).
- It sends orders directly through WhatsApp's official API.
- You can host it for **free forever** on [Vercel](https://vercel.com/) or [Cloudflare Pages](https://pages.cloudflare.com/), with automatic SSL security certificates (`https://`).

---

## 7. Quick Cheat Sheet: "How Do I Change X?"

| What do you want to change? | Which file do you open? | What do you edit? |
|---|---|---|
| **WhatsApp Number** | `src/data/products.js` | Change `SHOP_INFO.whatsapp` |
| **Phone Number** | `src/data/products.js` | Change `SHOP_INFO.phone` |
| **Product Prices** | `src/data/products.js` | Change numbers in `weights: [...]` |
| **Add New Product** | `src/data/products.js` | Add a new block in `PRODUCTS = [...]` |
| **Product Photo** | `public/assets/` | Drop new photo and update `image:` path |
| **Karachi Delivery Fee** | `src/components/CartDrawer.jsx` | Change `150` to your desired delivery fee |
| **Free Delivery Threshold** | `src/components/CartDrawer.jsx` | Change `3000` to your desired free limit |
| **Shop Timings / Hours** | `src/data/products.js` | Change `SHOP_INFO.hours` |
| **Shop Address** | `src/data/products.js` | Change `SHOP_INFO.address` |
| **Banner Headlines** | `src/components/HeroSection.jsx` | Edit text in the `<h1>` or `<p>` tags |

---

**Handover Status:** Complete, Tested, and Verified 🥛  
**Target Brand:** Super United Dairy, Saddar, Karachi  
**Repository:** [https://github.com/Zohair313/dairy](https://github.com/Zohair313/dairy)
