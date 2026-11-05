import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface BlogPostWrapperProps {
  children: React.ReactNode;
  title: string;
  date: string;
  readTime?: string;
  tags?: string[];
  ogImage?: string;
}

export const BlogPostWrapper: React.FC<BlogPostWrapperProps> = ({
  children,
  title,
  date,
  readTime = '5 dk okuma',
  tags = ['Security', 'Linux', 'OverTheWire'],
  ogImage = '/og-bandit.png'
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://example.com';

  useSEO({
    title: `${title} | Portfolio`,
    description: `${title} - Published on ${date}. Notes, solutions and writeups by Portfolio.`,
    image: ogImage,
    type: 'article',
    url: shareUrl,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "datePublished": date,
      "author": {
        "@type": "Person",
        "name": "Portfolio"
      }
    }
  });

  return (
    <div className="relative z-10 w-full min-h-screen pt-28 pb-32">
      {/* Scroll Progress Bar at Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <article className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Article Header Card */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 pb-10 border-b border-neutral-200 dark:border-neutral-800/80 mb-12"
        >
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border border-neutral-300/40 dark:border-neutral-700/50 uppercase tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-[1.15]">
            {title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-inter text-neutral-500 dark:text-neutral-400 pt-2">
            <div className="flex items-center gap-2.5">
              <img
                src="https://github.com/ipvesp.png"
                alt="Portfolio"
                className="w-7 h-7 rounded-full object-cover border border-neutral-300 dark:border-neutral-700 flex-shrink-0"
              />
              <span className="font-semibold text-neutral-900 dark:text-white">Portfolio</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <time>{date}</time>
            </div>

            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{readTime}</span>
            </div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="prose prose-neutral dark:prose-invert max-w-none prose-lg
            prose-p:font-inter prose-p:leading-relaxed prose-p:text-neutral-700 dark:prose-p:text-neutral-300
            prose-headings:font-outfit prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-white prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-neutral-200 dark:prose-h2:border-neutral-800/60
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-strong:font-semibold prose-strong:text-neutral-900 dark:prose-strong:text-white
            prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-img:rounded-2xl prose-img:border prose-img:border-neutral-200 dark:prose-img:border-neutral-800
            prose-blockquote:border-l-2 prose-blockquote:border-emerald-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400 prose-blockquote:bg-neutral-100/50 dark:prose-blockquote:bg-neutral-900/30 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
            prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0
            prose-code:bg-neutral-200/60 dark:prose-code:bg-neutral-800/60 prose-code:text-neutral-900 dark:prose-code:text-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-sm prose-code:font-normal
            prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:font-inter
          "
        >
          {children}
        </motion.main>

        {/* Footer / Author Card & Share Buttons */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          {/* Left: Author Profile */}
          <div className="flex items-center gap-4">
            <img
              src="https://github.com/ipvesp.png"
              alt="Portfolio"
              className="w-12 h-12 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-800 flex-shrink-0"
            />
            <div>
              <h3 className="font-outfit font-semibold text-neutral-900 dark:text-white text-base">Portfolio</h3>
              <p className="font-inter text-xs text-neutral-500 dark:text-neutral-400">Developer & Researcher</p>
            </div>
          </div>

          {/* Right: Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-inter text-neutral-400 uppercase tracking-widest mr-2 hidden sm:inline">Share:</span>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-neutral-800"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-neutral-800"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-neutral-800"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
              </svg>
            </a>

            {/* Threads */}
            <a
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Threads"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-neutral-800"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.186 24.004c-3.14 0-5.836-1.127-7.8-3.259C2.476 18.665 1.5 15.753 1.5 12.302c0-3.486.993-6.425 2.955-8.736C6.427 1.42 9.13 0 12.282 0c3.109 0 5.728 1.306 7.575 3.778l-2.604 1.834c-1.28-1.713-3.124-2.628-5.321-2.628-2.312 0-4.3.939-5.748 2.716C4.802 7.37 4.1 9.684 4.1 12.302c0 2.66.696 4.966 2.072 6.671 1.442 1.776 3.42 2.721 5.734 2.721 2.502 0 4.384-.969 5.6-2.88.854-1.341 1.25-3.082 1.144-5.042h-6.195v-2.791h8.922c.16.892.242 1.84.242 2.82 0 3.235-.91 5.952-2.632 8.066C17.262 23.018 14.887 24 12.186 24z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200 dark:border-neutral-800"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.44 4.426-9.864 9.87-9.864 2.636 0 5.114 1.028 6.974 2.889a9.82 9.82 0 012.876 6.974c-.001 5.442-4.427 9.865-9.868 9.865" />
              </svg>
            </a>
          </div>
        </motion.footer>
      </article>
    </div>
  );
};
