import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, WATER_SIZES, getImageUrl } from '../data/products';
import ProductCard from './ProductCard';
import { Package, Search, Droplets, Zap, Wine, Utensils, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function ProductsSection({
  searchQuery,
  setSearchQuery,
  onOpenQuickView,
  onOpenEnquireModal
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWaterSize, setSelectedWaterSize] = useState('500 ml');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Wine': return <Wine className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const waterProduct = PRODUCTS.find((p) => p.id === 'packaged-drinking-water');

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Package className="w-4 h-4 text-sky-600" />
            Product Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our <span className="gradient-text-sky">Products</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Quality food and beverage products tailored for retail shops, distributors, events, and everyday refreshment.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="mb-12 space-y-6">
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Search Notification */}
          {searchQuery && (
            <div className="text-center">
              <span className="text-sm font-medium text-slate-600 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full">
                Showing results for: "<strong className="text-sky-700">{searchQuery}</strong>" (
                {filteredProducts.length} items)
              </span>
            </div>
          )}
        </div>

        {/* Dedicated Featured Showcase Banner for CATEGORY 1: PACKAGED DRINKING WATER (when active filter is 'all' or 'water') */}
        {(activeCategory === 'all' || activeCategory === 'water') && !searchQuery && waterProduct && (
          <div className="mb-16 bg-gradient-to-r from-sky-900 via-slate-900 to-teal-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            
            {/* Background Light Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Droplets className="w-4 h-4 text-sky-400" />
                  Category 1 — Packaged Drinking Water
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  Packaged Drinking Water
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  SBVS Packaged Drinking Water is bottled with rigorous quality standards to provide clean, crisp hydration. Designed to meet the requirements of retail stores, events, offices, catering, and home delivery.
                </p>

                {/* Size Selector Badges Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-sky-300">
                    Select Available Bottle Size:
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {WATER_SIZES.map((item) => (
                      <button
                        key={item.size}
                        onClick={() => setSelectedWaterSize(item.size)}
                        className={`p-3 rounded-2xl text-center border transition-all ${
                          selectedWaterSize === item.size
                            ? 'bg-sky-500 text-white border-sky-400 font-extrabold shadow-lg shadow-sky-500/30 scale-105'
                            : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                        }`}
                      >
                        <div className="text-base font-extrabold">{item.size}</div>
                        <div className="text-[10px] text-slate-300 mt-0.5 truncate">{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenEnquireModal('Packaged Drinking Water', selectedWaterSize)}
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-sky-500/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Enquire About {selectedWaterSize} Pack
                  </button>

                  <button
                    onClick={() => onOpenQuickView(waterProduct, selectedWaterSize)}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl text-sm font-semibold transition"
                  >
                    View Specs
                  </button>
                </div>
              </div>

              {/* Right Big Bottle Display Image - Both Aquelle & Square Bottles Side-by-Side */}
              <div className="lg:col-span-5 flex items-center justify-center p-4 relative">
                <div className="relative w-full h-72 sm:h-80 flex items-center justify-center gap-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6">
                  
                  {/* Aquelle Bottle */}
                  <div className="flex-1 h-full flex flex-col items-center justify-center">
                    <img
                      src={getImageUrl('images/water.png')}
                      alt="Aquelle Packaged Drinking Water"
                      className="max-h-[85%] max-w-full object-contain filter drop-shadow-2xl animate-float"
                    />
                    <span className="text-xs font-bold text-sky-200 bg-sky-950/80 px-2.5 py-0.5 rounded-md border border-sky-700/50 mt-1">
                      Aquelle Water
                    </span>
                  </div>

                  {/* Square Bottle */}
                  <div className="flex-1 h-full flex flex-col items-center justify-center">
                    <img
                      src={getImageUrl('images/square_water.png')}
                      alt="Square Premium Drinking Water"
                      className="max-h-[85%] max-w-full object-contain filter drop-shadow-2xl animate-float"
                      style={{ animationDelay: '0.9s' }}
                    />
                    <span className="text-xs font-bold text-rose-200 bg-rose-950/80 px-2.5 py-0.5 rounded-md border border-rose-700/50 mt-1">
                      Square Water
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-sky-500/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-xl shadow-md backdrop-blur-md">
                    Selected Size: {selectedWaterSize}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Main Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenQuickView={onOpenQuickView}
                onOpenEnquireModal={onOpenEnquireModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <Package className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold text-slate-800">No products found</h3>
            <p className="text-sm text-slate-500">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="bg-sky-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
