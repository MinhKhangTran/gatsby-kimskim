import React from "react"
import { graphql } from "gatsby"
import { Box, Text, Flex } from "@chakra-ui/react"
import CategoryFilters from "../components/CategoryFilters"
import MenuList from "../components/MenuList"

const Menu = ({ data }) => {
  const foods = data.foods.nodes
  // console.log(foods)
  return (
    <Box p={8}>
      <Flex justify="center">
        <Text fontSize="3xl" color="lila.500" fontWeight="bold">
          Unser Menü
        </Text>
      </Flex>
      <Box>
        <Text fontSize="xl" mt={2}>
          Unsere Kategorien
        </Text>
        <CategoryFilters />
      </Box>
      <Box>
        <MenuList foods={foods} />
      </Box>
    </Box>
  )
}

export const query = graphql`
  query($name: [String]) {
    foods: allSanityFood(
      filter: { category: { elemMatch: { name: { in: $name } } } }
    ) {
      nodes {
        id
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        name
        slug
      }
    }
  }
`

export default Menu
