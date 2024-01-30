import { ColumnDef } from "../../../types"
import { TColumn } from "./TColumn"

type TRowProps<T> = {
  data: T
  columnDefs: ColumnDef<T>[]
  customRowStyle?: string
}

function TRow<T>({
  data,
  columnDefs,
  customRowStyle
}: TRowProps<T>): JSX.Element {  
  return (
    <tr className={`border border-lib-grey-200 text-lib-grey-500 bg-white ${customRowStyle}`}>
      {columnDefs.map(col => (
        <TColumn
          key={col.column as string}
          data={data}
          columnDef={col}
        />
      ))}
    </tr>
  )
}

export { TRow }