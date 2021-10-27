module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ackee tracker issue",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-ackee-tracker',
      options: {
        // Domain ID found when adding a domain in the admin panel.
        domainId: process.env.ACKEE_DOMAIN_ID,
        // URL to Server eg: "https://analytics.test.com".
        server: process.env.ACKEE_SERVER,
        // Disabled analytic tracking when running locally
        ignoreLocalhost: false,
        // Enable or disable the tracking of your own visits (as identified by your login to the Ackee dashboard).
        ignoreOwnVisits: false,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: true,
      },
    }
  ],
};
