import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  IconButton,
  HStack,
} from "@chakra-ui/react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { MdAdd } from "react-icons/md"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../components/orderContext"
import { formatPrice } from "../utils/formatPrice"
import { useForm } from "../hooks/useForm"
import { useOrder } from "../hooks/useOrder"
import { getTotal } from "../utils/getTotal"

const Order = ({ data }) => {
  const { addToOrder, order, removeFromOrder } = useGlobalContext()
  const foods = data.foods.nodes
  const { formInput, handleOnChange } = useForm({
    email: "",
    name: "",
    yuzuTea: "",
  })
  const { submitOrder, loading, error, message } = useOrder({
    foods,
    formInput,
  })
  return (
    <Box p={8}>
      <Heading>Möchtest du etwas Bestellen?</Heading>
      <form onSubmit={submitOrder}>
        <FormControl id="email" isRequired isDisabled={loading}>
          <FormLabel>E-Mail Adresse</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={formInput.email}
            onChange={handleOnChange}
            placeholder="Deine Email Adresse"
          />
        </FormControl>
        <FormControl id="name" isRequired isDisabled={loading}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleOnChange}
            placeholder="Dein Name"
          />
        </FormControl>

        <input
          style={{ display: "none" }}
          type="yuzuTea"
          name="yuzuTea"
          id="yuzuTea"
          value={formInput.yuzuTea}
          onChange={handleOnChange}
        />

        <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}>
          <Box border="2px" borderColor="blue.100" my={8}>
            <Heading color="blue.400" as="h3">
              Menü
            </Heading>

            {/* Menu */}
            {foods.map(food => {
              return (
                <HStack
                  key={food.id}
                  align="center"
                  _hover={{ background: "blue.100" }}
                  my={1}
                  ml={2}
                >
                  <Img fixed={food.image.asset.fixed} alt="food.name" />

                  <Text>{food.name}</Text>
                  <Text>{formatPrice(food.price)}</Text>
                  <IconButton
                    size="sm"
                    colorScheme="blue"
                    aria-label="add to order"
                    isDisabled={loading}
                    icon={<MdAdd />}
                    onClick={() => addToOrder({ id: food.id })}
                  ></IconButton>
                </HStack>
              )
            })}
          </Box>
          {/* Order */}
          <Box border="2px" borderColor="blue.100" my={8}>
            <Heading color="blue.400" as="h3">
              Deine Bestellung
            </Heading>
            {order.length === 0 && (
              <Text fontSize="lg" my={2}>
                Füge etwas aus unserem Menü hinzu
              </Text>
            )}
            {order.map((bestellung, index) => {
              const food = foods.find(
                singleFood => singleFood.id === bestellung.id
              )
              return (
                <HStack
                  key={`${bestellung.id}-${index}`}
                  align="center"
                  _hover={{ background: "blue.100" }}
                  my={1}
                  ml={2}
                >
                  <Img fixed={food.image.asset.fixed} alt="food.name" />

                  <Text>{food.name}</Text>
                  <Text>{formatPrice(food.price)}</Text>
                  <IconButton
                    size="sm"
                    colorScheme="red"
                    isDisabled={loading}
                    aria-label="remove from order"
                    icon={<FaTimes />}
                    onClick={() => {
                      removeFromOrder(index)
                    }}
                  ></IconButton>
                </HStack>
              )
            })}
          </Box>
        </Grid>
        <Box mb={6}>
          <Heading as="h2" color="blue.600">
            Summe
          </Heading>
          {order.length === 0 ? (
            <Text fontSize="lg">Du hast derzeit keine Bestellungen</Text>
          ) : (
            <Text fontSize="lg">
              Deine Summe beträgt {formatPrice(getTotal(order, foods))}
            </Text>
          )}
        </Box>
        <Button isLoading={loading} type="submit" colorScheme="blue">
          Jetzt Bestellen
        </Button>
        {error && <Text>Fehler:{error}</Text>}
        {message && (
          <Text mt={4} fontSize="lg">
            {message}
          </Text>
        )}
      </form>
    </Box>
  )
}

export const query = graphql`
  query {
    foods: allSanityFood {
      nodes {
        id
        image {
          asset {
            fixed(width: 100, height: 100) {
              ...GatsbySanityImageFixed
            }
          }
        }
        name
        slug
        price
      }
    }
  }
`
export default Order
