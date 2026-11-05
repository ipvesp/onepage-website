import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Links: React.FC = () => {
  useSEO({
    title: 'Links | Portfolio',
    description: 'Explore the portfolio, notes, experiments, and source code.',
  });

  return (
    <section className="min-h-screen max-w-3xl mx-auto px-6 pt-32 pb-24 text-neutral-900 dark:text-white">
      <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Explore</p>
      <h1 className="font-outfit text-5xl sm:text-7xl font-bold tracking-tighter mt-4 mb-10">Links.</h1>
      <div className="grid gap-4 font-inter">
        <Link to="/" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 p-5 hover:border-emerald-500 transition-colors">Home →</Link>
        <Link to="/blog" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 p-5 hover:border-emerald-500 transition-colors">Notes →</Link>
        <Link to="/lab" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 p-5 hover:border-emerald-500 transition-colors">Lab →</Link>
        <a href="https://github.com/ipvesp/onepage-website" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 p-5 hover:border-emerald-500 transition-colors">Source code ↗</a>
      </div>
    </section>
  );
};
