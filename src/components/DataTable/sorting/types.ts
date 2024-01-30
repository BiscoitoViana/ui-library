type SortingProps<T> = {
  data: T[]
  column: keyof T
  direction: "ascending" | "descending"
}

type SortingReducerAction =
| { type: "SORT", payload: string }
| { type: "RESET" }

type SortingReducerState = {
  column: string | null
  direction: "ascending" | "descending"
}

export {
  type SortingProps,
  type SortingReducerAction,
  type SortingReducerState
}