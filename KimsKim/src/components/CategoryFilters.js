import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Badge, Wrap, WrapItem } from "@chakra-ui/react"

const anzahlEssenMitCategory = foods => {
  const counts = foods
    .map(food => food.category)
    .flat()
    .reduce((total, currCat) => {
      const existingCat = total[currCat.id]
      if (existingCat) {
        existingCat.count += 1
      } else {
        total[currCat.id] = {
          id: currCat.id,
          name: currCat.name,
          count: 1,
        }
      }
      return total
    }, {})

  const countsAsArray = Object.values(counts)
  return countsAsArray
}

const CategoryFilters = () => {
  const { foods } = useStaticQuery(graphql`
    {
      foods: allSanityFood {
        nodes {
          category {
            id
            name
          }
        }
      }
    }
  `)

  // console.log(foods)
  const categoryMitAnzahl = anzahlEssenMitCategory(foods.nodes)
  // console.log(categoryMitAnzahl)

  return (
    <Wrap spacing={{ base: "10px", md: "20px" }}>
      <WrapItem>
        <Link to="/menu">
          <Badge
            fontSize={{ base: "lg", md: "lg" }}
            colorScheme="purple"
            my={{ base: "1", md: "2" }}
            variant="solid"
          >
            Alle {foods.nodes.length}
          </Badge>
        </Link>
      </WrapItem>
      {categoryMitAnzahl.map(category => {
        return (
          <WrapItem key={category.id}>
            <Link to={`/menu/${category.name}`}>
              <Badge
                fontSize={{ base: "lg", md: "lg" }}
                colorScheme="purple"
                my={{ base: "1", md: "2" }}
                variant="solid"
              >
                {category.name} {category.count}
              </Badge>
            </Link>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

export default CategoryFilters
