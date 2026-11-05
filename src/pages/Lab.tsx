import React from 'react';

export const Lab: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] dark:bg-[#050505] flex flex-col font-outfit text-neutral-900 dark:text-neutral-100 relative transition-colors duration-700">

      {/* Subtle Geometric Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(150,150,150,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(150,150,150,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      {/* Crosshairs on Grid Intersections (Decorative) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none z-0 opacity-20 hidden md:block">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-900 dark:bg-white"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-neutral-900 dark:bg-white"></div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 relative z-10">

        {/* Project 1: ORION (Spans 2 columns on lg) */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 p-8 md:p-16 flex flex-col justify-between group cursor-not-allowed hover:bg-neutral-200/20 dark:hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">

          <div className="flex justify-between items-start">
            <span className="text-xs font-mono tracking-widest text-neutral-400">01</span>
          </div>

          <div className="mt-24 md:mt-32">
            <h1 className="text-6xl md:text-8xl lg:text-[130px] font-light leading-none tracking-tight uppercase group-hover:tracking-[0.1em] transition-all duration-700 ease-out">
              Orion
            </h1>
            <p className="mt-8 text-neutral-500 max-w-md font-light text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              Core architecture blueprint. Currently locked under active development protocol. Initialization sequence halted pending authorization.
            </p>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neutral-300 dark:border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-6"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neutral-300 dark:border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-6"></div>
        </div>

        {/* Right Side Stack: NETH & ASTRA */}
        <div className="flex flex-col lg:col-span-1">

          {/* Project 2: NETH */}
          <div className="flex-1 border-b border-neutral-200 dark:border-neutral-800 p-8 md:p-12 flex flex-col justify-between group cursor-not-allowed hover:bg-neutral-200/20 dark:hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono tracking-widest text-neutral-400">02</span>
            </div>

            <div className="mt-16 lg:mt-24">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight uppercase group-hover:tracking-[0.1em] transition-all duration-700 ease-out">
                Neth
              </h1>
            </div>

            {/* Decorative Brackets */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neutral-300 dark:border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-6"></div>
          </div>

          {/* Project 3: ASTRA */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-between group cursor-not-allowed hover:bg-neutral-200/20 dark:hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono tracking-widest text-neutral-400">03</span>
            </div>

            <div className="mt-16 lg:mt-24">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight uppercase group-hover:tracking-[0.1em] transition-all duration-700 ease-out">
                Astra
              </h1>
            </div>

            {/* Decorative Brackets */}
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neutral-300 dark:border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-6"></div>
          </div>

        </div>

      </div>

    </div>
  );
};
