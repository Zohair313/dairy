import React, { useState } from 'react';
import { SHOP_INFO } from '../data/products';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenCart, cartItemCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header-wrapper">
      {/* Top Banner with Trust Badges & Contact */}
      <div className="secondary-header super-dairy-topbar">
        <div className="container secondary-header-inner">
          <div className="topbar-left-badges">
            <span className="topbar-badge location">
              <i className="fa-solid fa-location-dot"></i> Saddar, Karachi (Dr. Daudpota Rd)
            </span>
            <span className="topbar-badge rating">
              <i className="fa-solid fa-star"></i> {SHOP_INFO.rating} ★ ({SHOP_INFO.reviewCount} Reviews)
            </span>
            <a
              href={SHOP_INFO.dawnUrl}
              target="_blank"
              rel="noreferrer"
              className="topbar-badge dawn-badge"
            >
              <i className="fa-solid fa-newspaper"></i> Featured in DAWN
            </a>
          </div>

          <div className="topbar-right-contact">
            <a
              href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                'Assalam-o-Alaikum Super United Dairy! I want to order fresh Desi Ghee / Butter / Rabri.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-top-link"
            >
              <i className="fa-brands fa-whatsapp"></i> Call &amp; WhatsApp: <strong>{SHOP_INFO.phone}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Header */}
      <nav className="primary-header">
        <div className="container primary-header-inner">
          {/* Logo & Brand Title */}
          <div className="logo-wrapper">
            <a href="#hero" className="brand-logo-link" title="Super United Dairy Karachi">
              <BrandLogo />
            </a>
          </div>

          {/* Desktop Nav Items */}
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#products" className="nav-link">
                <span>🧈 Ghee &amp; Makhan</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#products" className="nav-link">
                <span>🍯 Rabri &amp; Sweets</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#products" className="nav-link">
                <span>🥛 Flavored Milk</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#heritage" className="nav-link">
                <span>📰 Dawn Feature</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#delivery" className="nav-link">
                <span>🚚 Karachi Delivery</span>
              </a>
            </li>
          </ul>

          {/* Header Action Buttons (WhatsApp Order + Basket) */}
          <div className="header-action-group">
            {/* Quick WhatsApp Order Button */}
            <a
              href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                'Assalam-o-Alaikum Super United Dairy! I want to order fresh dairy.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="nav-whatsapp-order-btn"
              title="Order directly via WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span className="wa-btn-text">Order via WhatsApp</span>
            </a>

            {/* Online Cart Drawer Button */}
            <button
              className="shop-cart-header-btn"
              onClick={onOpenCart}
              aria-label="View shopping cart"
            >
              <i className="fa-solid fa-basket-shopping"></i>
              <span className="cart-btn-label">Basket</span>
              {cartItemCount > 0 && <span className="cart-counter-bubble">{cartItemCount}</span>}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <BrandLogo />
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>
              <span>🧈 Pure Desi Ghee &amp; Makhan</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>
              <span>🍯 Shahi Rabri &amp; Doodh Jalebi</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>
              <span>🥛 Flavored Milk Bottles (Zafrani, Pista, Badam)</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)}>
              <span>📰 Dawn Newspaper Feature &amp; Reviews</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="#delivery" onClick={() => setMobileMenuOpen(false)}>
              <span>🚚 Same-Day Karachi Delivery Zones</span>
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <button
            className="mobile-cart-full-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCart();
            }}
          >
            <i className="fa-solid fa-basket-shopping"></i>
            <span>View Basket ({cartItemCount} Items)</span>
          </button>

          <a
            href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
              'Assalam-o-Alaikum! I want to order fresh dairy from Super United Dairy.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mobile-wa-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Direct WhatsApp (+92 325 3456015)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
