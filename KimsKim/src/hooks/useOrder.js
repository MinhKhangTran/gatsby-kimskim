import { useState } from "react"
import { useGlobalContext } from "../components/orderContext"

/**
 * Order function with serverless functions
 * 1.Create state to hold order and error/loading/message
 * 2.Submit order function
 * 2.1. gather all the data
 * 2.2. send data => serverless function
 * 2.3. checking if everything worked
 */

export const useOrder = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { order } = useGlobalContext()

  const submitOrder = e => {
    e.preventDefault()
    console.log(order)
  }

  return { error, loading, message, submitOrder }
}
