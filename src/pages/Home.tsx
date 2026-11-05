import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { useSEO } from '../hooks/useSEO';

export const Home: React.FC = () => {
  useSEO({
    title: 'Portfolio | Developer, Researcher & Creator',
    description: 'A one-page portfolio template for projects, experiments, and writing.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Portfolio",
      "url": "https://example.com",
      "sameAs": ["https://github.com/ipvesp/onepage-website"]
    }
  });

  return (
    <>
      <HeroSection />
    </>
  );
};
