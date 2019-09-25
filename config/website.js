module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Adam Clark's Portfolio", // Navigation and Site Title
  titleAlt: 'Adam Clark', // Title for JSONLD
  description: 'this is my portfolio.  thanks for looking here ( ͡° ͜ʖ ͡°)',
  headline: "Adam Clark's Portfolio", // Headline for schema.org JSONLD
  url: 'https://adamclark.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'portfolio', // shortname for manifest. MUST be shorter than 12 characters
  author: 'adamclark64', // Author for schemaORGJSONLD
  themeColor: '#000',
  backgroundColor: '#e5e5e5',

  twitter: '@_aclark64', // Twitter Username
  facebook: 'gatsby-prismic', // Facebook Site Name
  googleAnalyticsID: 'UA-136906965-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
