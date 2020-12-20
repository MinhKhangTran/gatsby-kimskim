import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Text } from "@chakra-ui/react"
import Pagination from "../components/Pagination"

const Personal = ({ data, pageContext }) => {
  const persons = data.persons.nodes
  return (
    <Box>
      <Pagination
        totalCount={data.persons.totalCount}
        pageSize={parseInt(process.env.GATSBY_PER_PAGE)}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base={"/personal"}
      />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap={4}
        w={{ base: "90%", md: "75%" }}
        mx="auto"
        my={6}
      >
        {persons.map(person => {
          return (
            <Box key={person.id} position="relative">
              <Box textAlign="center">
                <Img fixed={person.image.asset.fixed} alt={person.name} />
              </Box>
              <Link to={`/personal/${person.slug.current}`}>
                <Text
                  bg="blue.500"
                  fontSize="2xl"
                  px={1}
                  color="blue.100"
                  textAlign="center"
                  display="inline"
                  position="absolute"
                  bottom="0"
                  left="50%"
                  transform="translateX(-50%) rotate(-2deg)"
                >
                  {person.name}
                </Text>
              </Link>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    persons: allSanityPersonal(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        slug {
          current
        }
        image {
          asset {
            fixed(width: 250, height: 250) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

export default Personal
