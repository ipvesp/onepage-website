import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface Epoch {
  epoch: string;
  role: string;
  station: string;
  period: string;
  coordinates: string;
  summary: string;
  achievements: string[];
}

const EPOCHS: Epoch[] = [
  {
    epoch: 'EPOCH // 04',
    role: 'LEAD SPACE FRONTEND ARCHITECT',
    station: 'QUANTUM GRAPHICS LABS',
    period: '2024 — GÜNÜMÜZ',
    coordinates: 'STATION 01 // ISTANBUL',
    summary: 'Yüksek hızlı 3D uzay arayüzleri, WebGL tipografik rendering motorları ve mikro-önuç mimarileri tasarlama.',
    achievements: [
      'Gecikmesiz WebGL Tipografi Rendering Motorunun Geliştirilmesi',
      'React & TypeScript tabanlı 0G etkileşim kütüphanesi',
      '%40 daha hızlı DOM Canvas senkronizasyonu'
    ]
  },
  {
    epoch: 'EPOCH // 03',
    role: 'SENIOR INTERACTIVE DEVELOPER',
    station: 'ORBITAL DIGITAL STUDIO',
    period: '2023 — 2024',
    coordinates: 'STATION 02 // BERLIN (REMOTE)',
    summary: 'Uluslararası markalar için deneysel tipografi, Canvas parçacık simülasyonları ve Tailwind CSS sistemleri inşa edildi.',
    achievements: [
      'Awwwards ve FWA ödüllü 3 kinetik tipografi projesi',
      'Tailwind CSS v3 özel uzay tasarım sistemi mimarisi'
    ]
  },
  {
    epoch: 'EPOCH // 02',
    role: 'CREATIVE CODE ENGINEER',
    station: 'NEBULA MEDIA TECH',
    period: '2021 — 2023',
    coordinates: 'STATION 03 // REMOTE',
    summary: 'Kullanıcı etkileşimli tipografik mikro siteler ve WebGL/Three.js deneyimleri geliştirildi.',
    achievements: [
      '10+ Özelleştirilmiş 3D Web Deneyimi',
      'TypeScript tip güvenli animasyon kontrolörü'
    ]
  }
];

export const ChronologySection: React.FC = () => {
  return (
    <section id="epoch" className="relative py-36 px-8 md:px-16 lg:px-20 border-b border-white/10 min-h-screen">
      <div className="max-w-[100rem] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>02 // ZAMAN DİZİNİ VE KRONOLOJİ</span>
            </div>
            <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
              EVRENSEL <span className="text-stroke-brutal">KRONOLOJİ</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-500 tracking-wider">
            [ BRUTALIST GRID TIMELINE // ZERO-G EPOCHS ]
          </div>
        </div>

        {/* 3 Column Grid Epoch Timeline (No Cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
          {EPOCHS.map((epoch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 sm:p-10 space-y-6"
            >
              <div className="flex justify-between font-mono text-xs text-slate-400 border-b border-white/10 pb-4">
                <span className="text-white font-bold">{epoch.epoch}</span>
                <span>{epoch.period}</span>
              </div>

              <div>
                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {epoch.role}
                </h3>
                <div className="font-mono text-xs text-slate-400 mt-1">
                  @ {epoch.station}
                </div>
              </div>

              <p className="font-space text-slate-300 font-light text-base leading-relaxed">
                {epoch.summary}
              </p>

              <div className="border-t border-white/10 pt-4 font-mono text-xs space-y-2 text-slate-400">
                {epoch.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-slate-200">►</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
