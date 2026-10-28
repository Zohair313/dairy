import React from 'react';
import { SHOP_INFO } from '../data/products';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenCart, onSwitchToPOS }) {
  return (
    <footer className="site-footer super-footer" id="footer-contact">
      <div className="container">
        <div className="footer-grid super-footer-grid">
          {/* Col 1: Shop Brand & Dawn Feature */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <BrandLogo inverted={true} />
            </div>
            <p className="footer-tagline-text">
              Karachi’s landmark dairy for 100% pure Danedar Desi Ghee, daily churned fresh white Makhan,
              Shahi Malai Rabri, hot Doodh Jalebi, and chilled Flavored Milk Bottles.
            </p>

            <div className="footer-dawn-box">
              <div className="dawn-box-title">
                <i className="fa-solid fa-newspaper"></i>
                <strong>Featured in DAWN Newspaper</strong>
              </div>
              <p className="dawn-box-sub">
                Recognized for authentic Saddar culinary dairy heritage.
              </p>
              <a
                href={SHOP_INFO.dawnUrl}
                target="_blank"
                rel="noreferrer"
                className="dawn-read-link"
              >
                Read Dawn Article <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="footer-google-badge">
              <i className="fa-brands fa-google"></i>
              <span>
                <strong>{SHOP_INFO.rating} ★</strong> Customer Satisfaction ({SHOP_INFO.reviewCount} Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links & Product Shortcuts */}
          <div className="footer-col-links">
            <h4 className="footer-heading-col">Fresh Specialties</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#products">🧈 Pure Danedar Desi Ghee (1kg, 2kg)</a>
              </li>
              <li>
                <a href="#products">🧈 Fresh White Farm Butter (Makhan)</a>
              </li>
              <li>
                <a href="#products">🍯 Shahi Malai Rabri in Clay Matkas</a>
              </li>
              <li>
                <a href="#products">🍯 Legendary Hot Doodh Jalebi</a>
              </li>
              <li>
                <a href="#products">🥛 Zafrani, Pista &amp; Badam Milk Bottles</a>
              </li>
              <li>
                <a href="#products">🍯 Traditional Pure Khoya / Mawa</a>
              </li>
            </ul>

            <div className="footer-catering-card">
              <div className="catering-badge">WEDDINGS &amp; BULK ORDERS</div>
              <p>Need wholesale Pure Ghee, Makhan, or Khoya for catering?</p>
              <a
                href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                  'Assalam-o-Alaikum! Inquiring about bulk order for dairy/sweets.'
                )}`}
                className="catering-wa-btn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i> Inquire Bulk Rates
              </a>
            </div>
          </div>

          {/* Col 3: Counter Address & WhatsApp Hotline */}
          <div className="footer-col-contact">
            <h4 className="footer-heading-col">Counter Location &amp; Orders</h4>

            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <strong>Shop Address:</strong>
                <p>V25J+M4J, Dr. Daudpota Rd, Saddar, Karachi, Sindh, Pakistan</p>
                <a
                  href="https://maps.google.com/?q=V25J%2BM4J+Dr+Daudpota+Rd+Saddar+Karachi"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-map-link"
                >
                  <i className="fa-solid fa-directions"></i> Get Directions on Google Maps
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>Active Mobile / Call:</strong>
                <p>
                  <a href={`tel:${SHOP_INFO.phone}`}>{SHOP_INFO.phone}</a>
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <i className="fa-brands fa-whatsapp"></i>
              <div>
                <strong>Official WhatsApp Orders:</strong>
                <p>
                  <a
                    href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                      'Assalam-o-Alaikum Super United Dairy! I want to place an order.'
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-wa-link"
                  >
                    Chat on WhatsApp ({SHOP_INFO.phone})
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-contact-item">
              <i className="fa-solid fa-clock"></i>
              <div>
                <strong>Operating Hours:</strong>
                <p>Open Daily: 6:00 AM – 1:00 AM (Midnight Fresh Supply)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Super United Dairy (Saddar, Karachi). All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <button onClick={onOpenCart} className="footer-text-btn">
              Online Basket
            </button>
            {' • '}
            <button onClick={onSwitchToPOS} className="footer-text-btn">
              Counter POS System
            </button>
            {' • '}
            <a href={`tel:${SHOP_INFO.phone}`}>Direct Shop Call</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
