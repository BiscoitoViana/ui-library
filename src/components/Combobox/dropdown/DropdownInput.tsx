import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef
} from "react"
import { FiSearch } from "react-icons/fi";

import {
  type ComboboxReducerAction,
  type ComboboxReducerState
} from "../actions/types"

type DropdownInputProps<T> = {
  state: ComboboxReducerState<T>
  dispatch: Dispatch<ComboboxReducerAction>
  onChange: (value: T | null) => void
  placeholder?: string
}

function DropdownInput<T>({
  state,
  dispatch,
  onChange,
  placeholder = "Search..."
}: DropdownInputProps<T>): JSX.Element {
  const ref = useRef<HTMLInputElement>(null)
  const onKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if(state.options !== null){
      if(e.code === "ArrowDown"){
        dispatch({ type: "FOCUS-DOWN" })
        return
      }

      if(e.code === "ArrowUp"){
        dispatch({ type: "FOCUS-UP" })
        return
      }

      if(e.code === "Enter"){
        onChange(state.options[state.focusedIndex])
        return
      }

      dispatch({ type: "RESET-FOCUS" })
    }
  },[dispatch, onChange, state.focusedIndex, state.options])

  const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE-TERM", payload: e.target.value })
  }, [dispatch])

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <div className="w-full h-12 relative border-b border-lib-grey-300">
      <input
        ref={ref}
        value={state.searchTerm}
        onChange={onChangeText}
        onKeyDown={onKeyPress}
        placeholder={placeholder}
        className="w-full h-full outline-none text-sm pl-12 pr-4 bg-transparent"
      />
      <div className="flex items-center justify-center w-12 h-12 absolute left-0 top-0 pointer-events-none">
        <FiSearch size={20} className="text-lib-blue-400" />
      </div>
    </div>
  )
}

export { DropdownInput }