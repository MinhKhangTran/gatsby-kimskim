import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/react"

const Personal = ({ data }) => {
  const persons = data.allSanityPersonal.nodes
  return (
    <Box>
      {persons.map(person => {
        return (
          <Box key={person.id}>
            <Img fluid={person.image.asset.fluid} alt={person.name} />
          </Box>
        )
      })}
    </Box>
  )
}

export const query = graphql`
  {
    allSanityPersonal {
      nodes {
        id
        name
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      totalCount
    }
  }
`

export default Personal
