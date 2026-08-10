import React, { useState, useEffect } from 'react';
import { Droplet, ShieldCheck, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600); // match CSS fade-out duration
          }, 300);
          return 100;
        }
        // Smooth progressive increments
        const next = prev + Math.floor(Math.random() * 15) + 10;
        return next > 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4 transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-sm w-full space-y-8">
        
        {/* Animated Brand Logo Icon */}
        <div className="relative inline-block">
          
          {/* Ripple Pulse Background Circles */}
          <div className="absolute inset-0 rounded-3xl bg-sky-500/30 animate-ping opacity-75" />
          
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-sky-500 via-teal-500 to-sky-600 flex items-center justify-center text-white shadow-2xl shadow-sky-500/40 relative z-10 mx-auto">
            <Droplet className="w-10 h-10 sm:w-12 sm:h-12 fill-white/20 animate-bounce-short" />
          </div>

          <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 text-teal-400 p-1.5 rounded-full shadow-md z-20">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Company Title & Category */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            SBVS <span className="text-sky-400">ENTERPRISES</span>
          </h1>
          <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" /> Food & Beverages
          </p>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-slate-300 animate-pulse">
          Refreshing Products. Trusted Quality.
        </p>

        {/* Loading Progress Bar Container */}
        <div className="space-y-2">
          
          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-teal-400 to-sky-400 rounded-full transition-all duration-300 ease-out shadow-md shadow-sky-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
            <span>Loading experience...</span>
            <span className="text-sky-400">{progress}%</span>
          </div>

        </div>

        {/* Location Badge */}
        <div className="text-[11px] text-slate-500 font-medium pt-4">
          East Godavari, Andhra Pradesh
        </div>

      </div>
    </div>
  );
}
