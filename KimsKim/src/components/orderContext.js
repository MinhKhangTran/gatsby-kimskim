import React from "react"

export const OrderContext = React.createContext()

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = React.useState([])

  const addToOrder = food => {
    setOrder([...order, food])
  }
  const removeFromOrder = index => {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)])
  }
  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useGlobalContext = () => {
  return React.useContext(OrderContext)
}
