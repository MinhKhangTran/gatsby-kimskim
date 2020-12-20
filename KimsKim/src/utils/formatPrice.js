export const formatPrice = price =>
  Intl.NumberFormat("de-De", { style: "currency", currency: "EUR" }).format(
    price / 100
  )
