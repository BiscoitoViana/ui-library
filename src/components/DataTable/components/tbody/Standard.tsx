import { ColumnDef } from "../../types"
import { TRow } from "./trow/TRow"

type TBodyStandardProps<T> = {
  data: T[]
  keyExtractor: keyof T
  columnDefs: ColumnDef<T>[]
  customRowStyle?: (data: T) => string
  hiddenHeader: boolean
}

function Standard<T>({
  data,
  keyExtractor,
  columnDefs,
  customRowStyle,
  hiddenHeader
}: TBodyStandardProps<T>): JSX.Element {
  const classNames = hiddenHeader ? "border-t border-lib-grey-200" : ""

  return (
    <tbody className={classNames}>
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