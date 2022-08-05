import Head from "next/head";
import config from "../../site.config.js";

function generateSchema(url, title) {
  return {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url,
    name: title,
  };
}

export default function Header({ title, coverImage }) {
  const { author, url, title: defaultTitle, description, keywords } = config;
  const pageTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
  const schema = generateSchema(url, title);
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="image" content={coverImage ?? "/social/opengraph.png"} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* Social Meta Tags */}
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/social/opengraph.png" />
      {/* <meta property="fb:app_id" content={config.fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/social/twitter.png" />
    </Head>
  );
}
