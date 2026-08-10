import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MapPin, Droplet } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ProductModal({ product, initialSize, onClose, onOpenEnquireModal }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(
    initialSize || product.defaultSize || (product.sizes && product.sizes[0]) || ''
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 relative animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Image View Box */}
          <div className="md:col-span-6 bg-gradient-to-b from-slate-100 to-slate-50 p-8 flex items-center justify-center min-h-[300px] relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 max-w-full object-contain filter drop-shadow-xl"
            />

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 px-3 py-1 rounded-xl text-xs font-bold shadow-xs">
              {product.categoryName}
            </div>
          </div>

          {/* Right Product Specs & Enquire Trigger */}
          <div className="md:col-span-6 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-sky-600">
                  {product.categoryName}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  {product.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Sizes Selection if applicable */}
              {product.sizes && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span>Available Packaging Sizes:</span>
                    <span className="text-sky-600 font-extrabold">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs px-3 py-1.5 rounded-xl font-bold border transition ${
                          selectedSize === size
                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {product.highlights && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800">Key Product Features:</div>
                  <div className="space-y-1.5">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supplier Info */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Supplied by SBVS ENTERPRISES
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> East Godavari, Andhra Pradesh
                </div>
              </div>
            </div>

            {/* Action Modal CTA Button */}
            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquireModal(product.name, selectedSize);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-sky-500/20 transition"
              >
                <Send className="w-4 h-4" />
                Enquire About This Product
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
