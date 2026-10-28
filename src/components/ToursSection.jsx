import React from 'react';

export default function ToursSection() {
  return (
    <section className="tours-section" id="tours">
      <div className="container">
        {/* Hero Tour Photo */}
        <div className="tour-hero-img-wrapper">
          <img
            src="/assets/img_7_Girls.png"
            alt="Visitors enjoying the educational farm tour at Hay Dairies"
            className="tour-hero-img"
            loading="lazy"
          />
        </div>

        {/* 2 Tour Package Cards */}
        <div className="tours-cards-grid">
          {/* Card 1: Free and Easy */}
          <div className="tour-card tour-card-1">
            <div className="tour-operating-hours">
              9:00am to 4:00pm
              <br />
              (closed on every Tuesday, except public holidays).
            </div>

            <div>
              <h3 className="tour-card-title">Free and Easy</h3>
              <p className="tour-card-description">
                For individual / families less than 10 people
                <br />* prior booking is not required
              </p>
            </div>

            <div className="split-button-container">
              <div className="split-pill">
                <a
                  href="#farm-visit"
                  className="split-btn split-btn-left"
                >
                  More Details
                </a>
                <a
                  href="#footer-contact"
                  className="split-btn split-btn-right"
                >
                  Locate Us
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Educational Farm Tour */}
          <div className="tour-card tour-card-2">
            <div>
              <h3 className="tour-card-title">Educational Farm Tour</h3>
              <p className="tour-card-description">
                For 10 or more people, we will consider you as a group and entrance fee will be
                chargeable with an educational tour package included.
              </p>
            </div>

            <div className="split-button-container">
              <div className="split-pill">
                <a
                  href="#farm-visit"
                  className="split-btn split-btn-left"
                >
                  More Details
                </a>
                <a
                  href="#footer-contact"
                  className="split-btn split-btn-right"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
