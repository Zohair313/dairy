import React, { useState } from 'react';
import { PRODUCTS, SHOP_INFO } from '../data/products';

export default function CounterPOS({ onExitPOS }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [posCart, setPosCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [cashTendered, setCashTendered] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState('Takeaway Counter');
  const [printedReceipt, setPrintedReceipt] = useState(null);
  const [orderNumber, setOrderNumber] = useState(1048);

  const categories = ['All', 'Ghee & Butter', 'Traditional Sweets', 'Flavored Milk'];

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleAddItem = (product, weightOption) => {
    const itemKey = `${product.id}-${weightOption.label}`;
    const existing = posCart.find((item) => item.key === itemKey);

    if (existing) {
      setPosCart(
        posCart.map((item) =>
          item.key === itemKey ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setPosCart([
        ...posCart,
        {
          key: itemKey,
          id: product.id,
          name: product.name,
          urdu: product.urdu,
          weight: weightOption.label,
          price: weightOption.price,
          qty: 1,
        },
      ]);
    }
  };

  const handleUpdateQty = (key, delta) => {
    setPosCart(
      posCart
        .map((item) => {
          if (item.key === key) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleClearCart = () => {
    setPosCart([]);
    setCashTendered('');
    setCustomerPhone('');
  };

  const totalAmount = posCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const numericTendered = parseFloat(cashTendered) || 0;
  const changeDue = numericTendered >= totalAmount ? numericTendered - totalAmount : 0;

  const handlePunchOrder = () => {
    if (posCart.length === 0) return;

    const receiptData = {
      orderNo: `SUD-${orderNumber}`,
      dateTime: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      orderType,
      paymentMethod,
      customerPhone: customerPhone || 'Walk-in Counter Guest',
      items: [...posCart],
      total: totalAmount,
      tendered: numericTendered || totalAmount,
      change: changeDue,
    };

    setPrintedReceipt(receiptData);
    setOrderNumber((prev) => prev + 1);
  };

  const handlePrintWindow = () => {
    window.print();
  };

  return (
    <div className="pos-app-wrapper">
      {/* POS Top Terminal Header */}
      <div className="pos-top-header">
        <div className="pos-brand">
          <div className="pos-logo-badge">⚡ POS</div>
          <div>
            <h2>Super United Dairy – Saddar Counter Terminal</h2>
            <p>V25J+M4J, Dr. Daudpota Rd, Saddar, Karachi • Phone: {SHOP_INFO.phone}</p>
          </div>
        </div>

        <div className="pos-header-actions">
          <div className="pos-shift-info">
            <span className="shift-badge">🟢 LIVE COUNTER</span>
            <span className="order-counter-badge">Order: #SUD-{orderNumber}</span>
          </div>
          <button className="pos-exit-btn" onClick={onExitPOS}>
            <i className="fa-solid fa-store"></i> Switch to Customer Website
          </button>
        </div>
      </div>

      {/* POS Main Layout: Left Products Grid + Right Bill Panel */}
      <div className="pos-main-container">
        {/* Left Side: Product Selector */}
        <div className="pos-left-section">
          {/* Quick Categories Bar */}
          <div className="pos-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pos-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' && '📦 '}
                {cat === 'Ghee & Butter' && '🧈 '}
                {cat === 'Traditional Sweets' && '🍯 '}
                {cat === 'Flavored Milk' && '🥛 '}
                {cat}
              </button>
            ))}
          </div>

          {/* High Speed Product Grid */}
          <div className="pos-products-grid">
            {filteredProducts.map((p) => (
              <div key={p.id} className="pos-product-card">
                <div className="pos-card-header">
                  <div>
                    <h4 className="pos-p-name">{p.name}</h4>
                    <span className="pos-p-urdu">{p.urdu}</span>
                  </div>
                  <span className="pos-tag">{p.tag}</span>
                </div>

                <div className="pos-weight-buttons">
                  {p.weights.map((w) => (
                    <button
                      key={w.label}
                      className="pos-weight-btn"
                      onClick={() => handleAddItem(p, w)}
                    >
                      <span className="weight-label">{w.label}</span>
                      <span className="weight-price">Rs. {w.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Fast Billing & Thermal Checkout */}
        <div className="pos-right-bill-panel">
          <div className="bill-panel-header">
            <h3>Current Counter Invoice</h3>
            <div className="order-type-toggle">
              <button
                className={`order-type-btn ${orderType === 'Takeaway Counter' ? 'active' : ''}`}
                onClick={() => setOrderType('Takeaway Counter')}
              >
                Parcel Takeaway
              </button>
              <button
                className={`order-type-btn ${orderType === 'Rider Delivery' ? 'active' : ''}`}
                onClick={() => setOrderType('Rider Delivery')}
              >
                Rider Delivery
              </button>
            </div>
          </div>

          {/* Phone / Customer input */}
          <div className="pos-customer-input-row">
            <input
              type="tel"
              placeholder="Customer Phone (03xx / WhatsApp)"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="pos-input"
            />
          </div>

          {/* Scored Items List */}
          <div className="pos-bill-items-table">
            {posCart.length === 0 ? (
              <div className="pos-empty-bill">
                <i className="fa-solid fa-receipt"></i>
                <p>No items added. Click any product weight on the left to punch an item.</p>
              </div>
            ) : (
              <div className="pos-items-scroll">
                {posCart.map((item) => (
                  <div key={item.key} className="pos-item-row">
                    <div className="pos-item-info">
                      <strong>{item.name}</strong>
                      <span className="pos-item-variant">
                        {item.weight} @ Rs. {item.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="pos-item-qty-actions">
                      <button onClick={() => handleUpdateQty(item.key, -1)}>-</button>
                      <span className="qty-val">{item.qty}</span>
                      <button onClick={() => handleUpdateQty(item.key, 1)}>+</button>
                    </div>

                    <div className="pos-item-total">
                      Rs. {(item.price * item.qty).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payment & Calculations */}
          <div className="pos-billing-summary">
            <div className="pos-summary-line grand-total">
              <span>Grand Total:</span>
              <span>Rs. {totalAmount.toLocaleString()}</span>
            </div>

            {/* Payment Modes */}
            <div className="payment-modes-grid">
              {['Cash', 'Raast / Online', 'JazzCash / EasyPaisa', 'Card'].map((mode) => (
                <button
                  key={mode}
                  className={`payment-mode-pill ${paymentMethod === mode ? 'active' : ''}`}
                  onClick={() => setPaymentMethod(mode)}
                >
                  {mode === 'Cash' && '💵 '}
                  {mode === 'Raast / Online' && '⚡ '}
                  {mode === 'JazzCash / EasyPaisa' && '📱 '}
                  {mode === 'Card' && '💳 '}
                  {mode}
                </button>
              ))}
            </div>

            {/* Cash Tendered & Change */}
            {paymentMethod === 'Cash' && (
              <div className="pos-cash-tendered-box">
                <div className="tendered-input-row">
                  <label>Cash Received (Rs.):</label>
                  <input
                    type="number"
                    placeholder="e.g. 1000, 2000"
                    value={cashTendered}
                    onChange={(e) => setCashTendered(e.target.value)}
                    className="tendered-input"
                  />
                </div>
                {numericTendered > 0 && (
                  <div className="change-return-row">
                    <span>Change to Return:</span>
                    <strong className="change-value">Rs. {changeDue.toLocaleString()}</strong>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pos-actions-row">
              <button
                className="pos-clear-btn"
                onClick={handleClearCart}
                disabled={posCart.length === 0}
              >
                Clear
              </button>
              <button
                className="pos-punch-btn"
                onClick={handlePunchOrder}
                disabled={posCart.length === 0}
              >
                <i className="fa-solid fa-print"></i> Punch &amp; Print Thermal KOT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thermal Receipt Modal Simulation */}
      {printedReceipt && (
        <div className="receipt-modal-backdrop" onClick={() => setPrintedReceipt(null)}>
          <div className="thermal-receipt-paper" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-header">
              <h2 className="receipt-shop-name">{SHOP_INFO.name}</h2>
              <p className="receipt-urdu">خالص دیسی گھی، مکھن، ربڑی اور دودھ جلیبی</p>
              <p className="receipt-address">Dr. Daudpota Rd, Saddar, Karachi</p>
              <p className="receipt-phone">Ph: {SHOP_INFO.phone}</p>
              <div className="receipt-divider">================================</div>
            </div>

            <div className="receipt-meta">
              <div>
                <strong>Order #:</strong> {printedReceipt.orderNo}
              </div>
              <div>
                <strong>Date/Time:</strong> {printedReceipt.dateTime}
              </div>
              <div>
                <strong>Type:</strong> {printedReceipt.orderType}
              </div>
              <div>
                <strong>Payment:</strong> {printedReceipt.paymentMethod}
              </div>
              <div>
                <strong>Customer:</strong> {printedReceipt.customerPhone}
              </div>
            </div>

            <div className="receipt-divider">--------------------------------</div>

            <table className="receipt-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Item</th>
                  <th style={{ textAlign: 'center' }}>Qty</th>
                  <th style={{ textAlign: 'right' }}>Amt (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {printedReceipt.items.map((it) => (
                  <tr key={it.key}>
                    <td>
                      {it.name} <br />
                      <small>({it.weight})</small>
                    </td>
                    <td style={{ textAlign: 'center' }}>{it.qty}</td>
                    <td style={{ textAlign: 'right' }}>
                      {(it.price * it.qty).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="receipt-divider">================================</div>

            <div className="receipt-totals">
              <div className="receipt-total-line bold">
                <span>NET TOTAL:</span>
                <span>Rs. {printedReceipt.total.toLocaleString()}</span>
              </div>
              <div className="receipt-total-line">
                <span>Tendered:</span>
                <span>Rs. {printedReceipt.tendered.toLocaleString()}</span>
              </div>
              <div className="receipt-total-line">
                <span>Change:</span>
                <span>Rs. {printedReceipt.change.toLocaleString()}</span>
              </div>
            </div>

            <div className="receipt-footer">
              <p>*** THANK YOU FOR VISITING ***</p>
              <p>Karachi's Favorite Heritage Dairy in Saddar</p>
              <p>Featured in DAWN Newspaper • 4.4 ★ (1,861 Reviews)</p>
              <p className="receipt-barcode">||||| | |||| |||||| | |||||| ||</p>
            </div>

            <div className="receipt-modal-actions no-print">
              <button className="receipt-print-btn" onClick={handlePrintWindow}>
                <i className="fa-solid fa-print"></i> Print Receipt
              </button>
              <button
                className="receipt-close-btn"
                onClick={() => {
                  setPrintedReceipt(null);
                  handleClearCart();
                }}
              >
                Next Customer (New Order)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
