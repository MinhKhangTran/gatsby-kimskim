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

export const useFetch = () => {
  const [mitarbeiter, setMitarbeiter] = useState()
  const [produkt, setProdukt] = useState()

  useEffect(() => {
    fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body:JSON.stringify({
      //       query:
      //   })
    })
  }, [])

  return { mitarbeiter, product }
}
