import React from 'react';
import { Target } from 'lucide-react';

export const CosmicManifesto: React.FC = () => {
  return (
    <section className="relative py-40 px-8 md:px-16 lg:px-20 border-b border-white/10 overflow-hidden bg-grid-lines">
      <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left vertical sidebar tag */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center font-mono text-xs text-slate-500 tracking-widest uppercase border-r border-white/10 pr-6 h-full">
          <span className="text-vertical tracking-widest text-slate-400">OBSERVATORY MANIFESTO // 2026</span>
        </div>

        {/* Main Brutalist Manifesto */}
        <div className="lg:col-span-11 space-y-12">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400 tracking-widest uppercase">
            <Target className="w-4 h-4 text-slate-400" />
            <span>04 // OBSERVATORY KODEKS BİLDİRİSİ</span>
          </div>

          <blockquote className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-white">
            "TİPOGRAFİ SADECE OKUNMAK İÇİN DEĞİLDİR; <span className="text-stroke-brutal">YERÇEKİMSİZ</span> EVRENDE BİR HAREKET, BİR IŞIK VE BİR KÜTLEDİR."
          </blockquote>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <div>ORBITAL REF: 0x9948F // DEEP SPACE CREATIVE PHILOSOPHY</div>
            <div>BRUTALIST OBSERVATORY ENGINE</div>
          </div>
        </div>

      </div>
    </section>
  );
};
