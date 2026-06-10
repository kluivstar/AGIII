import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  canonicalPath = '', 
  image = 'https://ag3management.com/og-image.jpg',
  schema 
}) {
  const siteUrl = 'https://ag3management.com';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const siteName = 'AG3 Management LLC';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data Schema */}
      {schema && (
        <script type="application/ld+json">
          {typeof schema === 'string' ? schema : JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
