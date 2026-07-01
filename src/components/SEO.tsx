import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const SEO: React.FC = () => {
  const { language, t } = useLanguage();

  const localizedName = language === 'zh' ? '金韬' : CONTACT_INFO.name;
  const alternateName = language === 'zh' ? CONTACT_INFO.name : '金韬';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: localizedName,
    alternateName,
    jobTitle: t.seo.jobTitle,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ithaca',
      addressRegion: 'NY',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Cornell University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of British Columbia',
      },
    ],
    knowsAbout: [
      'Data Analytics',
      'Business Intelligence',
      'Financial Modeling',
      'Python',
      'SQL',
      'System Engineering',
      'Market Research',
    ],
    url: 'https://taojin-portfolio.com',
    sameAs: [`https://${CONTACT_INFO.linkedin}`, `https://${CONTACT_INFO.github}`],
  };

  const htmlLang = language === 'zh' ? 'zh-CN' : 'en';
  const ogLocale = language === 'zh' ? 'zh_CN' : 'en_US';

  return (
    <Helmet htmlAttributes={{ lang: htmlLang }}>
      <title>{t.seo.title}</title>
      <meta name="description" content={t.seo.description} />
      <meta name="keywords" content={t.seo.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={t.seo.ogTitle} />
      <meta property="og:description" content={t.seo.ogDescription} />
      <meta property="og:image" content="https://picsum.photos/1200/630" />

      {/* JSON-LD for AI Search Engines (GEO) */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
