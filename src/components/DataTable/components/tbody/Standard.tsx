import { ColumnDef } from "../../types"
import { TRow } from "./trow/TRow"

type TBodyStandardProps<T> = {
  data: T[]
  keyExtractor: keyof T
  columnDefs: ColumnDef<T>[]
  customRowStyle?: (data: T) => string
}

function Standard<T>({
  data,
  keyExtractor,
  columnDefs,
  customRowStyle
}: TBodyStandardProps<T>): JSX.Element {
  return (
    <tbody>
      {data.map(row => (
        <TRow
          key={row[keyExtractor] as string}
          columnDefs={columnDefs}
          data={row}
          customRowStyle={customRowStyle ? customRowStyle(row) : ""}
        />
      ))}
    </tbody>
  )
}

export { Standard }