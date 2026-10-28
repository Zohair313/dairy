import React from 'react';

export default function BrandLogo({ inverted = false }) {
  const goldColor = inverted ? '#f5c362' : '#c88613';
  const ringColor = inverted ? 'rgba(245, 195, 98, 0.4)' : '#e5a93b';
  const textColor = inverted ? '#ffffff' : '#1a1410';
  const subColor = inverted ? '#f5c362' : '#c88613';

  return (
    <div className={`brand-identity-container ${inverted ? 'inverted' : ''}`}>
      <div className="brand-crest-svg-wrap">
        <svg
          width="46"
          height="46"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-svg-crest"
          aria-hidden="true"
        >
          {/* Outer Traditional Seal Rings */}
          <circle cx="28" cy="28" r="26" stroke={goldColor} strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="28" cy="28" r="22.5" stroke={ringColor} strokeWidth="1" />
          
          {/* Milk Pitcher / Churn Vector */}
          <path
            d="M22 17h12v4l-3 4v11c0 3.5-1.5 5-3 5s-3-1.5-3-5V25l-3-4v-4z"
            fill={goldColor}
          />
          <path
            d="M20.5 15.5h15a1 1 0 0 1 1 1v1.5h-17v-1.5a1 1 0 0 1 1-1z"
            fill={inverted ? '#ffffff' : '#945f06'}
          />
          <path
            d="M25 29h6m-5 4h4"
            stroke={inverted ? '#1a1410' : '#ffffff'}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Golden Pure Drop Accent */}
          <path
            d="M28 10c0 0-2.2 2.6-2.2 3.8a2.2 2.2 0 0 0 4.4 0c0-1.2-2.2-3.8-2.2-3.8z"
            fill={goldColor}
          />
          {/* Flanking Heritage Dots */}
          <circle cx="13" cy="28" r="1.5" fill={goldColor} />
          <circle cx="43" cy="28" r="1.5" fill={goldColor} />
        </svg>
      </div>

      <div className="brand-text-block">
        <span className="brand-title-main" style={{ color: textColor }}>
          SUPER UNITED DAIRY
        </span>
        <span className="brand-subtitle-saddar" style={{ color: subColor }}>
          سپر یونائیٹڈ ڈیری • SADDAR, KARACHI
        </span>
      </div>
    </div>
  );
}
