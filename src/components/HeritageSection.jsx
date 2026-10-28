import React from 'react';
import { SHOP_INFO } from '../data/products';

export default function HeritageSection() {
  const reviews = [
    {
      name: 'Syed Hamza Ali',
      area: 'DHA Phase 6, Karachi',
      stars: 5,
      comment:
        'The Danedar Desi Ghee aroma takes you back to pure village roots. The Shahi Rabri and Doodh Jalebi at their Saddar shop is an unmatched weekend family ritual!',
    },
    {
      name: 'Fatima Tariq',
      area: 'PECHS Block 2, Karachi',
      stars: 5,
      comment:
        'Ordered 2kg fresh white Makhan and chilled Zafrani milk bottles for Sunday breakfast. Delivered cold and fresh on time via WhatsApp. Highly recommended!',
    },
    {
      name: 'Muhammad Kashif',
      area: 'Clifton, Karachi',
      stars: 5,
      comment:
        'Been coming to Dr. Daudpota Rd shop since childhood. No one in Karachi beats their quality of pure khoya and creamy malai rabri. Glad to see their online delivery now!',
    },
  ];

  return (
    <section className="heritage-section" id="heritage">
      <div className="container">
        {/* Heritage Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">A SADDAR, KARACHI INSTITUTION</span>
          <h2 className="section-title">Historic Heritage &amp; Dawn Newspaper Feature</h2>
          <p className="section-subtitle-text">
            For decades, <strong>Super United Dairy</strong> has anchored Karachi’s culinary heart on Dr.
            Daudpota Road, Saddar. Rated <strong>4.4 ★ across 1,861 reviews</strong> by milk lovers, chefs,
            and families across Pakistan.
          </p>
        </div>

        {/* Dawn Newspaper Feature Quote Banner */}
        <div className="dawn-feature-banner">
          <div className="dawn-quote-badge">
            <i className="fa-solid fa-newspaper"></i>
            <span>AS FEATURED IN DAWN</span>
          </div>
          <blockquote className="dawn-quote-text">
            "In the historic lanes of Saddar, Karachi, traditional dairy spots like Super United Dairy continue to
            serve authentic, unadulterated flavors—from piping hot doodh jalebi simmered in brass karahis to
            chilled bottles of flavored saffron milk and velvety rabri."
          </blockquote>
          <div className="dawn-link-row">
            <a
              href={SHOP_INFO.dawnUrl}
              target="_blank"
              rel="noreferrer"
              className="dawn-external-link"
            >
              <span>Read Full Coverage on Dawn.com</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

        {/* 3 Heritage Core Pillars */}
        <div className="heritage-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>100% Purity Guarantee</h3>
            <p>
              Zero synthetic thickness, zero chemical stabilizers, and zero vegetable ghee adulteration. Just
              pure dairy solids and whole milk goodness.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h3>Daily Morning to Midnight</h3>
            <p>
              Open daily from <strong>6:00 AM to 1:00 AM</strong>. Fresh morning breakfast makhan supply and late-night
              dessert cravings always ready at our Saddar counter.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <h3>Instant WhatsApp Orders</h3>
            <p>
              Direct contact with our active counter team at <strong>+92 325 3456015</strong>. Cold-packed rider
              delivery right to your gate across Karachi.
            </p>
          </div>
        </div>

        {/* Real Karachi Customer Reviews */}
        <div className="customer-reviews-section">
          <div className="reviews-header">
            <h3>Loved by Over 1,861+ Karachi Families</h3>
            <div className="google-rating-tag">
              <i className="fa-brands fa-google"></i>
              <strong>4.4 / 5.0</strong>
              <span>(1,861 Verified Reviews)</span>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((rev, i) => (
              <div key={i} className="review-speech-card">
                <div className="review-stars">
                  {'★'.repeat(rev.stars)}
                </div>
                <p className="review-comment">"{rev.comment}"</p>
                <div className="reviewer-info">
                  <strong>{rev.name}</strong>
                  <span>{rev.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
