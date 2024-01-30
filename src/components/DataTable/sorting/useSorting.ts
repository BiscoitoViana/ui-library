import { useCallback, useMemo, useReducer } from "react";
import { sortingReducer } from "./reducer";
import { ColumnDef } from "..";
import { sortArrayAsDate, sortArrayAsNumber, sortArrayAsString } from "./methods";
import { SortingReducerState } from "./types";

type SortingProps<T> = {
  data: T[],
  columnDefs: ColumnDef<T>[]
}

type SortingResponse<T> = {
  sorted: T[]
  state: SortingReducerState
  sortByColumn: (column: keyof T) => void
}

function useSorting<T>({ columnDefs, data }: SortingProps<T>): SortingResponse<T> {
  const sortedDefinition = columnDefs.find((definition) => definition.sorting !== undefined && definition.sorting.isSorted !== undefined)
  let initial: SortingReducerState = { column: null, direction: "ascending" }

  if (sortedDefinition !== undefined) {
    initial = {
      column: sortedDefinition.column as string,
      direction: sortedDefinition.sorting?.isSorted || "ascending"
    }
  }
  const [state, dispatch] = useReducer(sortingReducer, initial)

  const sortByColumn = useCallback((column: keyof T) => {
    if (state.direction === "descending" && state.column === column) {
      return dispatch({ type: "RESET" })
    }

    dispatch({ type: "SORT", payload: column as string })
  }, [state.column, state.direction])

  const sorted = useMemo(() => {
    if (state.column === null) {
      return data
    }

    const columnDefinition = columnDefs.find(definition => definition.column === state.column)
    if (!columnDefinition) {
      return data
    }

    if (columnDefinition.sorting && columnDefinition.sorting.type === "date") {
      return sortArrayAsDate({ data: data, column: state.column as keyof T, direction: state.direction })
    }

    if (columnDefinition.sorting && columnDefinition.sorting.type === "number") {
      return sortArrayAsNumber({ data: data, column: state.column as keyof T, direction: state.direction })
    }

    if (columnDefinition.sorting && columnDefinition.sorting.type === "string") {
      return sortArrayAsString({ data: data, column: state.column as keyof T, direction: state.direction })
    }

    return data
  }, [columnDefs, data, state.column, state.direction])

  return {
    sorted,
    state,
    sortByColumn
  }
}

export { useSorting }