import React from 'react';
import { SHOP_INFO } from '../data/products';

export default function DeliverySection({ onOpenCart }) {
  return (
    <section className="delivery-section" id="delivery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">ORDERING &amp; PICKUP</span>
          <h2 className="section-title">Two Easy Ways to Enjoy Super United Dairy</h2>
          <p className="section-subtitle-text">
            Whether you need daily butter &amp; milk delivered cold to your home in Karachi, or you're picking
            up fresh ghee &amp; rabri from our historic Saddar counter.
          </p>
        </div>

        {/* 2 Service Cards */}
        <div className="delivery-cards-grid">
          {/* Card 1: Karachi Home Delivery */}
          <div className="delivery-option-card delivery-home">
            <div className="card-top-icon">🚚</div>
            <div className="card-badge-status">Same-Day Express</div>
            <h3 className="card-title">Karachi Home Delivery</h3>
            <p className="card-desc">
              Temperature-insulated riders ensure your chilled <strong>Flavored Milk Bottles</strong>,{' '}
              <strong>Fresh White Makhan</strong>, and <strong>Shahi Rabri</strong> arrive ice-cold and fresh.
            </p>

            <div className="card-details-list">
              <div>
                <i className="fa-solid fa-check"></i>
                <span>Covers Clifton, DHA, Saddar, PECHS, Gulshan &amp; All Karachi</span>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <span>Direct WhatsApp tracking with rider contact</span>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <span>Cash on Delivery (COD), Raast &amp; JazzCash accepted</span>
              </div>
            </div>

            <div className="card-action-row">
              <button className="delivery-order-btn" onClick={onOpenCart}>
                <i className="fa-brands fa-whatsapp"></i> Order Delivery via WhatsApp
              </button>
            </div>
          </div>

          {/* Card 2: Saddar Counter Pickup */}
          <div className="delivery-option-card delivery-pickup">
            <div className="card-top-icon">🏪</div>
            <div className="card-badge-status">Counter Live</div>
            <h3 className="card-title">Saddar Shop Counter Pickup</h3>
            <p className="card-desc">
              Visiting Saddar or passing through Dr. Daudpota Road? Stop by our counter for fresh piping hot{' '}
              <strong>Doodh Jalebi</strong>, fresh butter blocks, and gift jars of <strong>Desi Ghee</strong>.
            </p>

            <div className="card-details-list">
              <div>
                <i className="fa-solid fa-check"></i>
                <span>V25J+M4J, Dr. Daudpota Rd, Saddar, Karachi</span>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <span>High-Speed Counter POS takeaway in under 60 seconds</span>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <span>Open 7 Days a week: 6:00 AM – 1:00 AM Midnight</span>
              </div>
            </div>

            <div className="card-action-row">
              <a
                href="https://maps.google.com/?q=V25J%2BM4J+Dr+Daudpota+Rd+Saddar+Karachi"
                target="_blank"
                rel="noreferrer"
                className="delivery-map-btn"
              >
                <i className="fa-solid fa-location-arrow"></i> Open Google Maps Location
              </a>
              <a href={`tel:${SHOP_INFO.phone}`} className="delivery-call-btn">
                <i className="fa-solid fa-phone"></i> Call Counter ({SHOP_INFO.phone})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
