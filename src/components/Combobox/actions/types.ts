type ComboboxReducerState<T> = {
  open: boolean
  focusedIndex: number
  searchTerm: string
  isLoading: boolean
}

type ComboboxReducerAction =
| { type: "TOGGLE-DROPDOWN" }
| { type: "CLOSE-DROPDOWN" }
| { type: "RESET-FOCUS" }
| { type: "SET-FOCUS", payload: number }
| { type: "FOCUS-UP" }
| { type: "FOCUS-DOWN" }
| { type: "CHANGE-TERM", payload: string }

export {
  type ComboboxReducerAction,
  type ComboboxReducerState
}