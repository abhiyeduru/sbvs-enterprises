import React from 'react';
import { UserCheck, Award, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';
import { getImageUrl } from '../data/products';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Ganesh Chowdary',
      role: 'Chairman & Founder',
      image: getImageUrl('images/ganesh_chowdary.png'),
      badge: 'Founder & Visionary',
      bio: 'Envisioned and established SBVS ENTERPRISES to deliver high-quality, pure packaged drinking water, sodas, and authentic food products across East Godavari and regional Andhra Pradesh.',
      highlights: ['Brand Foundation', 'Operational Excellence', 'Quality Commitment']
    },
    {
      name: 'Anu',
      role: 'Director – Marketing & Business Development',
      image: getImageUrl('images/anu_director.png'),
      badge: 'Strategic Growth',
      bio: 'Drives market expansion, B2B distributor networks, merchant partnerships, and strategic business development to strengthen SBVS ENTERPRISES as a trusted FMCG brand.',
      highlights: ['B2B & Retail Growth', 'Distributor Relations', 'Market Expansion']
    }
  ];

  return (
    <section id="leadership" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4 text-sky-600" />
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Meet Our <span className="gradient-text-sky">Leadership Team</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Guiding SBVS ENTERPRISES with commitment to quality, business integrity, and regional growth.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/90 hover:border-sky-300 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between group"
            >
              
              {/* Leader Photo Box */}
              <div className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-sky-600/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  {leader.badge}
                </div>

                {/* Bottom Overlay Name */}
                <div className="absolute bottom-4 left-6 right-6 text-white text-left space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white drop-shadow-md">
                    {leader.name}
                  </h3>
                  <div className="text-sm font-bold text-sky-300 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-sky-400" />
                    <span>{leader.role}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>

                {/* Key Focus Highlights */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Leadership Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-100 px-2.5 py-1 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
