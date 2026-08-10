import React, { useState } from 'react';
import { WATER_SIZES } from '../data/products';
import { Send, Eye, Droplet, Check } from 'lucide-react';

export default function ProductCard({ product, onOpenQuickView, onOpenEnquireModal }) {
  const [selectedWaterSize, setSelectedWaterSize] = useState(
    product.defaultSize || (product.sizes && product.sizes[2]) || '500 ml'
  );

  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/90 hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Image Box */}
      <div className="relative bg-gradient-to-b from-slate-100/60 to-white p-6 h-64 sm:h-72 flex items-center justify-center overflow-hidden">
        
        {/* Category Pill Tag */}
        <span className="absolute top-4 left-4 z-10 text-[11px] uppercase font-bold tracking-wider bg-white/95 text-slate-700 px-3 py-1 rounded-full shadow-xs border border-slate-200">
          {product.categoryName}
        </span>

        {/* Popular Badge */}
        {product.badge && (
          <span className="absolute top-4 right-4 z-10 text-[11px] font-extrabold bg-sky-600 text-white px-2.5 py-1 rounded-full shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Quick View Overlay Button */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onOpenQuickView(product, selectedWaterSize)}
            className="bg-white hover:bg-slate-100 text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 transform hover:scale-105 transition"
          >
            <Eye className="w-4 h-4 text-sky-600" />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          
          {/* Product Title */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-sky-600 transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {product.tagline || product.description}
          </p>

          {/* Special Size Badge Selector for Packaged Drinking Water */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="pt-2 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1">
                  <Droplet className="w-3.5 h-3.5 text-sky-500" /> Available Sizes:
                </span>
                <span className="text-sky-600 font-bold">{selectedWaterSize}</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedWaterSize(size)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all ${
                      selectedWaterSize === size
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Key Product Feature Bullet Badges */}
          {product.highlights && (
            <div className="pt-1 flex flex-wrap gap-1">
              {product.highlights.slice(0, 2).map((item, idx) => (
                <span key={idx} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Check className="w-3 h-3 text-teal-600" /> {item}
                </span>
              ))}
            </div>
          )}

        </div>

        {/* Action Button Row */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenQuickView(product, selectedWaterSize)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            Details
          </button>

          <button
            onClick={() => onOpenEnquireModal(product.name, selectedWaterSize)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            Enquire Now
          </button>
        </div>

      </div>

    </div>
  );
}
