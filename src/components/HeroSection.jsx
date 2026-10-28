import React from 'react';
import { SHOP_INFO } from '../data/products';

export default function HeroSection({ onOpenCart }) {
  return (
    <section className="hero-section super-dairy-hero" id="hero">
      {/* Background Graphic & Texture Overlay */}
      <div className="hero-bg-media">
        <img
          src="/assets/super_united_hero.jpg"
          alt="Super United Dairy Saddar Karachi - Pure Desi Ghee, Fresh Butter and Sweets"
          className="hero-backdrop-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="hero-content super-hero-content">
          {/* Trust Banner Tag */}
          <div className="hero-trust-pill">
            <span className="pill-dot"></span>
            <span>📍 Dr. Daudpota Road, Saddar, Karachi • 4.4 ★ (1,861 Reviews) • Featured in DAWN</span>
          </div>

          <h1 className="hero-title super-title">
            Pure Danedar Desi Ghee &amp; Fresh Farm Makhan
          </h1>

          <p className="hero-subtitle super-subtitle">
            100% Whole Buffalo Milk • Daily Fresh Churned • Delivered Across Karachi
          </p>

          <p className="hero-description super-desc">
            Directly from our historic counter at <strong>Dr. Daudpota Road, Saddar</strong>. Experience Karachi’s
            most celebrated culinary dairy treasures—rich granular Desi Ghee, daily churned white Makhan, earthen-matka
            Shahi Rabri, hot Doodh Jalebi, and chilled Flavored Milk bottles.
          </p>

          {/* Dual Action CTAs (Professional Consumer CTAs) */}
          <div className="hero-cta-group">
            <a
              href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                'Assalam-o-Alaikum Super United Dairy! I want to order fresh Desi Ghee / Butter / Rabri for delivery.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hero-primary-btn"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Order Delivery on WhatsApp ({SHOP_INFO.phone})</span>
            </a>

            <a href="#products" className="hero-explore-btn">
              <i className="fa-solid fa-list-ul"></i>
              <span>View Products &amp; Prices</span>
            </a>
          </div>

          {/* Key Metric Highlights Bar */}
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <span className="stat-num">4.4 ★</span>
              <span className="stat-label">1,861+ Google Reviews</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-num">100% Khallas</span>
              <span className="stat-label">Danedar Desi Ghee</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-num">DAWN Featured</span>
              <span className="stat-label">Iconic Saddar Institution</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-num">Same-Day</span>
              <span className="stat-label">Chilled Delivery in Karachi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
