import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  schema?: Record<string, any>;
}

export const useSEO = ({
  title,
  description,
  image = '/og-image.png',
  url,
  type = 'website',
  twitterCard = 'summary_large_image',
  schema
}: SEOProps) => {
  useEffect(() => {
    // Set Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://example.com');
    const fullImageUrl = image.startsWith('http') ? image : `${typeof window !== 'undefined' ? window.location.origin : 'https://example.com'}${image.startsWith('/') ? '' : '/'}${image}`;

    // Standard Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);

    // Open Graph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', fullImageUrl);

    // Twitter Card Meta Tags
    setMetaTag('property', 'twitter:card', twitterCard);
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:url', currentUrl);
    setMetaTag('property', 'twitter:image', fullImageUrl);

    // Safely inject JSON-LD schema
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, image, url, type, twitterCard, schema]);
};
