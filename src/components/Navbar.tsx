import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isPostDetail = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  if (location.pathname === '/links') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between mix-blend-difference pointer-events-auto">

      <div className="flex items-center gap-8">
        <Link to="/" aria-label="Go to Homepage" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <motion.img
            src="/bill.png"
            alt="Portfolio Logo"
            className="w-9 h-9 object-contain invert"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            whileHover={{ rotate: 15, scale: 1.1 }}
          />
          <motion.span
            className="font-outfit font-bold text-2xl tracking-wide text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Portfolio
          </motion.span>
        </Link>

        {isPostDetail && (
          <Link to="/blog" aria-label="Back to Blog Index" className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-inter text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Index</span>
          </Link>
        )}
      </div>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6 font-inter text-sm font-medium text-neutral-400">
          <Link
            to="/"
            aria-label="Home page"
            className={`transition-colors ${location.pathname === '/' ? 'text-white' : 'hover:text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            aria-label="Blog page"
            className={`transition-colors ${location.pathname.startsWith('/blog') ? 'text-white' : 'hover:text-white'}`}
          >
            Blog
          </Link>
          <Link
            to="/lab"
            aria-label="Lab page"
            className={`transition-colors ${location.pathname.startsWith('/lab') ? 'text-white' : 'hover:text-white'}`}
          >
            Lab
          </Link>
          <Link
            to="/links"
            aria-label="Links page"
            className={`transition-colors ${location.pathname === '/links' ? 'text-white' : 'hover:text-white'}`}
          >
            Links
          </Link>
        </nav>

        <motion.button
          onClick={toggleTheme}
          className="text-neutral-400 hover:text-white transition-colors p-2 rounded-full"
          aria-label="Toggle Theme"
          whileTap={{ rotate: 180, scale: 0.85 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.button>
      </div>
    </header>
  );
};
