type MockDataTableRecord = {
  id: number,
  customer: string
  shippingTo: string
  price: number
  status: "open" | "on hold" | "in progress"
}

const products: MockDataTableRecord[] = [
  {
    id: 943291,
    customer: "Al Beback",
    shippingTo: "Rio de Janeiro, Brazil",
    price: 2022,
    status: "in progress"
  },
  {
    id: 943290,
    customer: "Ray C. Stone",
    shippingTo: "Buenos Aires, Argentina",
    price: 250,
    status: "on hold"
  },
  {
    id: 943289,
    customer: "Chris P. Bacon",
    shippingTo: "New Jersey, USA",
    price: 1238,
    status: "open"
  },
  {
    id: 943288,
    customer: "Ella Vator",
    shippingTo: "Cuzco, Peru",
    price: 2901,
    status: "open"
  }
]

export {
  type MockDataTableRecord,
  products
}