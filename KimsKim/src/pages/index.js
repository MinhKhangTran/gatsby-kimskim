import React from "react"
import { Box, Heading, Grid, Text, Skeleton } from "@chakra-ui/react"
import { useFetch } from "../hooks/useFetch"

const Mitarbeiter = ({ mitarbeiter }) => {
  return (
    <Box mt={12}>
      <Text textAlign="center" fontSize="xl" mb={2} color="blue.300">
        Es arbeitet gerade:
      </Text>
      <Grid templateColumns="repeat(2,1fr)" gap={4}>
        {!mitarbeiter && (
          <>
            <Skeleton
              startColor="blue.500"
              endColor="purple.500"
              height={{ base: "100px", md: "150px" }}
            />
            <Skeleton
              startColor="blue.500"
              endColor="purple.500"
              height={{ base: "100px", md: "150px" }}
            />
          </>
        )}
        {mitarbeiter && !mitarbeiter?.length && (
          <p>Keiner arbeitet zurzeit :(</p>
        )}
        {mitarbeiter?.length &&
          mitarbeiter.map(worker => {
            return (
              <Box pos="relative" key={worker._id}>
                <img
                  src={`${worker.image.asset.url}?w=500&h=400&fit=crop`}
                  alt={worker.name.split(" ")[0]}
                />
                <Text
                  pos="absolute"
                  bottom={{ base: "0%", md: "5%" }}
                  px={{ base: "0", md: "2" }}
                  fontSize={{ base: "base", md: "lg" }}
                  fontWeight={{ base: "normal", md: "semibold" }}
                  left="50%"
                  bg="blue.400"
                  display="inline-block"
                  transform="translateX(-50%) rotate(-2deg)"
                >
                  {worker.name.split(" ")[1]}
                </Text>
              </Box>
            )
          })}
      </Grid>
    </Box>
  )
}

const Produkte = ({ produkt }) => {
  return (
    <Box mt={12}>
      <Text textAlign="center" fontSize="xl" mb={2} color="purple.300">
        Produkt des Tages:
      </Text>
      <Grid templateColumns="repeat(2,1fr)" gap={4}>
        {!produkt && (
          <>
            <Skeleton
              startColor="blue.500"
              endColor="purple.500"
              height={{ base: "100px", md: "150px" }}
            />
            <Skeleton
              startColor="blue.500"
              endColor="purple.500"
              height={{ base: "100px", md: "150px" }}
            />
          </>
        )}
        {produkt && !produkt?.length && <p>Keiner arbeitet zurzeit :(</p>}
        {produkt?.length &&
          produkt.map(worker => {
            return (
              <Box pos="relative" key={worker._id}>
                <img
                  src={`${worker.image.asset.url}?w=500&h=400&fit=crop`}
                  alt={worker.name}
                />
                <Text
                  pos="absolute"
                  bottom={{ base: "0%", md: "5%" }}
                  px={{ base: "0", md: "2" }}
                  fontSize={{ base: "base", md: "lg" }}
                  fontWeight={{ base: "normal", md: "semibold" }}
                  left="50%"
                  bg="purple.400"
                  display="inline-block"
                  transform="translateX(-50%) rotate(2deg)"
                >
                  {worker.name}
                </Text>
              </Box>
            )
          })}
      </Grid>
    </Box>
  )
}

export default function Home() {
  const { mitarbeiter, produkt } = useFetch()
  return (
    <Box mx="auto" w="90%">
      <Heading mt={8} textAlign="center" color="purple.400">
        Kim's Laden
      </Heading>
      <Text fontSize="xl" textAlign="center">
        Täglich geöffnet zwischen 11 und 23 Uhr
      </Text>
      <Grid
        gap={4}
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      >
        <Mitarbeiter mitarbeiter={mitarbeiter} />
        <Produkte produkt={produkt} />
      </Grid>
    </Box>
  )
}
