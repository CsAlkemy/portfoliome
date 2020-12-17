module.exports = {
  siteMetadata: {
    title: "Alkemy Hossain",
    author: "Alkemy Hossain",
    imageUrl: "https://i.imgur.com/Vz81GEl.png",
    description:
      "Hi, I am Alkemy Hossain working in software industry for couple of years. I build build this website as my portfolio to write blog or showcase my projects ",
    keywords: ` Alkemy Hossain, Alkemy, alkemy, Hossain, hossain, iubat, IUBAT, dev heros, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    twitter: "https://twitter.com/dev_heros",
    github: `https://github.com/csalkemy`,
    medium: "https://medium.com/@alkemy",
    gatsby: "https://www.gatsbyjs.org/",
    bulma: "https://bulma.io/",
    siteUrl: `https://alkemyme.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        orientation: "portrait",
      },
    },

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alkemy Hossain`,
        short_name: `Alkemy`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icons.png`,
        crossOrigin: `use-credentials`,
      },
    },

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
        },
      },
    },
  ],
};
