import React from 'react';

export default function FarmVisitSection() {
  return (
    <section className="farm-visit-section" id="farm-visit">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <h1 className="section-title">Farm Visit</h1>
          <p className="section-subtitle-text">
            We work at the farm on a daily basis handling the milking and feeding of our goats.
            Of course, we also look after them with tender, loving and care.
          </p>
        </div>

        {/* 3 Farm Visit Feature Cards */}
        <div className="farm-visit-grid">
          <div className="farm-feature-card">
            <img
              src="/assets/img_4_Group-8.png"
              alt="Farm Milking & Feeding"
              loading="lazy"
            />
          </div>

          <div className="farm-feature-card">
            <img
              src="/assets/img_5_Group-9.png"
              alt="Tender Loving Care"
              loading="lazy"
            />
          </div>

          <div className="farm-feature-card">
            <img
              src="/assets/img_6_Group-10.png"
              alt="Locally Produced in Singapore"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
