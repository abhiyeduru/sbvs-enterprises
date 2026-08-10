import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { ShieldCheck, MapPin, Phone, Mail, MessageSquare, ArrowUp, Droplet } from 'lucide-react';

export default function Footer({ onOpenEnquireModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Droplet className="w-6 h-6 fill-white/20" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading">
                  SBVS <span className="text-sky-400">ENTERPRISES</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-teal-400 block flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Food & Beverages
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Providing quality packaged drinking water, refreshing sodas, fruit drinks, and authentic food products for retail, wholesale B2B, and bulk event needs across East Godavari.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center border border-slate-800 transition"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.contact.phoneCallUrl}
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-600 text-white flex items-center justify-center border border-slate-800 transition"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'About Us', 'Products', 'Why Choose Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#products" className="hover:text-sky-400 transition-colors">
                  Packaged Drinking Water (250ml - 2L)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-400 transition-colors">
                  Soda (Lemon, Plain, Zeera)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-400 transition-colors">
                  Drinks (Lemon, Clear Lemon, Orange, Grape, Cola)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-400 transition-colors">
                  Food (Pickles, Powders, Snacks)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Contact Information
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-normal">
                  {COMPANY_INFO.address.full}
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <div className="space-y-1">
                    {COMPANY_INFO.contact.phones.map((phone, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <a href={phone.callUrl} className="hover:text-sky-400 transition-colors">
                          {phone.display}
                        </a>
                        <a
                          href={phone.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] text-emerald-400 hover:underline"
                        >
                          (WhatsApp)
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">
                  Email: {COMPANY_INFO.contact.emailPlaceholder}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-medium">
            © 2026 SBVS ENTERPRISES. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl border border-slate-800 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
