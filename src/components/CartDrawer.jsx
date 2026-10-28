import React, { useState } from 'react';
import { SHOP_INFO } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('Saddar');
  const [customerAddress, setCustomerAddress] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let itemsText = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}* (${item.selectedWeight || item.unit}) x ${item.quantity} = Rs. ${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join('\n');

    let message = `🥛 *NEW ORDER - SUPER UNITED DAIRY (KARACHI)*\n\n`;
    message += `👤 *Customer Name:* ${customerName || 'Valued Customer'}\n`;
    message += `📞 *Phone:* ${customerPhone || 'Not provided'}\n`;
    message += `📍 *Delivery Area:* ${deliveryArea}, Karachi\n`;
    if (customerAddress) {
      message += `🏠 *Address:* ${customerAddress}\n`;
    }
    message += `\n📦 *Order Items:*\n${itemsText}\n\n`;
    message += `💰 *Total Bill:* Rs. ${subtotal.toLocaleString()}\n\n`;
    message += `Assalam-o-Alaikum! Please confirm my order and rider delivery timing from Saddar. Shukriya!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${SHOP_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-title-wrapper">
            <i className="fa-solid fa-basket-shopping cart-icon-title"></i>
            <div>
              <h3>Your Dairy Basket</h3>
              <p className="cart-sub">Super United Dairy • Saddar, Karachi</p>
            </div>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <i className="fa-solid fa-jug-detergent empty-icon"></i>
              <h4>Your basket is empty</h4>
              <p>Add fresh Makhan, Desi Ghee, Rabri or Flavored Milk bottles to start ordering!</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedWeight}`} className="cart-item-row">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h5 className="cart-item-name">{item.name}</h5>
                    <span className="cart-item-weight">{item.selectedWeight || item.unit}</span>
                    <span className="cart-item-price">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                  <div className="cart-item-controls">
                    <div className="qty-pill">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedWeight, -1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedWeight, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemoveItem(item.id, item.selectedWeight)}
                      title="Remove item"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Delivery & Contact Details Form */}
          {cart.length > 0 && (
            <div className="cart-form-section">
              <h4>Delivery Details (Karachi)</h4>
              <div className="cart-form-grid">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="cart-input"
                />
                <input
                  type="tel"
                  placeholder="Mobile / WhatsApp (03xx)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="cart-input"
                />
              </div>

              <div className="cart-form-grid" style={{ marginTop: '10px' }}>
                <select
                  value={deliveryArea}
                  onChange={(e) => setDeliveryArea(e.target.value)}
                  className="cart-select"
                >
                  <option value="Saddar">Saddar / Preedy</option>
                  <option value="Clifton">Clifton (Blocks 1-9)</option>
                  <option value="DHA">Defence (DHA Phases 1-8)</option>
                  <option value="PECHS">PECHS / Tariq Road</option>
                  <option value="Bahadurabad">Bahadurabad / Sharfabad</option>
                  <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                  <option value="Gulistan-e-Jauhar">Gulistan-e-Jauhar</option>
                  <option value="North Nazimabad">North Nazimabad</option>
                  <option value="Federal B Area">Federal B Area</option>
                  <option value="Malir Cantt">Malir / Model Colony</option>
                  <option value="Other Area">Other Karachi Area</option>
                </select>
                <input
                  type="text"
                  placeholder="Street / House No."
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="cart-input"
                />
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Subtotal & WhatsApp CTA */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal-row">
              <span>Estimated Subtotal:</span>
              <strong>Rs. {subtotal.toLocaleString()}</strong>
            </div>
            <p className="cart-delivery-note">
              🚚 Daily Fresh Cold-Chain Delivery from Saddar Counter across Karachi
            </p>

            <button className="cart-whatsapp-order-btn" onClick={handleWhatsAppOrder}>
              <i className="fa-brands fa-whatsapp"></i>
              <span>Order via WhatsApp (+92 325 3456015)</span>
            </button>

            <div className="cart-call-row">
              <a href={`tel:${SHOP_INFO.phone}`} className="cart-direct-call-btn">
                <i className="fa-solid fa-phone"></i>
                <span>Direct Shop Call ({SHOP_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
