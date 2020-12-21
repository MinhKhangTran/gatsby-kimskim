import React from "react"
import { Box, Heading, Grid, Text } from "@chakra-ui/react"

const Mitarbeiter = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)" gap={4}>
      <Text>Mitarbeiter1</Text>
      <Text>Mitarbeiter2</Text>
    </Grid>
  )
}

const Produkte = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)" gap={4}>
      <Text>Produkt1</Text>
      <Text>Produkt2</Text>
    </Grid>
  )
}

export default function Home() {
  return (
    <Box mx="auto" w="90%">
      <Heading color="purple.400">Kim's Laden</Heading>
      <Text>Täglich geöffnet zwischen 11 und 23 Uhr</Text>
      <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}>
        <Mitarbeiter />
        <Produkte />
      </Grid>
    </Box>
  )
}
