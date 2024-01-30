
import { DataTableProps } from "../types";
import { SortingReducerState } from "../sorting/types";
import { THead } from "./thead";
import { TBody } from "./tbody";

type TableProps<T> = DataTableProps<T> & {
  sorted: T[]
  sortByColumn: (column: keyof T) => void
  sorting: SortingReducerState
}

function Table<T>({
  columnDefs,
  hiddenHeader = false,
  draggable = false,
  keyExtractor,
  stickyHeader = false,
  customRowStyle,
  sorted,
  sortByColumn,
  sorting,
  onRowDropped,
  ...props
}: TableProps<T>): JSX.Element {
  return (
    <table {...props} className="w-full border-collapse">
      <THead
        columDefs={columnDefs}
        stickyHeader={stickyHeader}
        hiddenHeader={hiddenHeader}
        sortByColumn={sortByColumn}
        state={sorting}
        draggable={draggable}
      />
      <TBody
        data={sorted}
        draggable={draggable}
        onRowDropped={onRowDropped}
        columnDefs={columnDefs}
        keyExtractor={keyExtractor}
        customRowStyle={customRowStyle}
      />
    </table>
  )
}

export { Table }