import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Starfield } from './Starfield';
import { playSound } from '../utils/sound';

export const Layout: React.FC = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  // Play sound on page navigation
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    playSound();
  }, [location.pathname]);

  // Play sound when clicking any link, button, or interactive element
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('a, button, [role="button"], input[type="button"], input[type="submit"]');
      if (clickable) {
        playSound();
      }
    };

    window.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0f0f11] text-neutral-900 dark:text-neutral-200 font-inter relative transition-colors duration-500">
      <Navbar />

      <main className="relative z-10 bg-neutral-50 dark:bg-[#0f0f11] mb-[300px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-b-[40px] border-b border-neutral-200 dark:border-neutral-800 transition-all duration-500 overflow-hidden min-h-screen">
        <Starfield />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
