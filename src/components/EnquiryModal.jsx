import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function EnquiryModal({ initialProduct = '', initialSize = '', onClose, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    product: initialProduct || 'Packaged Drinking Water',
    variant: initialSize || '500 ml',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        product: initialProduct,
        variant: initialSize || prev.variant
      }));
    }
  }, [initialProduct, initialSize]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      if (showToast) {
        showToast(`Enquiry submitted for ${formData.product}!`, 'success');
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-scaleUp">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">Enquiry Received</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
              Our team at SBVS ENTERPRISES will review your query for <strong>{formData.product}</strong> ({formData.variant}) and contact you back shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-sky-600 transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> SBVS ENTERPRISES
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Product Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Get pricing, availability, and wholesale delivery information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Product and Variant Badge Indicator */}
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs font-bold text-sky-900">
                <span>Product: {formData.product}</span>
                {formData.variant && (
                  <span className="bg-sky-600 text-white px-2 py-0.5 rounded-lg text-[10px]">
                    Size: {formData.variant}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">Estimated Quantity / Requirement</label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g. 20 cases for retail store / wedding event"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">Additional Notes</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Mention delivery location in East Godavari or nearby area..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-extrabold py-3 rounded-xl shadow-md transition disabled:opacity-50 text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Submit Product Enquiry'}
              </button>

            </form>
          </div>
        )}

      </div>

    </div>
  );
}
