import { type ComboboxReducerAction, type ComboboxReducerState } from "./types";

function comboboxReducer<T>(
  state: ComboboxReducerState<T>,
  action: ComboboxReducerAction<T>
): ComboboxReducerState<T> {
  switch (action.type) {
    case "CHANGE-TERM":
      return { ...state, searchTerm: action.payload }
    case "CLOSE-DROPDOWN":
      return { ...state, open: false }
    case "TOGGLE-DROPDOWN":
      return { ...state, open: !state.open }
    case "RESET-FOCUS":
      return { ...state, focusedIndex: 0 }
    case "SET-FOCUS":
      return { ...state, focusedIndex: action.payload }
    case "UPDATE-OPTIONS":
      return { ...state, options: action.payload }
    case "FOCUS-UP":
      if (state.options !== null) {
        if (state.focusedIndex === 0) {
          return { ...state, focusedIndex: state.options.length - 1 }
        }
        return { ...state, focusedIndex: state.focusedIndex - 1 }
      }
      return state
    case "FOCUS-DOWN":
      if (state.options !== null) {
        if (state.focusedIndex === state.options.length - 1) {
          return { ...state, focusedIndex: 0 }
        }
        return { ...state, focusedIndex: state.focusedIndex + 1 }
      }
      return state
  }
}

export { comboboxReducer }