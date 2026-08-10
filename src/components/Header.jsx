import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/products';
import { Menu, X, Phone, MessageSquare, Search, Send, ShieldCheck, Droplet } from 'lucide-react';

export default function Header({ onOpenEnquireModal, searchQuery, setSearchQuery }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
          : 'bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <Droplet className="w-6 h-6 fill-white/20" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block font-heading group-hover:text-sky-600 transition-colors">
                SBVS <span className="text-sky-600">ENTERPRISES</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-teal-500" /> Food & Beverages
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Toggle */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 border border-slate-200 animate-fadeIn">
                  <Search className="w-4 h-4 text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search water, soda, drinks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-slate-800 focus:outline-none w-48"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setShowSearchInput(false);
                      setSearchQuery('');
                    }}
                    className="text-slate-400 hover:text-slate-600 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 rounded-full text-slate-600 hover:text-sky-600 hover:bg-slate-100 transition"
                  title="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Main CTA */}
            <button
              onClick={() => onOpenEnquireModal()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-4 h-4" />
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquireModal()}
              className="sm:hidden bg-sky-600 text-white p-2 rounded-lg text-xs font-bold"
            >
              Enquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center bg-slate-100 rounded-xl px-3 py-2 border border-slate-200">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm text-slate-800 focus:outline-none w-full"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-800 hover:text-sky-600 py-2 border-b border-slate-100 flex items-center justify-between"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquireModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white py-3 rounded-xl font-bold shadow-md"
            >
              <Send className="w-4 h-4" />
              Enquire Now
            </button>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href={COMPANY_INFO.contact.phoneCallUrl}
                className="flex items-center justify-center gap-1.5 bg-slate-100 text-slate-800 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-200"
              >
                <Phone className="w-4 h-4 text-sky-600" /> Call Us
              </a>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-100"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
