import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeaderRibbon from './components/HeaderRibbon';
import ProductsSection from './components/ProductsSection';
import HeritageSection from './components/HeritageSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CounterPOS from './components/CounterPOS';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [viewMode, setViewMode] = useState('storefront'); // 'storefront' | 'pos'
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const handleAddToCart = (productWithWeight) => {
    const existingIndex = cart.findIndex(
      (item) =>
        item.id === productWithWeight.id &&
        item.selectedWeight === productWithWeight.selectedWeight
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...productWithWeight, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, selectedWeight, delta) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id && item.selectedWeight === selectedWeight) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id, selectedWeight) => {
    setCart(
      cart.filter(
        (item) => !(item.id === id && item.selectedWeight === selectedWeight)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // If user launched POS Mode:
  if (viewMode === 'pos') {
    return <CounterPOS onExitPOS={() => setViewMode('storefront')} />;
  }

  // Customer-facing Storefront View:
  return (
    <div className="super-dairy-app">
      {/* Primary Navigation with WhatsApp Order & Cart */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Decorative Golden Brand Ribbon */}
        <HeaderRibbon />

        {/* Specialties / Products Section */}
        <ProductsSection
          onAddToCart={handleAddToCart}
          onOpenModal={(prod) => setActiveModalProduct(prod)}
        />

        {/* Heritage, Saddar Location, Dawn Feature & Reviews */}
        <HeritageSection />

        {/* Karachi Same-Day Home Delivery & Counter Pickup */}
        <DeliverySection onOpenCart={() => setIsCartOpen(true)} />
      </main>

      {/* Footer with Contact, Maps, Hours */}
      <Footer
        onOpenCart={() => setIsCartOpen(true)}
        onSwitchToPOS={() => setViewMode('pos')}
      />

      {/* Online Order Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Direct WhatsApp Floating Bubble */}
      <FloatingWhatsApp />

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
