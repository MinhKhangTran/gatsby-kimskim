import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./src/components/Layout"
import { theme } from "./src/styles/theme"
import { OrderProvider } from "./src/components/orderContext"

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider resetCss theme={theme}>
      <OrderProvider>
        <Layout>{element}</Layout>
      </OrderProvider>
    </ChakraProvider>
  )
}
