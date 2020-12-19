import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <>
      <Flex
        justify="space-around"
        color="lila.300"
        fontSize="xl"
        fontWeight="semibold"
        pt={2}
      >
        <Link to="/">
          <Text _hover={{ transform: "rotate(-2deg)", color: "lila.600" }}>
            Home
          </Text>
        </Link>
        <Link to="/menu">
          <Text _hover={{ transform: "rotate(2deg)", color: "lila.600" }}>
            Menü
          </Text>
        </Link>
        <Box
          mt="-50px"
          bg="white"
          w="150px"
          h="100px"
          border="4px"
          borderColor="lila.400"
          transform="rotate(-3deg)"
          _hover={{
            transform: "rotate(0deg)",
          }}
        >
          <Grid placeItems="center" h="100%" w="100%">
            <Text color="lila.600" fontSize="2xl" fontWeight="bold">
              Kim's Kim
            </Text>
          </Grid>
        </Box>
        <Link to="/personal">
          {" "}
          <Text _hover={{ transform: "rotate(-4deg)", color: "lila.600" }}>
            Personal
          </Text>
        </Link>
        <Link to="/order">
          {" "}
          <Text _hover={{ transform: "rotate(6deg)", color: "lila.600" }}>
            Bestellung
          </Text>
        </Link>
      </Flex>
    </>
  )
}

export default Navbar
