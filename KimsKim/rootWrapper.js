import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./src/components/Layout"
import { theme } from "./src/styles/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider resetCss theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
