import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { Building2, MapPin, Award, Truck, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'Core Categories', value: '4 Major', desc: 'Water, Soda, Drinks & Food' },
    { label: 'Water Bottle Sizes', value: '5 Options', desc: '250ml up to 2 Litres' },
    { label: 'Regional Focus', value: 'East Godavari', desc: 'Serving AP & Surrounding Areas' },
    { label: 'Supply Network', value: 'B2B & Retail', desc: 'Shops, Events & Bulk Buyers' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Dedicated to <span className="gradient-text-sky">Quality & Value</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold font-heading text-white">
                  SBVS ENTERPRISES
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Focused on providing quality food & beverage products designed for everyday refreshment, B2B retail distribution, and bulk requirements.
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-start gap-3 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-semibold">Location Headquarters</strong>
                      <span>{COMPANY_INFO.address.full}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <HeartHandshake className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Serving Retailers, Distributors, Caterers & Event Organizers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Description Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
            
            <p className="text-slate-800 font-medium leading-relaxed">
              <strong>SBVS ENTERPRISES</strong> is a food and beverage business focused on providing quality products for customers and businesses. From packaged drinking water and refreshing sodas to beverages and food products, we aim to deliver dependable quality and great value.
            </p>

            <p>
              Based in <strong>East Godavari, Andhra Pradesh</strong>, our facility is equipped to handle regional wholesale distribution and individual retail orders. We understand the vital importance of consistent taste, reliable supply chains, and flexible packaging sizes.
            </p>

            {/* B2B Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base font-heading">
                  <Award className="w-5 h-5 text-sky-600" /> Dependable Quality
                </div>
                <p className="text-xs text-slate-600">
                  Every product batch is carefully prepared and hygienically packaged for safety and taste.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base font-heading">
                  <Truck className="w-5 h-5 text-teal-600" /> Reliable Local Supply
                </div>
                <p className="text-xs text-slate-600">
                  Timely delivery for B2B shop owners, distributors, events, and bulk beverage buyers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base font-heading">
                  <Users className="w-5 h-5 text-sky-600" /> B2B & Retail Focus
                </div>
                <p className="text-xs text-slate-600">
                  Tailored solutions for restaurants, retail shops, caterers, and direct consumers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base font-heading">
                  <ShieldCheck className="w-5 h-5 text-teal-600" /> Great Regional Value
                </div>
                <p className="text-xs text-slate-600">
                  Fair pricing and convenient packaging sizes to suit every consumer need.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Statistics Cards Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center border border-slate-200/80 hover:border-sky-300 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
