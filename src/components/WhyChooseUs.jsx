import React from 'react';
import { ShieldCheck, Layers, Truck, HeartHandshake, Maximize2, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Quality Products',
      icon: <ShieldCheck className="w-7 h-7 text-sky-600" />,
      desc: 'Our packaged drinking water, sodas, beverages, and food items are prepared under hygienic standards to ensure consistent freshness and taste.',
      color: 'border-sky-200 bg-sky-50/40'
    },
    {
      title: 'Wide Product Range',
      icon: <Layers className="w-7 h-7 text-teal-600" />,
      desc: 'From daily drinking water and sparkling sodas to fruit-flavored drinks, traditional pickles, spice powders, and savories under one roof.',
      color: 'border-teal-200 bg-teal-50/40'
    },
    {
      title: 'Reliable Supply',
      icon: <Truck className="w-7 h-7 text-blue-600" />,
      desc: 'Dependable logistics and steady supply schedules for local retail shopkeepers, distributors, bulk event orders, and B2B clients.',
      color: 'border-blue-200 bg-blue-50/40'
    },
    {
      title: 'Customer Focused',
      icon: <HeartHandshake className="w-7 h-7 text-emerald-600" />,
      desc: 'We value long-term B2B partnerships and customer satisfaction with clear communication, quick enquiry turnaround, and prompt service.',
      color: 'border-emerald-200 bg-emerald-50/40'
    },
    {
      title: 'Convenient Product Sizes',
      icon: <Maximize2 className="w-7 h-7 text-indigo-600" />,
      desc: 'Flexibility in packaging ranging from 250ml mini event bottles to 2 Litre family packs, designed to match every requirement.',
      color: 'border-indigo-200 bg-indigo-50/40'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Our Strengths
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Why Choose <span className="gradient-text-sky">SBVS ENTERPRISES?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We combine high product standards with dependable regional supply to serve businesses, shopkeepers, and consumers.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border ${feature.color} backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 space-y-4 group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}

          {/* Bonus Contact Highlight Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-sky-950 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold text-sky-400 tracking-wider">
                B2B Bulk Requirements
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Looking for Wholesale or Distribution?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our East Godavari team to discuss bulk rates, distribution channels, and event catering supplies.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-2xl text-xs font-bold shadow-md transition"
            >
              Get In Touch Today
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
