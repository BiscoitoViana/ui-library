import { useCallback, useEffect, useReducer, useRef } from "react";

import { ComboboxProps } from "./types";
import { comboboxReducer } from "./actions/reducer";

import useDebounce from "./hooks/useDebounce";
import useClickOutside from "./hooks/useClickOutside";

import ComboboxTrigger from "./trigger";
import ComboboxDropdown from "./dropdown";

function Combobox<T>({
  debounce = 0,
  isLoading = false,
  onChangeSearchTerm,
  onChange,
  ...props
}: ComboboxProps<T>): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useReducer(comboboxReducer<T>, {
    open: false,
    focusedIndex: 0,
    searchTerm: props.searchTerm,
    isLoading: isLoading,
    options: props.options
  })

  const search = useDebounce(state.searchTerm, debounce)

  useEffect(() => {
    onChangeSearchTerm(search)
  }, [search, onChangeSearchTerm])

  useEffect(() => {
    dispatch({ type: "UPDATE-OPTIONS", payload: props.options })
  }, [props.options])

  const handleClickOutside = useCallback(() => {
    dispatch({ type: "CLOSE-DROPDOWN" })
  }, [])

  useClickOutside(ref, handleClickOutside)

  const handleChange = useCallback((value: T | null) => {
    onChange(value)
    dispatch({ type: "CLOSE-DROPDOWN" })
  }, [onChange])

  return (
    <div ref={ref} className="w-full relative">
      <ComboboxTrigger {...props} state={state} dispatch={dispatch} />
      <ComboboxDropdown {...props} state={state} dispatch={dispatch} onChange={handleChange} />
    </div>
  )
}

export { Combobox }