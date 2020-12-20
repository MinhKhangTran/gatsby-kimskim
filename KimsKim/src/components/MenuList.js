import React from "react"
import Img from "gatsby-image"
import { Box, Grid, Text } from "@chakra-ui/react"
import { Link } from "gatsby"

const SingleFood = ({ image, name, slug }) => {
  return (
    <Box position="relative" shadow="lg">
      <Link to={`/menu/${slug}`}>
        <Text
          position="absolute"
          left="50%"
          top="0"
          zIndex="docked"
          p={2}
          background="purple.200"
          transform="translateX(-50%)"
          fontSize="xl"
          fontWeight="bold"
        >
          {name}
        </Text>
      </Link>

      <Img fluid={image.asset.fluid} alt={name} />
    </Box>
  )
}

const MenuList = ({ foods }) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      gap={4}
    >
      {foods.map(food => {
        return <SingleFood key={food.id} {...food} />
      })}
    </Grid>
  )
}

export default MenuList
