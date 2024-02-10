type ComboboxProps<T> = {
  searchTerm: string
  onChangeSearchTerm: (value: string) => void
  options: T[]
  optionKey: keyof T
  optionLabel?: keyof T
  customOptionLabel?: (value: T) => JSX.Element
  value: T | null
  onChange: (value: T | null) => void
  label?: string
  placeholder?: string
  debounce?: number
  emptyOptionLabel?: string
  isLoading?: boolean
}

export { type ComboboxProps }