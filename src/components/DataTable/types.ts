import { ComponentProps } from "react"

type Sorting =
  | undefined
  | {
    type: "string" | "number" | "date",
    isSorted?: "ascending" | "descending"
  }

type ColumnDef<T> = {
  column: keyof T
  sorting?: Sorting
  headerTitle?: string
  customHeader?: JSX.Element
  customCellRenderer?: (data: T) => JSX.Element
  align?: "left" | "center" | "right"
  wrapContent?: "wrap" | "nowrap"
  overflow?: "hidden" | "auto"
}

// A component adaptable from a simple HTML table with added funcionalities such as sorting and drag n' drop
type DataTableProps<T> = Omit<ComponentProps<"table">, "children"> & {
  // The array of data to be displayed
  data: T[]
  // unique identifier propery of the data item
  keyExtractor: keyof T
  // list of definitions about how the columns should behave
  columnDefs: ColumnDef<T>[],
  customRowStyle?: (data: T) => string
  stickyHeader?: boolean
  hiddenHeader?: boolean
  draggable?: boolean
  onRowDropped?: (value: T[]) => void
}

export type {
  ColumnDef,
  DataTableProps,
  Sorting
}