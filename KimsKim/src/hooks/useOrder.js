import { useState } from "react"
import { useGlobalContext } from "../components/orderContext"
import { formatPrice } from "../utils/formatPrice"
import { getTotal } from "../utils/getTotal"

/**
 * Order function with serverless functions
 * 1.Create state to hold order and error/loading/message
 * 2.Submit order function
 * 2.1. gather all the data
 * 2.2. send data => serverless function
 * 2.3. checking if everything worked
 */

export const useOrder = ({ foods, formInput }) => {
  // 1. State
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { order } = useGlobalContext()

  const getFoodFromOrder = (order, foods) => {
    return order.map(singleOrder => {
      const food = foods.find(singleFood => singleFood.id === singleOrder.id)
      return {
        ...singleOrder,
        name: food.name,
        thumbnail: food.image.asset.fixed.src,
        price: formatPrice(food.price),
      }
    })
  }

  //   2. Submit
  const submitOrder = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    // 2.1 Gather data
    const body = {
      order: getFoodFromOrder(order, foods),
      total: getTotal(order, foods),
      // from form
      name: formInput.name,
      email: formInput.email,
      yuzuTea: formInput.yuzuTea,
    }
    console.log(body)
    // POST
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
    const text = JSON.parse(await res.text())

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false) // turn off loading
      setError(text.message)
    } else {
      // it worked!
      setLoading(false)
      setMessage("Deine Bestellung wurde entgegen genommen :D")
    }
  }

  return { error, loading, message, submitOrder }
}
