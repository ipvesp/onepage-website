import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const BlogList: React.FC = () => {
  useSEO({
    title: 'NOTES. | Portfolio',
    description: 'A collection of thoughts, technical deep-dives, and insights into modern digital creation.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "NOTES. | Portfolio Blog",
      "description": "A collection of thoughts, technical deep-dives, and insights into modern digital creation.",
      "url": "https://example.com/blog"
    }
  });

  return (
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-24 min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-24">

      {/* Sticky Header Column */}
      <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-outfit text-5xl md:text-[5rem] font-bold text-black dark:text-white tracking-tighter leading-none transition-colors duration-500"
        >
          NOTES.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="font-inter text-neutral-500 dark:text-neutral-400 mt-6 text-base md:text-lg max-w-sm transition-colors duration-500"
        >
          A collection of thoughts, technical deep-dives, and insights into modern digital creation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6"
        >
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40"
          >
            <Rss className="w-3.5 h-3.5 text-emerald-500" />
            <span>RSS Feed</span>
          </a>
        </motion.div>

        <div className="hidden lg:block mt-12 w-12 h-[1px] bg-neutral-300 dark:bg-neutral-800 transition-colors duration-500"></div>
      </div>

      {/* Posts Column */}
      <div className="lg:w-2/3 flex flex-col gap-12 mt-8 lg:mt-0">

        {/* Sample Post Item */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          <Link to="/blog/overthewire-bandit-ilk-7-seviye" aria-label="Read article: OverTheWire Bandit: İlk 7 Seviye Çözümü" className="block p-8 -mx-8 rounded-[2rem] hover:bg-neutral-100 dark:hover:bg-neutral-900/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <time className="font-inter text-xs text-neutral-500 tracking-widest uppercase">Jun 10, 2026</time>
              <div className="hidden md:flex items-center gap-2 text-xs font-inter text-neutral-400 dark:text-neutral-600 uppercase tracking-widest transition-colors duration-500">
                <span>Security</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                <span>Linux</span>
              </div>
            </div>

            <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors mb-4">
              OverTheWire Bandit: İlk 7 Seviye Çözümü
            </h2>

            <p className="font-inter text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-2xl text-sm md:text-base transition-colors duration-500">
              İlk 7 Bandit seviyesini kameranın önünde değil, offstream çözdüm — notlarım burada. Geri kalanını yayında yapacağım, gelirsen sevinirim.
            </p>

            <span className="inline-flex items-center gap-2 font-inter text-sm font-medium text-black dark:text-white group-hover:translate-x-2 transition-all">
              Read Article <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </Link>
        </motion.article>

      </div>
    </div>
  );
};
