import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Text, Heading } from "@chakra-ui/react"

const SinglePersonal = ({ data }) => {
  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap={4}
        w={{ base: "90%", md: "75%" }}
        mx="auto"
        mt={4}
      >
        <Img
          fluid={data.sanityPersonal.image.asset.fluid}
          alt={data.sanityPersonal.name}
        />
        <Box>
          <Heading>{data.sanityPersonal.name}</Heading>
          <Text>{data.sanityPersonal.description}</Text>
        </Box>
      </Grid>
    </Box>
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityPersonal(slug: { current: { eq: $slug } }) {
      description
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      name
      slug {
        current
      }
    }
  }
`

export default SinglePersonal
