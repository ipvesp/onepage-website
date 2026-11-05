import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[300px] z-0 bg-neutral-100 dark:bg-[#0c0c0c] transition-colors duration-500 flex flex-col items-center justify-center overflow-hidden">

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="font-outfit font-black text-[25vw] leading-none text-neutral-200 dark:text-neutral-900/50 whitespace-nowrap transition-colors duration-500">
          Portfolio
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 mt-20">
        <div className="flex items-center gap-8 text-sm font-inter text-neutral-500">
          <a href="https://github.com/ipvesp" target="_blank" rel="noopener noreferrer" aria-label="Visit Portfolio GitHub Profile" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
        </div>
        <p className="font-inter text-xs text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
