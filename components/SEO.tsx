import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';

const SEO: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": CONTACT_INFO.name,
    "jobTitle": "Business Analyst & Data Strategist",
    "telephone": CONTACT_INFO.phone,
    "email": CONTACT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ithaca",
      "addressRegion": "NY"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Cornell University"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of British Columbia"
      }
    ],
    "knowsAbout": [
      "Data Analytics",
      "Business Intelligence",
      "Financial Modeling",
      "Python",
      "SQL",
      "System Engineering",
      "Market Research"
    ],
    "url": "https://taojin-portfolio.com", // Example URL
    "sameAs": [
      `https://${CONTACT_INFO.linkedin}`,
      `https://${CONTACT_INFO.github}`
    ]
  };

  return (
    <Helmet>
      <title>Tao (Tony) Jin | Business & Data Analyst Portfolio</title>
      <meta name="description" content="Portfolio of Tao (Tony) Jin, a Cornell Systems Engineering Master's student specializing in Data Analytics, Financial Modeling, and Strategic Optimization." />
      <meta name="keywords" content="Data Analyst, Business Analyst, Python, SQL, Tableau, Financial Modeling, Cornell, UBC" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:title" content="Tao (Tony) Jin | Data Driven Strategist" />
      <meta property="og:description" content="Driving business growth through data storytelling. 9% risk reduction & 12% conversion boost track record." />
      <meta property="og:image" content="https://picsum.photos/1200/630" /> 
      
      {/* JSON-LD for AI Search Engines (GEO) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;