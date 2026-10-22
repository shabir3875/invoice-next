import React from 'react';
import { Helmet } from 'react-helmet';

// Social + canonical tags only. The page's own <Helmet> must keep a literal
// <title> and <meta name="description">, because the llms.txt build step reads
// those two tags straight out of the page file's source.
const Seo = ({
    title,
    description,
    image = 'https://invonxt.com/og-image.png',
    imageAlt = 'Invoice Next — Simple online invoicing software dashboard for freelancers and small businesses',
    url = 'https://invonxt.com/',
    siteName = 'Invoice Next',
    locale = 'en_US',
    type = 'website',
    robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}) => {
    const canonical = url || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://invonxt.com/');

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            <meta name="robots" content={robots} />
            <meta name="author" content={siteName || 'Invoice Next'} />
            <meta property="article:published_time" content="2026-10-01T00:00:00Z" />
            <meta property="article:modified_time" content="2026-10-22T00:00:00Z" />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={locale} />
            {siteName && <meta property="og:site_name" content={siteName} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            {image && <meta property="og:image:width" content="1200" />}
            {image && <meta property="og:image:height" content="630" />}
            {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
            <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:site" content="@invoicenext" />
            <meta name="twitter:creator" content="@invoicenext" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}
            {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
        </Helmet>
    );
}

export default Seo;

export { Seo };
