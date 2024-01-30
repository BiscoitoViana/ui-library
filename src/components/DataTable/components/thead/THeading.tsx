import { useCallback } from "react"

import { THeadingContainer } from "./THeadingContainer"
import { SortingReducerState } from "../../sorting/types"
import { ColumnDef } from "../../types"

type THeadingProps<T> = {
  columnDef: ColumnDef<T>
  sortByColumn: (column: keyof T) => void
  state: SortingReducerState
}

function THeading<T>({
  columnDef,
  sortByColumn,
  state
}: THeadingProps<T>): JSX.Element {
  const handleSorting = useCallback(() => {
    sortByColumn(columnDef.column)
  }, [columnDef.column, sortByColumn])


  return (
    <THeadingContainer
      columnDef={columnDef}
      sorting={{
        sortable: columnDef.sorting !== undefined,
        sorted: state.column === columnDef.column,
        direction: state.column === columnDef.column ? state.direction : undefined
      }}
      onSortButtonClick={handleSorting}
    >
      {columnDef.customHeader ?? columnDef.headerTitle ?? columnDef.column as string}
    </THeadingContainer>
  )
}

export { THeading }