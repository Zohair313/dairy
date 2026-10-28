import React from 'react';

export default function HeaderRibbon() {
  const marqueeItems = [
    '✨ 100% Khallas Danedar Desi Ghee',
    '🧈 Daily Fresh Churned Farm Makhan',
    '🥣 Shahi Malai Rabri in Clay Matkas',
    '🍯 Hot Crisp Doodh Jalebi',
    '🥛 Chilled Zafrani, Pista & Badam Milk Bottles',
    '⭐ 4.4 ★ (1,861 Google Reviews)',
    '📰 Featured in DAWN Newspaper',
    '🚚 Same-Day Chilled Delivery Across Karachi',
    '📍 Dr. Daudpota Rd, Saddar Counter',
    '🕒 Open Daily 6:00 AM – 1:00 AM',
  ];

  return (
    <div className="super-marquee-wrapper" aria-hidden="true">
      <div className="super-marquee-track">
        {/* Render twice for seamless continuous loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span key={idx} className="marquee-pill-item">
            {item}
            <span className="marquee-separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
