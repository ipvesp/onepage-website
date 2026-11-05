import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-start">

        <div className="space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="font-outfit text-5xl sm:text-6xl md:text-[7rem] font-bold leading-[0.9] tracking-tighter transition-colors duration-500">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-cyan-300">Developer</span>, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 dark:from-orange-400 dark:to-yellow-300">Researcher</span> <span className="text-neutral-300 dark:text-neutral-600 font-light">&</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-400 dark:to-fuchsia-400">Creator.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed transition-colors duration-500"
          >
            A one-page portfolio template for showcasing projects, experiments, and writing with a focus on clean design and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-12 font-inter text-sm pt-4"
          >
            <a href="https://github.com/ipvesp" target="_blank" rel="noreferrer" aria-label="Visit Portfolio on GitHub" className="group flex items-center gap-3 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
              <span className="text-black dark:text-white font-medium transition-colors duration-500">GitHub</span>
              <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700 group-hover:bg-black dark:group-hover:bg-white group-hover:w-12 transition-all"></span>
              <span>@ipvesp</span>
            </a>

          </motion.div>

        </div>
      </div>

    </section>
  );
};
