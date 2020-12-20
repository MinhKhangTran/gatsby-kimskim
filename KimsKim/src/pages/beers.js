import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react"

const Beers = ({ data }) => {
  return (
    <Box p={5}>
      {data.allCoffee.nodes.map(coffee => {
        return (
          <Box>
            <Heading>{coffee.title}</Heading>
            <Text>{coffee.description}</Text>
            <UnorderedList>
              {coffee.ingredients.map((zutat, index) => {
                return <ListItem key={index}>{zutat}</ListItem>
              })}
            </UnorderedList>
          </Box>
        )
      })}
    </Box>
  )
}

export const query = graphql`
  query {
    allCoffee {
      nodes {
        description
        ingredients
        title
      }
    }
  }
`

export default Beers
