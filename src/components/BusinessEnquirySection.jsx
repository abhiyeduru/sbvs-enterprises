import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/products';
import { PhoneCall, MessageSquare, Send, Calculator, ShoppingBag, ArrowRight } from 'lucide-react';

export default function BusinessEnquirySection({ onOpenEnquireModal }) {
  // Interactive B2B Bulk Estimator state
  const [selectedEstimatorCategory, setSelectedEstimatorCategory] = useState('water');
  const [estimatedQuantity, setEstimatedQuantity] = useState(50);

  const getEstimatedCases = () => {
    // 24 bottles per case average
    return Math.ceil(estimatedQuantity / 24);
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-sky-900 via-slate-900 to-teal-950 text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main CTA Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4 text-sky-400" />
              Business & Retail Enquiry
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
              Looking for Quality <br className="hidden sm:inline" />
              <span className="text-sky-400">Food & Beverage</span> Products?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Get in touch with SBVS ENTERPRISES for product enquiries, availability and business requirements. We cater to B2B distributors, retail shopkeepers, restaurants, marriage halls, and bulk buyers across East Godavari and surrounding regions.
            </p>

            {/* CTAs Button Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              <a
                href={COMPANY_INFO.contact.phoneCallUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-7 py-3.5 rounded-2xl text-sm font-extrabold shadow-lg transition transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                Call Us
              </a>

              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-2xl text-sm font-extrabold shadow-lg shadow-emerald-500/25 transition transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>

              <button
                onClick={() => onOpenEnquireModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-7 py-3.5 rounded-2xl text-sm font-extrabold shadow-lg shadow-sky-600/30 transition transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Send an Enquiry
              </button>

            </div>
          </div>

          {/* Right Column: B2B Quick Order Estimator Tool Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-bold font-heading text-lg">
                  <Calculator className="w-5 h-5 text-sky-400" /> B2B Quantity Estimator
                </div>
                <span className="text-[10px] uppercase font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-md">
                  Instant Tool
                </span>
              </div>

              <div className="space-y-4">
                
                <div className="space-y-2">
                  <label className="text-xs text-slate-300 font-semibold block">Select Category:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['water', 'soda', 'drinks'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedEstimatorCategory(cat)}
                        className={`text-xs font-bold py-2 rounded-xl border capitalize transition ${
                          selectedEstimatorCategory === cat
                            ? 'bg-sky-500 border-sky-400 text-white'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300 font-semibold">
                    <span>Estimated Units / Bottles Needed:</span>
                    <span className="text-sky-300 font-bold">{estimatedQuantity} units</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>10 units</span>
                    <span>500 units</span>
                    <span>1,000+ units</span>
                  </div>
                </div>

                {/* Calculation Summary Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="text-xs text-slate-300">Estimated Case Count (~24/case):</div>
                  <div className="text-3xl font-extrabold text-sky-400 font-heading">
                    ~{getEstimatedCases()} Cases
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Suitable for B2B wholesale pricing schedule
                  </div>
                </div>

              </div>

              <button
                onClick={() =>
                  onOpenEnquireModal(
                    `Bulk ${selectedEstimatorCategory.toUpperCase()} Requirement`,
                    `Estimated ${estimatedQuantity} units (~${getEstimatedCases()} cases)`
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-bold py-3.5 rounded-2xl text-xs sm:text-sm shadow-md transition hover:scale-[1.02]"
              >
                Request Bulk Quote for {estimatedQuantity} Units
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
