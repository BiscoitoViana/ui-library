interface Country {
  code: string
  name: string
}

const countries = [
  { code: "51", name: "Peru"},
  { code: "54", name: "Argentina" },
  { code: "55", name: "Brazil" },
  { code: "56", name: "Chile" },
  { code: "57", name: "Colombia" },
  { code: "58", name: "Venezuela"},
  { code: "500", name: "Islas Malvinas" },
  { code: "591", name: "Bolivia" },
  { code: "592", name: "Guyana" },
  { code: "593", name: "Ecuador" },
  { code: "594", name: "French Guyana" },
  { code: "595", name: "Paraguay" },
  { code: "597", name: "Suriname" },
  { code: "598", name: "Uruguay" },
]

export {
  type Country,
  countries
}