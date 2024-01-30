import { DataTableProps } from "./types"
import { useSorting } from "./sorting/useSorting"
import { Table } from "./components"

// A component adaptable from a simple HTML table with added funcionalities such as sorting and drag n' drop
function DataTable<T>(props: DataTableProps<T>): JSX.Element {
  const {
    sorted,
    sortByColumn,
    state
  } = useSorting({ data: props.data, columnDefs: props.columnDefs })

  return (
    <Table
      {...props}
      sorted={sorted}
      sortByColumn={sortByColumn}
      sorting={state}
    />
  )
}

export { DataTable }