import React from 'react';
import { SHOP_INFO } from '../data/products';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card super-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-inner-layout">
          <div className="modal-img-col">
            <img src={product.image} alt={product.name} className="modal-product-img" />
            <div className="modal-badge-tag">{product.badge}</div>
          </div>

          <div className="modal-content-col">
            <div className="modal-titles">
              <span className="modal-category">{product.category}</span>
              <h3 className="modal-title">{product.name}</h3>
              <span className="modal-urdu">{product.urdu}</span>
            </div>

            <p className="modal-desc">{product.description}</p>

            <div className="modal-purity-box">
              <div className="purity-item">
                <i className="fa-solid fa-certificate"></i>
                <span>100% Pure &amp; Unadulterated</span>
              </div>
              <div className="purity-item">
                <i className="fa-solid fa-snowflake"></i>
                <span>Fresh Daily Supply</span>
              </div>
              <div className="purity-item">
                <i className="fa-solid fa-truck"></i>
                <span>Karachi Express Delivery</span>
              </div>
            </div>

            {/* Weights & Prices */}
            <div className="modal-weights-list">
              <label className="modal-weights-label">Available Packings &amp; Rates:</label>
              <div className="modal-weights-grid">
                {product.weights.map((w) => (
                  <div key={w.label} className="modal-weight-row">
                    <span className="mw-label">{w.label}</span>
                    <strong className="mw-price">Rs. {w.price.toLocaleString()}</strong>
                    <button
                      className="mw-add-btn"
                      onClick={() => {
                        onAddToCart({
                          id: product.id,
                          name: product.name,
                          price: w.price,
                          selectedWeight: w.label,
                          image: product.image,
                          unit: product.unit,
                        });
                        onClose();
                      }}
                    >
                      <i className="fa-solid fa-cart-plus"></i> Add
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="modal-direct-wa">
              <a
                href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                  `Assalam-o-Alaikum Super United Dairy! I want to order *${product.name}* for delivery in Karachi.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="modal-wa-btn"
              >
                <i className="fa-brands fa-whatsapp"></i> Instant WhatsApp Order ({SHOP_INFO.phone})
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
