// imports
import path, { resolve } from "path"

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

/**
 * 2. Seiten erstellen
 */

export async function createPages(params) {
  await Promise.all([foodInSeite(params), categoriesInSeite(params)])
}
