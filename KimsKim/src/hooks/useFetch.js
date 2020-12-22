import { useState, useEffect } from "react"

const gql = String.raw

// const deets=`
// name
// _id
// image{
//     asset{
//         url
//         metadata{
//             lqip
//         }
//     }
// }
// `

const API_ENDPOINT =
  "https://nslq2l3o.api.sanity.io/v1/graphql/production/default"

//Graphql kann nur post und eher mit fetch.then.then.catch statt async/await

export const useFetch = () => {
  const [mitarbeiter, setMitarbeiter] = useState()
  const [produkt, setProdukt] = useState()

  useEffect(() => {
    fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "wonju") {
              name
              mitarbeiter {
                _id
                name
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
              produkte {
                _id
                name
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setMitarbeiter(res.data.StoreSettings.mitarbeiter)
        setProdukt(res.data.StoreSettings.produkte)
      })
      .catch(err => console.log(err))
  }, [])

  return { mitarbeiter, produkt }
}
