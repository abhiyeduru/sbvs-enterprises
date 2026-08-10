import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LeadershipSection from './components/LeadershipSection';
import ProductsSection from './components/ProductsSection';
import ProductModal from './components/ProductModal';
import WhyChooseUs from './components/WhyChooseUs';
import BusinessEnquirySection from './components/BusinessEnquirySection';
import ContactSection from './components/ContactSection';
import EnquiryModal from './components/EnquiryModal';
import Footer from './components/Footer';
import Toast from './components/Toast';
import LoadingScreen from './components/LoadingScreen';
import { COMPANY_INFO } from './data/products';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewSize, setQuickViewSize] = useState('');
  
  const [enquireModal, setEnquireModal] = useState({
    isOpen: false,
    product: '',
    size: ''
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleOpenEnquireModal = (productName = '', sizeVariant = '') => {
    setEnquireModal({
      isOpen: true,
      product: productName,
      size: sizeVariant
    });
  };

  const handleCloseEnquireModal = () => {
    setEnquireModal({
      isOpen: false,
      product: '',
      size: ''
    });
  };

  const handleOpenQuickView = (product, size = '') => {
    setQuickViewProduct(product);
    setQuickViewSize(size);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
    setQuickViewSize('');
  };

  const handleExploreClick = () => {
    const productsEl = document.querySelector('#products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative selection:bg-sky-500 selection:text-white">
      
      {/* Animated Brand Splash Loading Screen */}
      {isLoading && (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      )}

      {/* Sticky Top Header Navigation */}
      <Header
        onOpenEnquireModal={handleOpenEnquireModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Website Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onOpenEnquireModal={handleOpenEnquireModal}
        />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Leadership & Management Section */}
        <LeadershipSection />

        {/* 4. Products Catalogue Section */}
        <ProductsSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenQuickView={handleOpenQuickView}
          onOpenEnquireModal={handleOpenEnquireModal}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Business & B2B Enquiry Section */}
        <BusinessEnquirySection
          onOpenEnquireModal={handleOpenEnquireModal}
        />

        {/* 6. Contact & Business Enquiry Form Section */}
        <ContactSection
          showToast={showToast}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenEnquireModal={handleOpenEnquireModal}
      />

      {/* Modals & Overlays */}
      
      {/* Product Quick View Modal */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          initialSize={quickViewSize}
          onClose={handleCloseQuickView}
          onOpenEnquireModal={handleOpenEnquireModal}
        />
      )}

      {/* Direct Enquiry Modal */}
      {enquireModal.isOpen && (
        <EnquiryModal
          initialProduct={enquireModal.product}
          initialSize={enquireModal.size}
          onClose={handleCloseEnquireModal}
          showToast={showToast}
        />
      )}

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Floating Sticky Quick WhatsApp & Call Action Buttons for Mobile/Desktop */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-2">
        <a
          href={COMPANY_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href={COMPANY_INFO.contact.phoneCallUrl}
          className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow-lg shadow-sky-600/30 transition-transform hover:scale-110 sm:hidden"
          title="Call SBVS ENTERPRISES"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
