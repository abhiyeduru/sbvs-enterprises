import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, MapPin, Sparkles, Droplets, CheckCircle } from 'lucide-react';
import { getImageUrl } from '../data/products';

export default function Hero({ onExploreClick, onOpenEnquireModal }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-bg-hero">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200/80 text-sky-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>East Godavari's Trusted FMCG & Beverage Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
              Refreshing Products.{' '}
              <span className="gradient-text-sky block sm:inline">Trusted Quality.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              SBVS ENTERPRISES brings quality food and beverage products designed for everyday refreshment and enjoyment.
            </p>

            {/* Feature Checkmarks Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Packaged Drinking Water
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Refreshing Sodas
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Flavored Drinks
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Authentic Pickles
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Spice Powders
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" /> Savory Snacks
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3.5 rounded-2xl text-base font-bold shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 px-8 py-3.5 rounded-2xl text-base font-semibold shadow-xs hover:shadow-md transition-all"
              >
                <PhoneCall className="w-5 h-5 text-sky-600" />
                Contact Us
              </a>
            </div>

            {/* Location Pill */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 font-medium">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Rowthulapudi (M), East Godavari (Dt.), Andhra Pradesh</span>
            </div>

          </div>

          {/* Right Hero Product Cards Grid Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Glass Wrapper */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Center Featured Product Showcase Card */}
              <div className="glass-card rounded-3xl p-6 relative z-20 border border-white/60 shadow-2xl overflow-hidden group">
                
                <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-30">
                  Featured Duo
                </div>

                {/* Side by Side Bottles Container */}
                <div className="h-64 sm:h-72 w-full flex items-center justify-center gap-2 p-2 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 rounded-2xl relative overflow-hidden">
                  
                  {/* Aquelle Bottle */}
                  <div className="flex-1 h-full flex flex-col items-center justify-center relative group/b1">
                    <img
                      src={getImageUrl('images/water.jpg')}
                      alt="Aquelle Packaged Drinking Water"
                      className="max-h-[85%] max-w-full object-contain rounded-lg filter drop-shadow-xl group-hover/b1:scale-105 transition-transform duration-500 animate-float"
                    />
                    <span className="mt-1 text-[11px] font-extrabold text-slate-800 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200/80 shadow-xs">
                      Aquelle 500ml
                    </span>
                  </div>

                  {/* Divider Line */}
                  <div className="h-3/4 w-[1px] bg-gradient-to-b from-transparent via-sky-200 to-transparent" />

                  {/* Square Bottle */}
                  <div className="flex-1 h-full flex flex-col items-center justify-center relative group/b2">
                    <img
                      src={getImageUrl('images/square_water.png')}
                      alt="Square Premium Drinking Water"
                      className="max-h-[85%] max-w-full object-contain rounded-lg filter drop-shadow-xl group-hover/b2:scale-105 transition-transform duration-500 animate-float"
                      style={{ animationDelay: '0.8s' }}
                    />
                    <span className="mt-1 text-[11px] font-extrabold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/80 shadow-xs">
                      Square 500ml
                    </span>
                  </div>

                  {/* Floating Size Pill Badges */}
                  <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-extrabold text-slate-800 shadow-md border border-slate-100 flex items-center gap-1 z-20">
                    <Droplets className="w-3.5 h-3.5 text-sky-500" />
                    <span>Pure Water Series</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      Packaged Drinking Water
                    </h3>
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                      Aquelle & Square
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Premium purified drinking water in standard Aquelle PET bottles & stylish Square RO mineral balanced bottles.
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenEnquireModal('Aquelle Packaged Drinking Water')}
                      className="flex-1 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 py-2 rounded-xl border border-slate-200 transition-colors shadow-xs"
                    >
                      Aquelle Water
                    </button>
                    <button
                      onClick={() => onOpenEnquireModal('Square Premium Drinking Water')}
                      className="flex-1 text-xs font-bold text-white bg-slate-900 hover:bg-sky-600 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      Square Water
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating Orbiting Product Thumbnail Badges */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-30 glass-card p-3 rounded-2xl items-center gap-3 shadow-xl animate-float border border-white" style={{ animationDelay: '1s' }}>
                <img src={getImageUrl('images/lemon_soda.jpg')} alt="Lemon & Salt Soda" className="w-12 h-12 object-cover rounded-xl shadow-xs" />
                <div className="text-left pr-2">
                  <div className="text-xs font-extrabold text-slate-900">Lemon & Salt Soda</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Zesty & Salty Fizz</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-6 -right-6 z-30 glass-card p-3 rounded-2xl items-center gap-3 shadow-xl animate-float border border-white" style={{ animationDelay: '2s' }}>
                <img src={getImageUrl('images/orange_drink.png')} alt="Orange Drink" className="w-12 h-12 object-contain" />
                <div className="text-left pr-2">
                  <div className="text-xs font-extrabold text-slate-900">Orange Drink</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Citrus Refreshment</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
