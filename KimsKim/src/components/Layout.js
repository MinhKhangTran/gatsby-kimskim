import { Box } from "@chakra-ui/react"
import React from "react"

import Background from "../styles/GlobalStyles"
import Typography from "../styles/GlobalStyles"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Typography />
      <Box
        mt={{ base: "16", md: "24" }}
        mb={{ base: "16", md: "24" }}
        mx="auto"
        bg="lila.200"
        p="5px"
        maxW="960px"
        w="90%"
        shadow="xl"
      >
        <Box bg="white">
          <Navbar />
          {children}
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Layout
