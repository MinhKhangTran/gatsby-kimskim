import { Flex, Text } from "@chakra-ui/react"
import React from "react"

const Footer = () => {
  return (
    <Flex justify="center">
      <Text fontSize="xl" color="lila.200">
        &copy; {new Date().getFullYear()}
      </Text>
    </Flex>
  )
}

export default Footer
