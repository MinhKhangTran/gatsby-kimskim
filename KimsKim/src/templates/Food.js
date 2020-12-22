import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import { formatPrice } from "../utils/formatPrice"

const Food = ({ data }) => {
  const food = data.sanityFood
  // console.log(food)
  return (
    <Box w={{ base: "90%" }} mx={{ base: "auto" }}>
      <Flex justify="center" mt={6} wrap>
        <Img fixed={food.image.asset.fixed} alt={food.name} />
        <Box ml={{ base: "2", md: "4" }} fontSize="lg">
          <Text fontSize="2xl" color="purple.400">
            {food.name}
          </Text>
          <Text fontSize="xl">{formatPrice(food.price)}</Text>
          {food.category.map(cat => {
            return (
              <Badge
                key={cat.id}
                fontSize="xl"
                colorScheme={
                  cat.name === "Sauer"
                    ? "teal"
                    : cat.name === "Scharf"
                    ? "red"
                    : cat.name === "Süß"
                    ? "purple"
                    : cat.name === "Salzig"
                    ? "blue"
                    : ""
                }
                mr={2}
              >
                {cat.name}
              </Badge>
            )
          })}
        </Box>
      </Flex>
    </Box>
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityFood(slug: { eq: $slug }) {
      id
      category {
        name
      }
      image {
        asset {
          fixed(height: 300, width: 300) {
            ...GatsbySanityImageFixed
          }
        }
      }
      name
      price
      slug
    }
  }
`

export default Food
