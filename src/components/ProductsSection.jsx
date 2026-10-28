import React, { useState } from 'react';
import { PRODUCTS, SHOP_INFO } from '../data/products';

export default function ProductsSection({ onAddToCart, onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedWeights, setSelectedWeights] = useState({});
  const [addedId, setAddedId] = useState(null);

  const categories = ['All', 'Ghee & Butter', 'Traditional Sweets', 'Flavored Milk'];

  const handleWeightChange = (productId, weightOption) => {
    setSelectedWeights({
      ...selectedWeights,
      [productId]: weightOption,
    });
  };

  const handleAdd = (product, weightOption) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: weightOption.price,
      selectedWeight: weightOption.label,
      image: product.image,
      unit: product.unit,
    });
    setAddedId(`${product.id}-${weightOption.label}`);
    setTimeout(() => {
      setAddedId(null);
    }, 1400);
  };

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="products-section super-products-section" id="products">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-eyebrow">خالص اور معیاری • SADDAR'S FINEST</span>
          <h2 className="section-title">Pure Dairy Specialties &amp; Sweets</h2>
          <p className="section-subtitle-text">
            Handcrafted with 100% whole buffalo and cow milk. No artificial preservatives, zero vegetable oil adulteration.
            Daily fresh supply delivered cold across all Karachi areas!
          </p>

          {/* Category Filter Pills */}
          <div className="category-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' && '🌟 All Specialties'}
                {cat === 'Ghee & Butter' && '🧈 Desi Ghee & Makhan'}
                {cat === 'Traditional Sweets' && '🍯 Rabri & Doodh Jalebi'}
                {cat === 'Flavored Milk' && '🥛 Flavored Milk Bottles'}
              </button>
            ))}
          </div>
        </div>

        {/* Products Card Grid */}
        <div className="super-products-grid">
          {filteredProducts.map((p) => {
            const currentWeight = selectedWeights[p.id] || p.weights[0];
            const isAdded = addedId === `${p.id}-${currentWeight.label}`;

            return (
              <div key={p.id} className="super-product-card">
                {/* Badge Row */}
                <div className="card-badge-row">
                  <span className="product-badge-pill">{p.badge}</span>
                  <span className="product-tag-pill">{p.tag}</span>
                </div>

                {/* Product Image */}
                <div className="product-card-img-wrap" onClick={() => onOpenModal(p)}>
                  <img src={p.image} alt={p.name} className="product-card-img" loading="lazy" />
                  <div className="product-img-overlay">
                    <span>
                      <i className="fa-solid fa-sparkles"></i> View Details &amp; Purity
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="product-card-body">
                  <div className="card-title-row">
                    <h3 className="card-title">{p.name}</h3>
                    <span className="card-urdu">{p.urdu}</span>
                  </div>

                  <p className="card-description">{p.description}</p>

                  {/* Weight / Pack Options */}
                  <div className="weight-selection-box">
                    <label className="weight-select-label">Select Weight / Size:</label>
                    <div className="weight-pill-group">
                      {p.weights.map((w) => (
                        <button
                          key={w.label}
                          type="button"
                          className={`weight-choice-pill ${
                            currentWeight.label === w.label ? 'selected' : ''
                          }`}
                          onClick={() => handleWeightChange(p.id, w)}
                        >
                          {w.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart Action */}
                  <div className="card-pricing-action-row">
                    <div className="price-display">
                      <span className="price-label">Price</span>
                      <strong className="price-amount">
                        Rs. {currentWeight.price.toLocaleString()}
                      </strong>
                    </div>

                    <div className="card-btn-duo">
                      <button
                        type="button"
                        className={`add-to-cart-action-btn ${isAdded ? 'just-added' : ''}`}
                        onClick={() => handleAdd(p, currentWeight)}
                        title="Add to shopping basket"
                      >
                        <i className={`fa-solid ${isAdded ? 'fa-check' : 'fa-basket-shopping'}`}></i>{' '}
                        {isAdded ? 'Added!' : 'Add'}
                      </button>

                      <a
                        href={`https://wa.me/${SHOP_INFO.whatsapp}?text=${encodeURIComponent(
                          `Assalam-o-Alaikum Super United Dairy! I want to order *${p.name}* (${currentWeight.label}) for Rs. ${currentWeight.price.toLocaleString()} for delivery in Karachi.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="quick-wa-action-btn"
                        title="Order this item directly on WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp"></i> Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
