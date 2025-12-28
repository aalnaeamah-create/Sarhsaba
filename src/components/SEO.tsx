import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export function SEO({
  title = 'مطعم صرح سبأ - أفضل مطعم يمني في السعودية | Sarh Saba Restaurant',
  description = 'مطعم صرح سبأ - سلسلة مطاعم يمنية متخصصة في تقديم المأكولات اليمنية الأصيلة في السعودية. نقدم أشهى المندي اليمني، الزربيان اليمني، المظبي، السلتة، الفحسة، المطبق والمعصوب بجودة عالية وأسعار مناسبة. Sarh Saba Restaurant - Authentic Yemeni cuisine in Saudi Arabia.',
  keywords = 'مطعم صرح سبأ, مطعم يمني, مطعم يمني في السعودية, أفضل مطعم يمني, مندي يمني, زربيان يمني, مظبي, سلتة, فحسة, مطبق, معصوب, مطاعم يمنية في الرياض, أكل يمني, طعام يمني أصيل, Sarh Saba Restaurant, Yemeni restaurant, Yemeni food in Saudi Arabia, authentic Yemeni cuisine, mandi, zurbian, madhbi, saltah',
  ogTitle,
  ogDescription,
  ogImage = 'https://lh3.googleusercontent.com/d/1QfoDJJ56q9qvULYwy5zD1RmNRpM_sFCC',
  ogUrl = 'https://sarhsaba.com',
  canonical
}: SEOProps) {
  useEffect(() => {
    // تحديث عنوان الصفحة
    document.title = title;

    // تحديث أو إضافة meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Sarh Saba Restaurant' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Arabic' },
      { name: 'revisit-after', content: '7 days' },
      
      // Open Graph Tags
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { property: 'og:site_name', content: 'مطعم صرح سبأ - Sarh Saba Restaurant' },
      { property: 'og:locale', content: 'ar_SA' },
      
      // Twitter Card Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      { name: 'twitter:image', content: ogImage },
      
      // Mobile Tags
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#b91c1c' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // إضافة canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // إضافة Schema.org structured data
    const schemaScript = document.getElementById('schema-org');
    if (!schemaScript) {
      const script = document.createElement('script');
      script.id = 'schema-org';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'مطعم صرح سبأ - Sarh Saba Restaurant',
        image: ogImage,
        '@id': ogUrl,
        url: ogUrl,
        telephone: '+966548445421',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'مدينة الرياض',
          addressLocality: 'الرياض',
          addressRegion: 'الرياض',
          addressCountry: 'SA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 24.7136,
          longitude: 46.6753
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          opens: '09:00',
          closes: '23:00'
        },
        servesCuisine: ['Yemeni', 'Middle Eastern', 'يمنية'],
        menu: `${ogUrl}/menu`,
        acceptsReservations: true,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '250'
        }
      });
      document.head.appendChild(script);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonical]);

  return null;
}
