import { useEffect, useState } from "react"
import { type Meta } from "@storybook/react"

import { Combobox } from "./Combobox"
import { type Country, countries as data } from "./mock/data"
import { Flag } from "./mock/Flag"
import { FlagCode } from "./mock/flags"

const meta = {
  title: "Components/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>

export default meta

export const Standard = () => {
  const [search, setSearch] = useState<string>("")
  const [value, setValue] = useState<Country | null>(null)
  const [countries, setCountries] = useState<Country[]>(data)

  useEffect(() => {
    const filtered = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || []
    setCountries(filtered)
  }, [search])

  return (
    <div className="h-64">
      <Combobox
        options={countries}
        optionKey="code"
        searchTerm={search}
        onChangeSearchTerm={(term) => setSearch(term)}
        value={value}
        onChange={(country) => setValue(country)}
        label="Select a South American country..."
      />
    </div>
  )
}

export const OptionLabel = () => {
  const [search, setSearch] = useState<string>("")
  const [value, setValue] = useState<Country | null>(null)
  const [countries, setCountries] = useState<Country[]>(data)

  useEffect(() => {
    const filtered = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || []
    setCountries(filtered)
  }, [search])

  return (
    <div className="h-64">
      <Combobox
        options={countries}
        optionKey="code"
        optionLabel="name"
        searchTerm={search}
        onChangeSearchTerm={(term) => setSearch(term)}
        value={value}
        onChange={(country) => setValue(country)}
        label="Select a South American country..."
      />
    </div>
  )
}

export const CustomOptionLabel = () => {
  const [search, setSearch] = useState<string>("")
  const [value, setValue] = useState<Country | null>(null)
  const [countries, setCountries] = useState<Country[]>(data)

  useEffect(() => {
    const filtered = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || []
    setCountries(filtered)
  }, [search])

  return (
    <div className="h-64">
      <Combobox
        options={countries}
        optionKey="code"
        customOptionLabel={(country) => (
          <div className="flex gap-x-2 items-center">
            <div className="w-4 h-4">
              <Flag code={country.code as FlagCode} />
            </div>
            <span>+{country.code} {country.name}</span>
          </div>
        )}
        searchTerm={search}
        onChangeSearchTerm={(term) => setSearch(term)}
        value={value}
        onChange={(country) => setValue(country)}
        label="Select a South American country..."
      />
    </div>
  )
}

export const WithDebounce = () => {
  const [search, setSearch] = useState<string>("")
  const [value, setValue] = useState<Country | null>(null)
  const [countries, setCountries] = useState<Country[]>(data)

  useEffect(() => {
    const filtered = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || []
    setCountries(filtered)
  }, [search])

  return (
    <div className="h-64">
      <Combobox
        options={countries}
        optionKey="code"
        customOptionLabel={(country) => (
          <div className="flex gap-x-2 items-center">
            <div className="w-4 h-4">
              <Flag code={country.code as FlagCode} />
            </div>
            <span>+{country.code} {country.name}</span>
          </div>
        )}
        searchTerm={search}
        onChangeSearchTerm={(term) => setSearch(term)}
        value={value}
        onChange={(country) => setValue(country)}
        label="Select a South American country..."
        debounce={1000}
      />
    </div>
  )
}