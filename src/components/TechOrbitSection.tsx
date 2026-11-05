import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

const TECH_STACK = [
  { name: 'REACT 19', level: 'ORBITAL HIGH', cat: 'FRONTEND', desc: 'Dinamik bileşen mimarileri ve eşzamanlı işleme' },
  { name: 'TYPESCRIPT', level: 'STRICT MODE', cat: 'LANGUAGE', desc: 'Tip güvenli fütüristik kod tabanları' },
  { name: 'TAILWIND CSS', level: 'UTILITY CORE', cat: 'STYLING', desc: 'Piksel hassasiyetinde custom uzay tasarım sistemleri' },
  { name: 'WEBGL / THREE.JS', level: '3D REALITY', cat: 'GRAPHICS', desc: 'Zirve seviye parçacık ve tipografi rendering' },
  { name: 'FRAMER MOTION', level: 'KINETIC', cat: 'ANIMATION', desc: 'Akıcı mikro etkileşimler ve layout geçişleri' },
  { name: 'NODE.JS', level: 'BACKEND ORBIT', cat: 'RUNTIME', desc: 'Yüksek performanslı Asenkron mikro servisler' },
  { name: 'RUST / WASM', level: 'HYPERDRIVE', cat: 'SYSTEM', desc: 'Düşük seviye matematiksel uzay hesaplamaları' },
  { name: 'VITE / ESBUILD', level: 'LIGHTSPEED', cat: 'TOOLING', desc: 'Milisaniyelik modül derleme hızı' },
];

export const TechOrbitSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<typeof TECH_STACK[0]>(TECH_STACK[0]);

  return (
    <section id="telemetry" className="relative py-36 border-b border-white/10 overflow-hidden min-h-screen">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-slate-400" />
              <span>03 // TEKNOLOJİ VE TELEMETRİ MATRİSİ</span>
            </div>
            <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
              TELEMETRY <span className="text-stroke-brutal">MATRIX</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-500 tracking-wider">
            [ 4 SÜTUNLU BRUTALIST GRID TEKNOLOJİ HARİTASI ]
          </div>
        </div>

        {/* 4-Column Technical Matrix Grid (No Cards!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {TECH_STACK.map((tech) => {
            const isSelected = selectedTech.name === tech.name;

            return (
              <div
                key={tech.name}
                onClick={() => setSelectedTech(tech)}
                onMouseEnter={() => setSelectedTech(tech)}
                className={`p-8 border-r border-b border-white/10 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
                  [{tech.cat}]
                </div>
                <h3 className="font-syne font-extrabold text-3xl text-white uppercase">
                  {tech.name}
                </h3>
                <div className="font-mono text-xs text-slate-400 mt-2">
                  DURUM: {tech.level}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tech Inspector Display */}
        <div className="mt-12 p-8 border border-white/10 font-mono text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-slate-500 uppercase tracking-widest">SEÇİLİ TEKNOLOJİ DETAYI</div>
            <div className="font-syne text-3xl font-extrabold text-white mt-1">{selectedTech.name}</div>
            <p className="font-space text-slate-300 text-base font-light mt-2 max-w-3xl">
              {selectedTech.desc}
            </p>
          </div>
          <div className="px-4 py-2 border border-white/20 text-slate-200 uppercase tracking-wider">
            KATEGORİ: {selectedTech.cat}
          </div>
        </div>

      </div>
    </section>
  );
};
