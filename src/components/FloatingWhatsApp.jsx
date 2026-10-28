import React from 'react';
import { SHOP_INFO } from '../data/products';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
        'Assalam-o-Alaikum Super United Dairy! I want to order fresh Desi Ghee / Butter / Rabri for delivery in Karachi.'
      )}`}
      target="_blank"
      rel="noreferrer"
      className="floating-wa-btn"
      title="Direct WhatsApp Order"
    >
      <div className="floating-wa-icon-wrap">
        <i className="fa-brands fa-whatsapp"></i>
      </div>
      <div className="floating-wa-text">
        <span className="wa-title">Order on WhatsApp</span>
        <span className="wa-phone">{SHOP_INFO.phone}</span>
      </div>
    </a>
  );
}
