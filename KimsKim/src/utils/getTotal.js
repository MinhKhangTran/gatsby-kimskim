export const getTotal = (order, foods) => {
  return order.reduce((total, current) => {
    const food = foods.find(singleFood => singleFood.id === current.id)
    const summe = total + food.price
    return summe
  }, 0)
}
