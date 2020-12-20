// imports
import path, { resolve } from "path"
import fetch from "isomorphic-fetch"
const API_ENDPOINT = "https://sampleapis.com/coffee/api/hot"

/**
 * Create Page
 * 1. Inhalt in Seiten umwandeln
 * 1.1 Template erstellen
 * 1.2 Query alle Inhalte
 * 1.3 Loop over und erstelle Seite
 */

// =====================================FOOD=============================================

// 1. Food in Seite umwandeln
const foodInSeite = async ({ graphql, actions }) => {
  // 1.1 Template
  const foodTemplate = path.resolve("./src/templates/Food.js")
  // 1.2 Query
  const { data } = await graphql(`
    query {
      foods: allSanityFood {
        nodes {
          name
          slug
        }
      }
    }
  `)
  // 1.3 looping
  data.foods.nodes.forEach(food => {
    actions.createPage({
      path: `menu/${food.slug}`,
      component: foodTemplate,
      context: {
        slug: food.slug,
      },
    })
  })
}

// =====================================Categories=============================================

// 1.Inhalt in Seite
const categoriesInSeite = async ({ graphql, actions }) => {
  // 1.1 Template
  const categoryTemplate = path.resolve("./src/pages/menu.js")
  // 1.2 query
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          name
          id
        }
      }
    }
  `)
  // 1.3 Looping
  data.categories.nodes.forEach(category => {
    actions.createPage({
      path: `menu/${category.name}`,
      component: categoryTemplate,
      context: {
        name: category.name,
      },
    })
  })
}

// =====================================Personal=============================================

/**
 * Pagination und In seiten machen
 * 1.Template for single pages
 * 2.Query All
 * 3.Loop over and make single pages
 * 4.How many persons per page
 * 5.Loop to pages and add person to according page
 */

const personalInSeite = async ({ actions, graphql }) => {
  // 1.Template
  const personalTemplate = path.resolve("./src/templates/SinglePersonal.js")
  // 2. Query
  const { data } = await graphql(`
    query {
      allSanityPersonal {
        totalCount
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `)
  // 3. Looping
  data.allSanityPersonal.nodes.forEach(person => {
    actions.createPage({
      path: `/personal/${person.slug.current}`,
      component: personalTemplate,
      context: {
        name: person.person,
        slug: person.slug.current,
      },
    })
  })
  // 4. how many per page
  const pageSize = parseInt(process.env.GATSBY_PER_PAGE)
  const pageCount = Math.ceil(data.allSanityPersonal.totalCount / pageSize)
  // 5.Loop over n pages
  Array.from({ length: pageCount }, (_, index) => {
    actions.createPage({
      path: `/personal/${index + 1}`,
      component: path.resolve("./src/pages/personal.js"),
      context: {
        skip: index * pageSize,
        currentPage: index + 1,
        pageSize,
      },
    })
  })
}

/**
 * Create Node
 * 1.Fetch from external api
 * 2.Loop over and create node for each
 * 3. create node dynamic
 */

const fetchCoffeeAndTurnIntoNode = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // 1.Fetch from external api
  const response = await fetch(API_ENDPOINT)
  const coffees = await response.json()
  // 2.Loop over and create node for each
  for (const coffee of coffees) {
    const nodeMeta = {
      id: createNodeId(`coffee-${coffee.name}`),
      parent: null,
      children: [],
      internal: {
        type: "coffee",
        mediaType: "application/json",
        contentDigest: createContentDigest(coffee),
      },
    }
    // 3.create node dynamic
    actions.createNode({
      ...coffee,
      ...nodeMeta,
    })
  }
}

/**
 * 2. Seiten/Nodes erstellen
 */

export async function createPages(params) {
  await Promise.all([
    foodInSeite(params),
    categoriesInSeite(params),
    personalInSeite(params),
  ])
}

export async function sourceNodes(params) {
  await Promise.all([fetchCoffeeAndTurnIntoNode(params)])
}
