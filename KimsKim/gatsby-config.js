import dotenv from "dotenv"

dotenv.config({ path: ".env" })

export default {
  siteMetadata: {
    title: "Kims Kim",
    description: "Kims Kim kimbo",
    author: "MKT",
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "nslq2l3o",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
