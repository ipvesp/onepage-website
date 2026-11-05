import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Target } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  subTitle: string;
  category: string;
  year: string;
  coordinates: string;
  description: string;
  tech: string[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 'nebula-os',
    number: '01',
    title: 'NEBULA // OS',
    subTitle: 'KINETIC WEBGL SPACE PLATFORM',
    category: 'WEBGL / THREE.JS / TYPESCRIPT',
    year: '2026',
    coordinates: 'RA 05h 35m // DEC -05°23\'',
    description: 'Sıfır yerçekiminde 3D gezegen simülasyonları ve kinetik uzay tipografisi sunan yeni nesil WebGL platformu. Derin uzay sinyallerini gerçek zamanlı ses ve tipografi ile görselleştirir.',
    tech: ['React', 'TypeScript', 'Three.js', 'WebGL', 'TailwindCSS'],
    link: 'https://github.com',
  },
  {
    id: 'quantum-synthesizer',
    number: '02',
    title: 'EVENT HORIZON',
    subTitle: 'BLACK HOLE DATA VISUALIZER',
    category: 'SYNTHESIS / KINETIC UI',
    year: '2025',
    coordinates: 'RA 19h 59m // DEC +35°12\'',
    description: 'Kara delik kütle çekim merceklenmesini tipografik eğrilmeler ile gösteren etkileşimli veri görselleştirme sistemi.',
    tech: ['React', 'TypeScript', 'Canvas API', 'Web Audio API', 'Framer Motion'],
    link: 'https://github.com',
  },
  {
    id: 'pulsar-matrix',
    number: '03',
    title: 'PULSAR MATRIX',
    subTitle: 'TYPOGRAPHIC SIGNAL ENGINE',
    category: 'EXPERIMENTAL / TYPOGRAPHY',
    year: '2025',
    coordinates: 'RA 17h 45m // DEC -29°00\'',
    description: 'Nötron yıldızlarının atım frekanslarına senkronize çalışan, fütüristik monospaced tipografi üreteci ve canlı sinyal arayüzü.',
    tech: ['TypeScript', 'WebGL Shaders', 'TailwindCSS', 'RxJS'],
    link: 'https://github.com',
  },
  {
    id: 'orbital-vector',
    number: '04',
    title: 'ORBITAL VECTOR',
    subTitle: 'DEEP SPACE TELEMETRY ENGINE',
    category: 'TELEMETRY / RUST & WASM',
    year: '2024',
    coordinates: 'RA 12h 49m // DEC -27°19\'',
    description: 'Yörünge uydularından gelen telemetri verilerini milisaniye seviyesinde işleyen Rust/WASM destekli tipografik komut satırı arayüzü.',
    tech: ['Rust', 'WebAssembly', 'TypeScript', 'TailwindCSS'],
    link: 'https://github.com',
  },
];

export const WorksSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);

  return (
    <section id="catalogue" className="relative py-36 px-8 md:px-16 lg:px-20 border-b border-white/10 min-h-screen">
      <div className="max-w-[100rem] mx-auto">

        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2 flex items-center gap-2">
              <Target className="w-3.5 h-3.5 text-slate-300" />
              <span>01 // SAMPLE CONCEPT STUDIES</span>
            </div>
            <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
              CONCEPT <span className="text-stroke-brutal">CATALOGUE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-500 tracking-wider">
            [ EXAMPLE CONTENT // REPLACE BEFORE PUBLISHING ]
          </div>
        </div>

        {/* Split-Screen Layout (No Cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Project Index List */}
          <div className="lg:col-span-6 divide-y divide-white/10">
            {PROJECTS.map((project) => {
              const isSelected = selectedProject.id === project.id;

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setSelectedProject(project)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isSelected ? 'pl-4 border-l-2 border-white' : ''
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-slate-600 group-hover:text-slate-200">
                        {project.number}//
                      </span>
                      <div>
                        <h3 className={`font-syne font-extrabold text-3xl sm:text-5xl uppercase tracking-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                        }`}>
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-slate-500 mt-1">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-white translate-x-1 -translate-y-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Telemetry Inspector */}
          <div className="lg:col-span-6 border-l border-white/10 lg:pl-12 sticky top-32 space-y-8 font-mono">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Inspector Header */}
                <div className="border-b border-white/10 pb-6">
                  <div className="text-xs text-slate-500 uppercase tracking-widest">
                    SPECS // {selectedProject.number} // {selectedProject.year}
                  </div>
                  <h3 className="font-syne font-extrabold text-5xl text-white uppercase mt-2">
                    {selectedProject.title}
                  </h3>
                  <div className="text-sm font-space text-slate-300 font-light mt-1">
                    {selectedProject.subTitle}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">GÖREV METNİ</div>
                  <p className="font-space text-xl text-slate-200 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Coordinates & Tech Grid */}
                <div className="grid grid-cols-2 gap-6 border-y border-white/10 py-6 text-xs">
                  <div>
                    <div className="text-slate-500 uppercase tracking-widest mb-1">KOORDINATLAR</div>
                    <div className="text-slate-300">{selectedProject.coordinates}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 uppercase tracking-widest mb-1">KATEGORİ</div>
                    <div className="text-slate-300">{selectedProject.category}</div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">KULLANILAN MİMARİ</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 border border-white/15 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link Button */}
                <div className="pt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-space font-extrabold text-xs tracking-widest uppercase hover:bg-slate-200 transition-colors"
                  >
                    <span>CANLI PROJEYİ İNCELE</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
