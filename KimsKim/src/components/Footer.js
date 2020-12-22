import { Flex, Text } from "@chakra-ui/react"
import React from "react"

const Footer = () => {
  return (
    <Flex mt={8} justify="center">
      <Text textAlign="center" fontSize="xl" color="lila.200">
        &copy; {new Date().getFullYear()} MKT <br></br> Build with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>. Data from{" "}
        <a href="https://www.sanity.io/">Sanity.io</a> . Hosted on{" "}
        <a href="https://www.netlify.com/">Netlify</a>. Inspired by{" "}
        <a href="https://gatsby.pizza/">Wes Bos</a>.
      </Text>
    </Flex>
  )
}

export default Footer
